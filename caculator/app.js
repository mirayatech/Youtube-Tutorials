const button = document.querySelectorAll("input[type='button']");
const textField = document.querySelector(".text__field");

button.forEach((button) => button.addEventListener("click", getTheValue));

function getTheValue() {
  let value = this.value;

  if (value !== "AC" && value !== "DEL" && value !== "=") {
    textField.value = textField.value + value;
  }

  if (value == "=") {
    textField.value = eval(textField.value);
  }

  if (value == "AC") {
    textField.value = "";
  }

  if (value == "DEL") {
    let length = textField.value;
    textField.value = length.slice(0, -1);
  }
}
