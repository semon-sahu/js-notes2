//for in 
const person = {
  name: "semon",
  age: 20,
  city: "london",
};
let text="";
for(let x in person){
    text+=person[x]+"<br>";//for in me key ko bracket me dete hai
}
document.getElementById("demo").innerHTML=text;



const numbers = [3154,56,86,12,45]
let text1 = "";
for (let i in numbers) {
  text1 += numbers[i] + "<br>";
}
document.getElementById("demo1").innerHTML = text1;



//for of 
const name = "javascript";
let text2 = "";
for (let y in name) {
  text2 += y + "<br>"; //for of me key ko bracket me nahi dete hai
}
document.getElementById("demo3").innerHTML = text2;



const persons = ["semon","rahul","vashudha","ram","maheshwari"];
let text3 = "";

for (let m in persons) {
  text3 += m + "<br>"; //for in me key ko bracket me dete hai
}
document.getElementById("demo4").innerHTML = text3;





const num1=[1,2,3,4,5,6];

//for in
for (let a in num1){
    console.log(num1[a]*10)
}


//for of
for (let a in num1) {
  console.log(a * 10);
}
