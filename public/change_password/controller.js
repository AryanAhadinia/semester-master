function getURL_Encoded(object) {
    let elements = [];
    for (let property in object) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(object[property]);
        elements.push(encodedKey + "=" + encodedValue);
    }
    return elements.join("&");
}

function setEmail() {
    const req = new XMLHttpRequest();
    const url = '/api/account/validate';
    req.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                document.getElementById("email").value = JSON.parse(this.responseText).email;
            } else {

            }
        }
    }
    req.open("GET", url);
    req.send();
}

document.getElementById("change").onclick = function () {
    const parameters = {
        "password": document.getElementById("password").value
    }
    if (parameters.password == "") {
        return;
    }
    const params = getURL_Encoded(parameters);
    const req = new XMLHttpRequest();
    const url = '/api/account/change_password';
    req.onreadystatechange = function () {
        if (this.readyState == 1) {
            document.getElementById("change").innerHTML += '<span class="spinner-border spinner-border-sm" style="width: 2rem; height: 2rem;" id="spinner" role="status" aria-hidden="true"></span>'
            document.getElementById("change").disabled = true;
        } else if (this.readyState == 4) {
            document.getElementById("spinner").remove();
            document.getElementById("change").disabled = false;
            if (this.status == 200) {
                redirectToPanel();
            } else if (this.status == 400) {

            } else if (this.status == 403) {

            } else if (this.status == 500) {

            } else {

            }
        }
    }
    req.open("POST", url);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(params);
}

setEmail();