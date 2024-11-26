function change() {
  var display = document.getElementById("demo");
  display.innerHTML = "This is a change code for click event";
  display.style.color = "red";
}

function multi() {
  let num1 = parseFloat(document.getElementById("input1").value);
  let num2 = parseFloat(document.getElementById("input2").value);

  var result = num1 * num2;
  document.getElementById("maths").innerHTML = result;
}

function divide() {
  let num3 = parseFloat(document.getElementById("input1").value);
  let num4 = parseFloat(document.getElementById("input2").value);

  var result = num3 / num4;
  document.getElementById("maths").innerHTML = result;
}
