const wrapper = document.querySelector(".wrapper");

function registerActive() {
    if (wrapper) {
        wrapper.classList.add("active");
    }
}

function loginActive() {
    if (wrapper) {
        wrapper.classList.remove("active");
    }
}

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const forgotPassword = document.getElementById("forgot-password");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailInput = document.getElementById("login-email");
        const passwordInput = document.getElementById("login-password");

        const email = emailInput ? emailInput.value.trim() : "";
        const password = passwordInput ? passwordInput.value : "";

        if (!email || !password) {
            alert("Please enter your email and password.");
            return;
        }

        // Temporary frontend-only login.
        window.location.href = "index.html";
    });
}

if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("register-name");
        const emailInput = document.getElementById("register-email");
        const passwordInput = document.getElementById("register-password");

        const name = nameInput ? nameInput.value.trim() : "";
        const email = emailInput ? emailInput.value.trim() : "";
        const password = passwordInput ? passwordInput.value : "";

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
}

if (forgotPassword) {
    forgotPassword.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Password recovery is not available yet.");
    });
}
