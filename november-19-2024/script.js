function dispaly() {
  console.log("Hello, World!");
}

var details = {
  name: "semon sahu",
  age: 20,
  city: "bhopal",
};

function show() {
  //   show.name + show.age + show.city;
  document.getElementById("demo").innerHTML =
    details.name + " " + details.age + " " + details.city;
}

function cube() {
  var cube = prompt("enter your number");
  var result = cube * cube * cube;
  document.getElementById("cube").innerHTML = result;
}

function change() {
  var let = document.getElementById("heading");
  h1.style.color = "red";
  h1.style.backgroundColor = "blue";

  // document.getElementById("change").innerHTML
}
