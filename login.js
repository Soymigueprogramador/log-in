const loginForm = document.getElementById("loginForm");
const userName = document.getElementById("username");
const password = document.getElementById("password");
const messanger = document.getElementById("messanger");

function login(event) {
    event.preventDefault();
    const inputUserName = userName.value;
    const inputPassword = password.value;

    if (inputUserName === "idforideas" && inputPassword === "1234") {
        messanger.textContent = "Bienvenido queridos usuarios";
        messanger.style.color = 'green';
    } else {
        messanger.textContent = "Ups, intenta otra vez";
        messanger.style.color = 'red';
    }
}

loginForm.addEventListener("submit", login);
