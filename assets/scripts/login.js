let logins = [
    {
        key: "109b3ea6-3956-4520-9efa-004ad6554403",
        username: "admin",
        password: "haslo123"
    },
    {
        key: "cc9243b5-ab0b-4a1a-83f9-a1fd541d1e03",
        username: "admin2",
        password: "pączek"
    },
]

window.addEventListener("load", function () {
    document.getElementById("username").focus();
});

document.getElementById("login").addEventListener("click", getLogin);

document.getElementById("password").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getLogin();
    }
});

document.getElementById("username").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getLogin();
    }
});

function getLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username != "" && password != "") {
        for (var i = 0; i < logins.length; i++) {
            if (username == logins[i].username && password == logins[i].password) {
                document.getElementById("username").value = "";
                document.getElementById("password").value = "";
                document.getElementById("check-true").style.display = "block";
                document.getElementById("check-false").style.display = "none";
                document.getElementById("check-username").innerHTML = username;
                location.href = "index.html?username=" + logins[i].username + "&key=" + logins[i].key;
                return;
            }
        }
        document.getElementById("username").focus();
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("check-false").style.display = "block";
        document.getElementById("check-true").style.display = "none";
        return;
    }
    if (username == "") {
        document.getElementById("username").focus();
        return;
    }
    if (password == "") {
        document.getElementById("password").focus();
        return;
    }
};
