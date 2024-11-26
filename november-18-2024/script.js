//object
const person = {
  name: "John",
  age: 30,
  city: "bhopal",
};
//to know the  data  type of person
console.log(typeof person);
console.log(person.name);
console.log(person.age);
console.log(person.city);

//array
const numbers = [10, 2, 45, 86, 7];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[1]);

//function is a way to group code together you  can run it anytime anywhere
function sayHello() {
  console.log("this is semon world ");
  alert("Hello");
  document.write("Hello Qt");
}
sayHello();

//parameters are when you are declaring a function

function addition(num1, num2) {
  return num1 + num2;
} //agrument while calling the function
console.log(addition(100, 500));
document.getElementById("demo").innerHTML = addition(100, 700);

let number = 345;

function cube() {
  return number * number * number;
}
console.log(cube());

//funnction experation
const multiply = function (x, y) {
  return x * y;
};
console.log(multiply(5, 6));

const divide = (a, b) => {
  return a / b;
};
console.log(divide(10, 2));
