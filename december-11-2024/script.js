let name = "  john doe   ";

let trimmed = name.trim();

//the trim () method remover whitespace from both of a srings

console.log(trimmed);

//splitting a string into an array;

const data = "this is a string which will split into array";

const splittedData = data.split(" ");

console.log(splittedData);

const something =
  "Javascript is a greate laguage  bdbsdisi vshjfvud fiegfuiwegifuu fwedgfwihfi";
// slice extract the part of the string it takes 2 parameter 1st is the string
//  position and  second is the ending position and ending position is not include
// let newData = something.slice(7, 30);

let newData = something.slice(14);
newData = something.slice(-13, -4);

//substring
//substring is simillar tosialce but cannot  take negative value

newData = something.substring(0, 4);
newData = something.substring(0);

//substar

//1st parameter string position and
//2nd parameter is length of string you want to extract

//substar is a string method the takes tthe starting point
newData = something.substr(0, 20);

console.log(newData);

//replace method
//replace method is replace only the first element
//replace method use only same carector too cahnge like small to samll and cpital to capital
const mystring = " all the glirter isi sthe gold .gold perso is p3ercaouse";
let newText = mystring.replace("gold", "silver");

newText = mystring.replaceAll("gold", "silver");
console.log(newText);



//replace string 

let mychange = `Google is a big company,google heire so  may pepole in google company`;

//i is for casesensetive search is for globle search
let newChange = mychange.replace(/google/ig, "amazon");//because of this back tick this change all the letter in a paragraph 
console.log(newChange);



//topics for  js in 13-12-2024
// DOM
// bom  -browser object model (window object)
// var LET const
// function
// es6 feature
// object 
// array 
// math method 
// string method