const num = document.querySelectorAll(".num");
const inputValue = document.querySelector(".value");
const clearBtn = document.querySelector(".clear");
const deletBtn = document.querySelector(".delet");
const equalBtn = document.querySelector(".equal");

num.forEach((item) => {
  item.addEventListener("click", () => {
    inputValue.value += item.innerText;
  });
});
clearBtn.addEventListener("click", () => {
  inputValue.value = "";
});
deletBtn.addEventListener("click", () => {
  inputValue.value = inputValue.value.slice(0, -1);
});
equalBtn.addEventListener("click", () => {
  if (inputValue.value != "") {
    inputValue.value = eval(inputValue.value);
  }
});
