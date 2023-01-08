const checker = document.querySelector(".checker");
const password = document.querySelector("#password");
const eye = document.querySelector(".fa-eye");

eye.addEventListener("click", showPassword);
password.addEventListener("input", checkPassword);

function showPassword() {
  eye.classList.toggle("fa-eye-slash");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

function checkPassword() {
  const value = password.value;

  if (value.length < 1) {
    checker.style.width = "none";
    checker.style.background = "none";
  } else if (value.length <= 4) {
    checker.style.width = "25%";
    checker.style.background = "#e44f4e";
  } else if (value.length <= 8) {
    checker.style.width = "50%";
    checker.style.background = "#f7d445";
  } else if (value.length <= 12) {
    checker.style.width = "100%";
    checker.style.background = "#72c06b";
  }
}
