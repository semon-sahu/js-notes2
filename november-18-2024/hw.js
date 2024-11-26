function arithmatic(num1, num2) {
  return num1 + num2;

}

console.log(arithmatic(50, 70));
document.getElementById("sum").innerHTML=arithmatic(50,70);

function multi(a,b){
    return a*b;
}
console.log(multi(75, 5));

document.getElementById("multi").innerHTML=multi(75,5)

function divide(a, b) {
  return a / b;
  
}
console.log(divide(75, 5));
document.getElementById("divide").innerHTML = divide(75, 5);




const details={
    name:"semon",
    age:20,
    city:"bhoapl"

};
console.log(details);
document.getElementById("details").innerHTML=details.name+" "+details.age+" "+details.city;
