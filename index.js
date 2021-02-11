var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var path = require("path");
var MongoClient = require("mongodb").MongoClient;
var sha256 = require("sha256");
var jwt = require("jsonwebtoken");
var env = require("dotenv").config();
const { body, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
// const { response } = require("express");

// Configure environment
const dbURL = process.env.DB_URL;
const tokenExpiry = process.env.TOKEN_EXPIRY;
const port = process.env.PORT;

const url = `http://127.0.0.1:${port}`;

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
    if (req.headers['content-type'] != 'application/json') {
        return res.sendStatus(400);
    }
    req.course = req.body;
    if (Object.keys(req.body).length != 8) {
        return res.status(400).send("درس وارد شده معتبر نیست");
    }
    if (!('department' in req.course) ||
        !('courseId' in req.course) ||
        !('groupId' in req.course) ||
        !('unit' in req.course) ||
        !('title' in req.course) ||
        !('examTime' in req.course) ||
        !('classTimeArray' in req.course) ||
        !('instructor' in req.course)) {
        return res.status(400).send("فیلد های مربوط به صورت کامل مقدار دهی نشده اند");
    }
    for (let i = 0; i < req.course.classTimeArray.length; i++) {
        if (!validateTimeObject(req.course.classTimeArray[i])) {
            return res.status(400).send("زمان بندی های مشخص شده معتبر نیست");
        }
    }
    next();
}

// Functions
function getToken(email, role) {
    const userObject = { "email": email, "role": role, "expiry": +new Date() + tokenExpiry };
    return jwt.sign(userObject, process.env.ACCESS_TOKEN_SECRET);
}

function validateTimeObject(timeObject) {
    if (Object.keys(timeObject).length != 5) {
        return false;
    }
    if (!('weekday' in timeObject) ||
        !('startHour' in timeObject) ||
        !('startMin' in timeObject) ||
        !('endHour' in timeObject) ||
        !('endMin' in timeObject)) {
        return false;
    }
    if (!Number.isInteger(timeObject.weekday) ||
        !Number.isInteger(timeObject.startHour) ||
        !Number.isInteger(timeObject.startMin) ||
        !Number.isInteger(timeObject.endHour) ||
        !Number.isInteger(timeObject.endMin)) {
        return false;
    }
    if (timeObject.weekday < 0 || timeObject.weekday > 6) {
        return false;
    }
    if (timeObject.startHour < 6 || timeObject.startHour > 20) {
        return false;
    }
    if (timeObject.endHour < 6 || timeObject.endHour > 20) {
        return false;
    }
    if (timeObject.startMin != 0 && timeObject.startMin != 30) {
        return false;
    }
    if (timeObject.endMin != 0 && timeObject.endMin != 30) {
        return false;
    }
    if (timeObject.endHour < timeObject.startHour) {
        return false;
    }
    if (timeObject.endHour - timeObject.startHour > 8) {
        return false;
    }
    return true;
}

function sendMail(emailAddress, subject, bodyText) {
    let transport = new nodemailer.createTransport({
        "service": 'gmail',
        "auth": {
            "user": process.env.USER,
            "pass": process.env.PASS
        }
    });
    let mailOption = {
        "from": `Aryan from SeMaster <${process.env.USER}>`,
        "to": emailAddress,
        "subject": subject,
        "text": bodyText
    }
    transport.sendMail(mailOption, function (err, mail) { });
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
                try {
                    db.close();
                } catch (e) { }
                return;
            }
            db.collection("User").findOne({ "email": emailSent }, function (err2, user) {
                if (err2) {
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
            try {
                db.close();
            } catch (e) { }
            return;
        }
        db.collection("Course").find({}).toArray(function (err2, allCourses) {
            if (err2) {
                res.sendstatus(500);
            } else {
                res.json(allCourses).send();
            }
            try {
                db.close();
            } catch (e) { }
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
            try {
                db.close();
            } catch (e) { }
            return;
        }
        db.collection("Course").distinct("department", {}, function (err2, departments) {
            if (err2) {
                res.sendstatus(500);
            } else {
                res.json(departments);
            }
            try {
                db.close();
            } catch (e) { }
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
    body("courseId").isInt({ min: 20000, max: 100000 }).toInt(),
    body("groupId").isInt({ min: 1, max: 100 }).toInt(),
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
                try {
                    db.close();
                } catch (e) { }
                return;
            }
            const selectObject = { "email": req.user.email, "courseId": req.body.courseId, "groupId": req.body.groupId };
            db.collection("Selection").update(selectObject, selectObject, { upsert: true },
                function (err2, input) {
                    if (err2) {
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(200);
                    }
                    try {
                        db.close();
                    } catch (e) { }
                }
            )
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
    body("courseId").isInt({ min: 20000, max: 100000 }).toInt(),
    body("groupId").isInt({ min: 1, max: 100 }).toInt(),
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
                try {
                    db.close();
                } catch (e) { }
                return;
            }
            const unselectObject = { "email": req.user.email, "courseId": req.body.courseId, "groupId": req.body.groupId }
            db.collection("Selection").deleteOne(unselectObject, function (err2, deleted) {
                if (err2) {
                    res.sendStatus(500);
                } else {
                    res.sendStatus(200);
                }
                try {
                    db.close();
                } catch (e) { }
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
                try {
                    db.close();
                } catch (e) { }
                return;
            }
            db.collection("Selection").find({ "email": req.user.email }, { "_id": 0 }).toArray(function (err2, mySelections) {
                if (err2) {
                    res.sendStatus(500);
                } else {
                    res.json(mySelections);
                }
                try {
                    db.close();
                } catch (e) { }
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
                try {
                    db.close();
                } catch (e) { }
                return;
            }
            db.collection("User").findOne({ "email": emailSent }, function (err2, user) {
                if (err2) {
                    return res.sendstatus(500);
                }
                if (!user) {
                    return res.status(401).send("کاربر مورد نظر یافت نشد");
                }
                if (user.password == sha256(passwordSent) && user.role == "admin") {
                    res.cookie("token", getToken(emailSent, user.role), { "maxAge": tokenExpiry, "httpOnly": true });
                    res.sendStatus(200);
                } else if (user.password != sha256(passwordSent)) {
                    return res.status(401).send("رمز عبور اشتباه است");
                } else {
                    return res.status(403).send("شما دسترسی مدیر ندارید");
                }
                db.close();
            })
        });
    });

/*
PUT :: /api/admin/addcourse			body JSON: course object properties; admintoken
    200 : no message			    OK
    400 : no message			    bad parameters, validation fail
    403 : no message			    FORBIDEN
*/
app.put("/api/admin/addcourse",
    authenticateAdmin,
    validateCourseMiddleware,
    body("courseId").isInt({ min: 20000, max: 100000 }).toInt().withMessage("کد درس معتبر نیست"),
    body("groupId").isInt({ min: 1, max: 100 }).toInt().withMessage("شماره گروه درس معتبر نیست"),
    body("unit").isInt({ min: 0, max: 4 }).toInt().withMessage("تعداد واحد معتبر نیست"),
    function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send(errors.array()[0]["msg"]);
        }
        MongoClient.connect(dbURL, function (err1, db) {
            if (err1) {
                res.sendStatus(500);
                try {
                    db.close();
                } catch (e) { }
                return;
            }
            const queryObject = { "courseId": req.body.courseId, "groupId": req.body.groupId };
            db.collection("Course").update(queryObject, req.course, { upsert: true }, function (err2, inserted) {
                if (err2) {
                    res.sendStatus(500);
                } else {
                    res.sendStatus(200);
                }
                try {
                    db.close();
                } catch (e) { }
            })
        })
    });

/*
DEL	:: /api/admin/removecourse		urlencoded: courseId, groupId; admintoken
    200 : no message			    OK
    400 : no message			    bad parameters, validation fail
    403 : no message			    FORBIDEN
*/
app.delete("/api/admin/removecourse",
    authenticateAdmin,
    body("courseId").isInt({ min: 20000, max: 100000 }).toInt().withMessage("کد درس معتبر نیست"),
    body("groupId").isInt({ min: 1, max: 100 }).toInt().withMessage("شماره گروه درس معتبر نیست"),
    function (req, res) {
        if (Object.keys(req.body).length != 2) {
            return res.status(400).send("درخواست ارسال شده معتبر نیست");
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send(errors.array()[0]["msg"]);
        }
        MongoClient.connect(dbURL, function (err1, db) {
            if (err1) {
                res.sendStatus(500);
                try {
                    db.close();
                } catch (e) { }
                return;
            }
            const queryObject = { "courseId": req.body.courseId, "groupId": req.body.groupId };
            db.collection("Course").deleteMany(queryObject, function (err2, deleted) {
                if (err2) {
                    res.sendStatus(500);
                }
                db.collection("Selection").deleteMany(queryObject, function (err3, deletedSelections) {
                    if (err3) {
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(200);
                    }
                    try {
                        db.close();
                    } catch (e) { }
                })
            })
        })
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
                try {
                    db.close();
                } catch (e) { }
                return;
            }
            db.collection("Course").deleteMany({}, function (err2, deletedCourses) {
                if (err2) {
                    res.sendStatus(500);
                    try {
                        db.close();
                    } catch (e) { }
                    return;
                }
                db.collection("Selection").deleteMany({}, function (err3, deletedSelections) {
                    if (err3) {
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(200);
                    }
                    try {
                        db.close();
                    } catch (e) { }
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

app.post("/api/forgetpass/req",
    body("email").isEmail().normalizeEmail().withMessage("پست الکترونیک وارد شده معتبر نیست."),
    function (req, res) {
        if (Object.keys(req.body).length != 1) {
            return res.status(400).send("درخواست ارسال شده معتبر نیست.");
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send(errors.array()[0]["msg"]);
        }
        const token = getToken(req.body.email, "std");
        const link = `${url}/forgetpass/serve/${token}`;
        MongoClient.connect(dbURL, function (err1, db) {
            if (err1) {
                res.sendStatus(500);
                try {
                    db.close();
                } catch (e) { }
                return;
            }
            db.collection("User").findOne({ "email": req.body.email }, function (err2, user) {
                if (err2) {
                    res.sendStatus(500);
                } else if (!user) {
                    res.sendStatus(401);
                } else {
                    sendMail(req.body.email,
                        "فراموشی رمز عبور",
                        `لینک بازیابی: ${link}`);
                    res.sendStatus(200);
                }
                try {
                    db.close();
                } catch (e) { }
            })
        });
    });

app.get("/forgetpass/serve/:token",
    function (req, res) {
        if (!req.params["token"]) {
            res.sendStatus(400);
            return;
        }
        const token = req.params["token"];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, user) {
            if (err || user.expiry < +new Date()) {
                return res.sendStatus(403);
            }
            res.cookie("token", getToken(user.email, user.role), { "maxAge": tokenExpiry, "httpOnly": true });
            res.sendFile(path.join(__dirname, '/public/change_password/index.html'));
        });
    });

app.get("/api/account/validate",
    authenticate,
    function (req, res) {
        res.json({ "email": req.user.email, "role": req.user.role }).send();
    });