function redirectToPanel() {
    window.location.pathname = "/admin/panel";
}

function getURL_Encoded(object) {
    let elements = [];
    for (let property in object) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(object[property]);
        elements.push(encodedKey + "=" + encodedValue);
    }
    return elements.join("&");
}

function bootstrap_warning(message) {
    document.getElementById("alert_placeholder").innerHTML += `<div id="authalert" class="alert alert-danger alert-dismissible fade show" role="alert">${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
}

document.getElementById("signin").onclick = function () {
    if (document.getElementById("authalert")) {
        document.getElementById("authalert").remove();
    }
    const req = new XMLHttpRequest();
    const url = '/api/admin/signin';
    const data = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
    }
    const params = getURL_Encoded(data);
    req.onreadystatechange = function () {
        if (this.readyState == 1) {
            document.getElementById("signin").innerHTML += '<span class="spinner-border spinner-border-sm" id="spinner" role="status" aria-hidden="true"></span>'
            document.getElementById("signin").disabled = true;
        } else if (this.readyState == 4) {
            document.getElementById("spinner").remove();
            document.getElementById("signin").disabled = false;
            if (this.status != 200) {
                bootstrap_warning(req.responseText);
            } else if (this.status == 200) {
                redirectToPanel();
            }
        }
    }
    req.open("POST", url);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(params);
}