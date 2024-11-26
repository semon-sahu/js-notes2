function addition() {
  let num1 = parseFloat(document.getElementById("input1").value);
  let num2 = parseFloat(document.getElementById("input2").value);
  var result = num1 + num2;
  
  document.getElementById("demo").innerHTML = result;
}
function subtraction() {
  let num1 = parseFloat(document.getElementById("input1").value);
  let num2 = parseFloat(document.getElementById("input2").value);
  var result = num1 - num2;

  document.getElementById("demo").innerHTML = result;
}
function Multiplication() {
  let num1 = parseFloat(document.getElementById("input1").value);
  let num2 = parseFloat(document.getElementById("input2").value);
  var result = num1 * num2;

  document.getElementById("demo").innerHTML = result;
}
function divide() {
  let num1 = parseFloat(document.getElementById("input1").value);
  let num2 = parseFloat(document.getElementById("input2").value);
  var result = num1 / num2;

  document.getElementById("demo").innerHTML = result;
  
}

function dispaly(){
    let myinput = document.getElementById("myinput").value;
    document.getElementById("dis").innerHTML = myinput;
    

}