// script.js

const result = document.getElementById("result");

// Append value to the input field
function appendValue(value) {
  result.value += value;
}

// Clear the input field
function clearResult() {
  result.value = "";
}

// Delete the last character
function deleteLast() {
  result.value = result.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
  try {
    result.value = eval(result.value.replace("÷", "/").replace("×", "*"));
  } catch (error) {
    result.value = "Error";
  }
}
