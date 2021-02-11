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

document.getElementById("signin").onclick = function () {
    const parameters = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
    }
    if (parameters.email == "" || parameters.password == "") {
        return;
    }
    const params = getURL_Encoded(parameters);
    const req = new XMLHttpRequest();
    const url = '/api/admin/signin';
    req.onreadystatechange = function () {
        if (this.readyState == 1) {
            document.getElementById("signin").innerHTML += '<span class="spinner-border spinner-border-sm" style="width: 2rem; height: 2rem;" id="spinner" role="status" aria-hidden="true"></span>'
            document.getElementById("signin").disabled = true;
        } else if (this.readyState == 4) {
            document.getElementById("spinner").remove();
            document.getElementById("signin").disabled = false;
            if (this.status == 200) {
                redirectToPanel();
            } else if (this.status == 400) {

            } else if (this.status == 401) {

            } else if (this.status == 401) {

            } else {

            }
        }
    }
    req.open("POST", url);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(params);
}