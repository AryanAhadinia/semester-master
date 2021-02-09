var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var path = require("path");
var MongoClient = require("mongodb").MongoClient;
var sha256 = require("sha256");
var jwt = require("jsonwebtoken");
var env = require("dotenv").config();
const { body, validationResult } = require("express-validator");
const { response } = require("express");

// Configure environment
const dbURL = process.env.DB_URL;
const tokenExpiry = process.env.TOKEN_EXPIRY;
const port = process.env.PORT;

// Configure app
var app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Starting HTTP server
var httpServer = require("http").createServer(app);
httpServer.listen(port, function () {
    console.log(`Server is running on port ${port}.`);
});

// Serving static files
app.use("/", express.static(path.join(__dirname, "/public")));

// Middlewares
function authenticate(req, res, next) {
    const token = req.cookies["token"];
    if (!token) {
        return res.sendStatus(403);
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, user) {
        if (err || user.expiry < +new Date()) {
            return res.sendStatus(403);
        }
        req.user = user;
        res.cookie("token", getToken(user.email, user.role), { "maxAge": tokenExpiry, "httpOnly": true });
        next();
    });
}

function authenticateAdmin(req, res, next) {
    const token = req.cookies["token"];
    if (token == null) {
        return res.sendStatus(403);
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, user) {
        if (err || user.expiry < +new Date() || user.role != "admin") {
            return res.sendStatus(403);
        }
        req.user = user;
        res.cookie("token", getToken(user.email, user.role), { "maxAge": tokenExpiry, "httpOnly": true });
        next();
    });
}

function validateCourseMiddleware(req, res, next) {
    next();
}

// Functions
function getToken(email, role) {
    const userObject = { "email": email, "role": role, "expiry": +new Date() + tokenExpiry };
    return jwt.sign(userObject, process.env.ACCESS_TOKEN_SECRET);
}

function validateCourseObject(courseId) {

}

function validateTimeObject(timeObject) {

}

// APIs

/*
POST:: /api/signup					urlencoded: email, password
    200 : no message, cookie	    OK
    400 : error text			    bad parameters, validation fail
    409 : no message,			    already exist
*/
app.post("/api/signup",
    body("email").isEmail().normalizeEmail().withMessage("پست الکترونیک وارد شده معتبر نیست"),
    body("password").isLength({ min: 8 }).withMessage("رمز عبور باید دست کم شامل 8 کاراکتر باشد"),
    function (req, res) {
        if (Object.keys(req.body).length != 2) {
            return res.status(400).send("درخواست ارسال شده معتبر نیست");
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send(errors.array()[0]["msg"]);
        }
        const emailSent = req.body.email;
        const passwordSent = req.body.password;
        MongoClient.connect(dbURL, function (err1, db) {
            if (err1) {
                res.sendStatus(500);
                return
            }
            db.collection("User", function (err2, users) {
                if (err2) {
                    res.sendStatus(500);
                    db.close();
                    return;
                }
                users.findOne({ "email": emailSent }, function (err3, user) {
                    if (err3) {
                        res.sendStatus(500);
                        db.close();
                        return;
                    }
                    if (user) {
                        res.status(409).send("شما پیشتر ثبت نام کرده اید");
                        db.close();
                        return;
                    }
                    users.insertOne({ "email": emailSent, "password": sha256(passwordSent), "role": "std" }, function (err4, userInserted) {
                        if (err4) {
                            res.sendStatus(500);
                            db.close();
                            return;
                        }
                        res.cookie("token", getToken(emailSent, "std"), { "maxAge": tokenExpiry, "httpOnly": true });
                        res.sendStatus(200);
                        db.close();
                    })

                })
            })
        });
    });


/*
POST:: /api/signin				    urlencoded: email, password
    200 : no message, cookie	    OK
    400 : error text			    bad parameters, validation fail
    401 : error text			    user not found, password not match 
*/
app.post("/api/signin",
    body("email").isEmail().normalizeEmail().withMessage("پست الکترونیک وارد شده معتبر نیست"),
    body("password").isLength({ min: 8 }).withMessage("رمز عبور باید دست کم شامل 8 کاراکتر باشد"),
    function (req, res) {
        if (Object.keys(req.body).length != 2) {
            return res.status(400).send("درخواست ارسال شده معتبر نیست");
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send(errors.array()[0]["msg"]);
        }
        const emailSent = req.body.email;
        const passwordSent = req.body.password;
        MongoClient.connect(dbURL, function (err1, db) {
            if (err1) {
                res.sendStatus(500);
                return;
            }
            db.collection("User", function (err2, users) {
                if (err2) {
                    res.sendStatus(500);
                    db.close();
                    return;
                }
                users.findOne({ "email": emailSent }, function (err3, user) {
                    if (err3) {
                        return res.sendstatus(500);
                    }
                    if (!user) {
                        return res.status(401).send("کاربر مورد نظر یافت نشد");
                    }
                    if (user.password == sha256(passwordSent)) {
                        res.cookie("token", getToken(emailSent, user.role), { "maxAge": tokenExpiry, "httpOnly": true });
                        res.sendStatus(200);
                    } else {
                        return res.status(401).send("رمز عبور اشتباه است");
                    }
                    db.close();
                })
            })
        });
    });


/*
GET	:: /api/schedule/courses
    200 : array of course objects
*/
app.get("/api/schedule/courses", function (req, res) {
    MongoClient.connect(dbURL, function (err1, db) {
        if (err1) {
            res.sendStatus(500);
            return;
        }
        db.collection("Course", function (err2, courses) {
            if (err2) {
                res.sendStatus(500);
                db.close();
                return;
            }
            courses.find({}).toArray(function (err3, allCourses) {
                if (err3) {
                    return res.sendstatus(500);
                }
                response.sendJson(allCourses);
                db.close();
            })
        })
    });
});

/*
GET :: /api/schedule/departments
    200 : array of departments
*/
app.get("/api/schedule/departments", function (req, res) {
    MongoClient.connect(dbURL, function (err1, db) {
        if (err1) {
            res.sendStatus(500);
            return;
        }
        db.collection("Course", function (err2, courses) {
            if (err2) {
                res.sendStatus(500);
                db.close();
                return;
            }
            courses.distinct("department", {}, function (err, departments) {
                if (err3) {
                    return res.sendstatus(500);
                }
                response.sendJson(departments);
                db.close();
            })
        })
    });
});

/*
PUT	:: /api/schedule/select			urlencoded: course id, groupId; token
    200 : no message			    OK
    400 : no message			    bad parameters, validation fail
    401 : no message		    	course not found 
    403 : no message			    FORBIDEN
*/
app.put("/api/schedule/select",
    authenticate,
    body("courseId").isInt({ min: 20000, max: 100000 }),
    body("groupId").isInt({ min: 1, max: 100 }),
    function (req, res) {
        if (Object.keys(req.body).length != 2) {
            return res.sendStatus(400);
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.sendStatus(400);
        }
        MongoClient.connect(dbURL, function (err1, db) {
            if (err1) {
                res.sendStatus(500);
                return;
            }
            db.collection("Selection", function (err2, selections) {
                if (err2) {
                    res.sendStatus(500);
                    db.close();
                    return;
                }
                selections.update({ "email": req.user.email, "courseId": req.body.courseId, "groupId": req.body.groupId },
                    { "email": req.user.email, "courseId": req.body.courseId, "groupId": req.body.groupId },
                    { upsert: true }, function (err3, input) {
                        if (err3) {
                            res.sendStatus(500);
                            db.close();
                            return;
                        }
                        res.sendStatus(200);
                    })
            })
        })
    });

/*
DEL	:: /api/schedule/unselect		urlencoded: course id, groupId; token
    200 : no message			    OK
    400 : no message			    bad parameters, validation fail
    403 : no message			    FORBIDEN
*/
app.delete("/api/schedule/unselect",
    authenticate,
    body("courseId").isInt({ min: 20000, max: 100000 }),
    body("groupId").isInt({ min: 1, max: 100 }),
    function (req, res) {
        if (Object.keys(req.body).length != 2) {
            return res.sendStatus(400);
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.sendStatus(400);
        }
        MongoClient.connect(dbURL, function (err1, db) {
            if (err1) {
                res.sendStatus(500);
                return;
            }
            db.collection("Selection", function (err2, selections) {
                if (err2) {
                    res.sendStatus(500);
                    db.close();
                    return;
                }
                selections.deleteOne({ "email": req.user.email, "courseId": req.body.courseId, "groupId": req.body.groupId }, function (err3, input) {
                    if (err3) {
                        res.sendStatus(500);
                        db.close();
                        return;
                    }
                    res.sendStatus(200);
                })
            })
        })
    });

/*
GET	:: /api/schedule/selections		token
    200: array of courses
*/
app.get("/api/schedule/selections",
    authenticate,
    function (req, res) {
        MongoClient.connect(dbURL, function (err1, db) {
            if (err1) {
                res.sendStatus(500);
                return;
            }
            db.collection("Selection", function (err2, selections) {
                if (err2) {
                    res.sendStatus(500);
                    db.close();
                    return;
                }
                selections.find({ "email": req.user.email }, { "_id": 0 }).toArray(function (err3, mySelections) {
                    if (err3) {
                        res.sendStatus(500);
                        db.close();
                        return;
                    }
                    res.json(mySelections).send();
                })
            })
        })
    });

/*
POST:: /api/admin/signin	        urlencoded: email, password
    200 : no message, cookie	    OK
    400 : error text			    bad parameters, validation fail
    401 : error text			    user not found, password not match 
*/
app.post("/api/admin/signin",
    body("email").isEmail().normalizeEmail().withMessage("پست الکترونیک وارد شده معتبر نیست"),
    body("password").isLength({ min: 8 }).withMessage("رمز عبور باید دست کم شامل 8 کاراکتر باشد"),
    function (req, res) {
        if (Object.keys(req.body).length != 2) {
            return res.status(400).send("درخواست ارسال شده معتبر نیست");
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send(errors.array()[0]["msg"]);
        }
        const emailSent = req.body.email;
        const passwordSent = req.body.password;
        MongoClient.connect(dbURL, function (err1, db) {
            if (err1) {
                res.sendStatus(500);
                return;
            }
            db.collection("User", function (err2, users) {
                if (err2) {
                    res.sendStatus(500);
                    db.close();
                    return;
                }
                users.findOne({ "email": emailSent }, function (err3, user) {
                    if (err3) {
                        return res.sendstatus(500);
                    }
                    if (!user) {
                        return res.status(401).send("کاربر مورد نظر یافت نشد");
                    }
                    if (user.password == sha256(passwordSent) && user.role == "admin") {
                        res.cookie("token", getToken(emailSent, user.role), { "maxAge": tokenExpiry, "httpOnly": true });
                        res.sendStatus(200);
                    } else {
                        return res.status(401).send("رمز عبور اشتباه است");
                    }
                    db.close();
                })
            })
        });
    });

/*
PUT	:: /api/admin/addcourse			body JSON: course object properties; admintoken
    200 : no message			    OK
    400 : no message			    bad parameters, validation fail
    403 : no message			    FORBIDEN
*/
app.post("/api/admin/addcourse",
    authenticateAdmin,
    validateCourseMiddleware,
    function (req, res) {
        console.log(req.body);
    });

/*
DEL	:: /api/admin/removecourse		urlencoded: courseId, groupId; admintoken
    200 : no message			    OK
    400 : no message			    bad parameters, validation fail
    403 : no message			    FORBIDEN
*/
app.put("/api/admin/removecourse",
    authenticateAdmin,
    function (req, res) {

    });

/*
DEL	:: /api/admin/dropsemester		admintoken
    200 : no message			    OK
    403 : no message			    FORBIDEN
*/
app.delete("/api/admin/dropsemester",
    authenticateAdmin,
    function (req, res) {
        MongoClient.connect(dbURL, function (err1, db) {
            if (err1) {
                res.sendStatus(500);
                return;
            }
            db.collection("Courses").deleteMany({}, function (err2, deletedCourses) {
                if (err2) {
                    res.sendStatus(500);
                    db.close();
                    return;
                }
                db.collection("Selection").deleteMany({}, function (err3, deletedSelections) {
                    if (err3) {
                        res.sendStatus(500);
                        db.close();
                        return;
                    }
                })
            })
        })
    });

/*
GET	:: /api/admin/crawl				urlencoded: eduToken; admintoken
    200 : no message			OK
    403 : no message			FORBIDEN
    // TODO
*/
app.put("/api/admin/crawl",
    authenticateAdmin,
    function (req, res) {

    });
