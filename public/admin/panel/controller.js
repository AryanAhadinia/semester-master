function getURL_Encoded(object) {
    let elements = [];
    for (let property in object) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(object[property]);
        elements.push(encodedKey + "=" + encodedValue);
    }
    return elements.join("&");
}

document.getElementById("addTime").onclick = function (event) {
    document.getElementById("addTiming").innerHTML += '<div id="classTime" class="timing row mb-3 g-3 align-items-center">' + document.getElementById("classTime").innerHTML + '</div>';
}

document.getElementById("removeCourse").onclick = function (event) {
    let parameters = {
        "courseId": document.getElementById("removeCourseId").value,
        "groupId": document.getElementById("removeGroupId").value
    }
    if (parameters.courseId == "" || parameters.groupId == "") {
        return;
    }
    let params = getURL_Encoded(parameters);
    let req = new XMLHttpRequest();
    const url = '/api/admin/removecourse';
    req.onreadystatechange = function () {
        if (this.readyState == 1) {
            // document.getElementById("signin").innerHTML += '<span class="spinner-border spinner-border-sm" id="spinner" role="status" aria-hidden="true"></span>'
            document.getElementById("removeCourse").disabled = true;
        } else if (this.readyState == 4) {
            // document.getElementById("spinner").remove();
            document.getElementById("removeCourse").disabled = false;
            if (this.status != 200) {
                // bootstrap_warning(req.responseText);
            } else if (this.status == 200) {
                // redirectToPanel();
            }
        }
    }
    req.open("DELETE", url);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(params);
}