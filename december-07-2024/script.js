output = Math.min(34, 6, 889, 7247, 623268, 87266, 6246);
output = Math.max(34, 6, 889, 7247, 623268, 87266, 6246);
console.log(output);

output = Math.random();

output = Math.floor(Math.random() * 10);
//return random number betweed 0 nd 10
output = Math.floor(Math.random() * 100);

console.log(output);

output = Math.floor(Math.random() * 10) + 1;

console.log(output);

//min include max exclude

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomNumber(200, 500));

function getIncludeNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getIncludeNumber(200, 400));

//map

const Number = [1, 2, 3, 4, 5];
const newNumber = Number.map(double);

function double(x) {
  return x * x;
}
console.log(newNumber);
console.log(Number);


const cars=["audi","mercides","jaguar","honda city"];
let text="<ul>";
cars.forEach(function(car){
    
})