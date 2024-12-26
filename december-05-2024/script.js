let header = "Template lliterals";
let tags = ["Template Strings", "javascript", "es6"];
let text = `<h2>${header}</h2><ul>`;

for (let x of tags) {
  text += `<li>${x}</li>`;
}
text += `<ul>`;

document.getElementById("container").innerHTML = text;

//A function passed as an argument twoanother function is called as a called back function

const number = [23, 45, 64, 678];

number.forEach(calculate);
function calculate(y) {
  console.log(y * 100);

}
//forEach method taska callback function as an argument



//math functionn

let output=Math.PI;
output=Math.round(45.236565);
//math.round to the nearest whole number

output=Math.ceil(45.454);
//math.cellthe the nearest higher whole number

output=Math.floor(35.677);
//math.gloor the down  nearest higher whole number
output = Math.trunc(48.877);


console.log(output);