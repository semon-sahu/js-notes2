// <!-- question 1 -->

function displayMyName(semon) {
  const name = "semon";
  console.log(name);
  alert(name);
  document.getElementById(semon).innerHTML = name;
}

// <!-- question 2-->

function showMyInput() {
  var getvalue = document.getElementById("myInput").value;

  alert(getvalue);
  console.log(getvalue);
  document.getElementById("show").innerHTML = getvalue;
}

// <!-- question 3-->

function display() {
  var show1 = document.getElementById("input1").value;
  var show2 = document.getElementById("input2").value;
  var show3 = document.getElementById("input3").value;

  document.getElementById("local").innerHTML =
    show1 + " " + show2 + " " + show3;
}
