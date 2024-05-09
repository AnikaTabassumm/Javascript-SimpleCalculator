const display = document.getElementById("result-display");

function operator(input) {
  return ["/", "*", "-", "+"].includes(input);
}

function addToDispaly(input) {
  var output = display.value;
  var lastInputOperator = operator(output[output.length - 1]);

  if (output != "Error" && output != "Infinity") {
    if (operator(input)) {
      if ((!lastInputOperator && output != "") || (output == "" && input == "-")){
        display.value += input;
      }
    } else if (input == ".") {
      if (output == "") {
        display.value = display.value + 0 + input;
      } else if (output[output.length - 1] == ".") {
        display.value = output;
      } else {
        display.value += input;
      }
    } else {
      /*if (output == 0) {
        display.value = input;
      } else {*/
        display.value += input;
    //  }
    }
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
