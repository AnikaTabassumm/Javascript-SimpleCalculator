const display = document.getElementById("result-display");

function operator(input) {
  return ["/", "*", "-", "+"].includes(input);
}

function addToDispaly(input) {
  var output = display.value;
  var lastInputOperator = operator(output[output.length - 1]);

  if (operator(input)) {
    if (!lastInputOperator && output != "") {
      display.value += input;
    }
  } else {
    display.value += input;
  }
}

function clearDisplay() {
  display.value = "";
}

function del() {
  var output = display.value;

  if (output == "Error" || output == "Infinity") {
    clearDisplay();
  } else {
    display.value = display.value.slice(0, -1);
  }
}

function calculate() {
  try {
    if (display.value == "") {
      display.value == "";
    } else {
      display.value = eval(display.value);
    }
  } catch {
    display.value = "Error";
  }
}
