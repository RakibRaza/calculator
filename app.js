// select items
const num = document.querySelectorAll(".num");
const inputValue = document.querySelector(".value");
const clearBtn = document.querySelector(".clear");
const deletBtn = document.querySelector(".delet");
const equalBtn = document.querySelector(".equal");

let isRestart = false;
num.forEach((item) => {
  item.addEventListener("click", () => {
    if (isRestart) {
      inputValue.value = item.innerText;
      isRestart = false;
    } else {
      inputValue.value += item.innerText;
    }
  });
});
clearBtn.addEventListener("click", () => {
  inputValue.value = "";
});
deletBtn.addEventListener("click", () => {
  inputValue.value = inputValue.value.slice(0, -1);
});
equalBtn.addEventListener("click", () => {
  isRestart = true;
  if (inputValue.value != "") {
    inputValue.value = eval(inputValue.value);
    isRestart = true;
  }
});
