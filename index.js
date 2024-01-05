const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

// console.log(buttonsEl);

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    // console.log(buttonsEl[i].textContent);
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else if (buttonValue === "<<<") {
      removeValue();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputFieldEl.value = "";
}

function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}

function removeValue() {
  inputFieldEl.value = inputFieldEl.value.slice(0, -1);
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
  /* inputFieldEl.value = inputFieldEl.value + buttonValue; */
}
