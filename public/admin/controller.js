function getURL_Encoded(object) {
    let elements = [];
    for (let property in object) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(object[property]);
        elements.push(encodedKey + "=" + encodedValue);
    }
    return elements.join("&");
}

function bootstrapMessage(message, type, place, id) {
    document.getElementById(place).innerHTML += `<div id=${id} class="alert alert-${type} alert-dismissible fade show" role="alert">${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
}

document.getElementById("addTime").onclick = function (event) {
    document.getElementById("addTiming").innerHTML += '<div id="classTime" class="timing row mb-3 g-3 align-items-center">' + document.getElementById("classTime").innerHTML + '</div>';
}

document.getElementById("removeCourse").onclick = function (event) {
    const alertId = "removeAlertBox"
    let parameters = {
        "courseId": document.getElementById("removeCourseId").value,
        "groupId": document.getElementById("removeGroupId").value
    }
    if (parameters.courseId == "" || parameters.groupId == "") {
        return;
    }
    if (document.getElementById(alertId)) {
        document.getElementById(alertId).remove();
    }
    let params = getURL_Encoded(parameters);
    let req = new XMLHttpRequest();
    const url = '/api/admin/removecourse';
    req.onreadystatechange = function () {
        if (this.readyState == 1) {
            document.getElementById("removeCourse").disabled = true;
        } else if (this.readyState == 4) {
            document.getElementById("removeCourse").disabled = false;
            if (this.status == 403) {
                bootstrapMessage("شما دسترسی لازم برای انجام اینکار را ندارید.", "danger", "remove-alert_placeholder", alertId);
            } else if (this.status == 500) {
                bootstrapMessage("خطای داخلی سرور، لطفا چند دقیقه دیگر مجددا تلاش کنید.", "danger", "remove-alert_placeholder", alertId);
            } else if (this.status == 200) {
                bootstrapMessage("انجام شد", "success", "remove-alert_placeholder", alertId);
            } else {
                bootstrapMessage(this.responseText, "danger", "remove-alert_placeholder", alertId);
            }
        }
    }
    req.open("DELETE", url);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(params);
}