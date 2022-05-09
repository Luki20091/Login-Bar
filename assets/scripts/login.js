let logins = [
    {
        username: "admin",
        password: "haslo123"
    },
    {
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
                alert(username + " jest zalogowany");
                window.location.reload();
                return;
            }
        }
        alert("Nieprawidłowa nazwa użytkownika lub hasło");
        return;
    }
    alert("Wypełnij formularz logowania");
};
