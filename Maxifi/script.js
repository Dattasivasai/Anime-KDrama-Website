const wrapper = document.querySelector(".wrapper");

function registerActive() {
    wrapper.classList.add("active");
}

function loginActive() {
    wrapper.classList.remove("active");
}

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const forgotPassword = document.getElementById("forgot-password");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document
        .getElementById("login-email")
        .value
        .trim();

    const password = document
        .getElementById("login-password")
        .value;

    if (!email || !password) {
        alert("Please enter your email and password.");
        return;
    }

    // Temporary frontend-only login.
    window.location.href = "index.html";
});

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document
        .getElementById("register-name")
        .value
        .trim();

    const email = document
        .getElementById("register-email")
        .value
        .trim();

    const password = document
        .getElementById("register-password")
        .value;

    if (!name || !email || !password) {
        alert("Please complete all registration fields.");
        return;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }

    alert("Registration completed. You can now log in.");

    registerForm.reset();
    loginActive();
});

forgotPassword.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Password recovery is not available yet.");
});
