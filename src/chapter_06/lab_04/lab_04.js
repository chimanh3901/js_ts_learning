console.log("Lab 04");

//Bài làm
/*
const username = document.getElementById("username");
const password = document.getElementById("password");

const loginBtn = document.getElementById("login");

const successPage = document.getElementById("successPage");

const fixedUsername = "abcd@gmail.com";
const fixedPassword = "12345678";

loginBtn.addEventListener("click", () => {
    if (username.value === fixedUsername && password.value === fixedPassword) {
        alert("Đăng nhập thành công");
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
    } else {
        username.style.borderColor = "red";
        password.style.borderColor = "red";
        alert("Tài khoản hoặc Mật khẩu không đúng");
    }

});
*/


//Bài chữa

console.log("---");

const usernameElm = document.getElementById("username");
const passwordElm = document.getElementById("password");

const btnLogin = document.getElementById("login");

btnLogin.addEventListener("click", () => {
    const username = usernameElm.value;
    const password = passwordElm.value;
    if (username === "abcd@gmail.com" && password === "123456") {
        alert("Đăng nhập thành công");
        window.location.href = "success.html";
    } else {
        alert("Tài khoản hoặc mật khẩu không đúng");
        usernameElm.style.borderColor = "red";
        passwordElm.style.borderColor = "red";
    }
});

