var objlogins = [
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
        for (var i = 0; i < objlogins.length; i++) {
            if (username == objlogins[i].username && password == objlogins[i].password) {
                alert(username + " jest zalogowany");
                console.log(username + " jest zalogowany");
                window.location.reload();
                return;
            }
        }
        alert("Nieprawidłowa nazwa użytkownika lub hasło");
        console.log("Nieprawidłowa nazwa użytkownika lub hasło");
        return;
    }
    alert("Wypełnij formularz");
    console.log("Wypełnij formularz");
};
