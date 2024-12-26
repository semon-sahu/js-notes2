//spread operator(....)
//you can copy an obhject or array into another obbject or array using

const person={
    name:"johnny dep",

    age:60,
    location:"london",
};

const perosn2={...person,hobby:"dancer"};
console.log(perosn2);


//array 
const number=[1,2,3,45,6,89,6];
const number2=[...number,7,8,9];
console.log(number2);


//rest parameter(....)
function display(...num){
    console.log(num);
}
display(10,2);
display(10,2,3,4);
display(10,2,488,9,6,2);
display(10,2,45,8,9,2,2,3);
display(10,2,45,8,9,2,2,3,545,78);
//rest parameter returns theoutput as an array;
//when the spread operator is used as a 
//write a function that clalulate the sum of given number

function sumAll(...number){
let total =0;
for(let num of number){
    total+= num;

}
return total;

}
console.log(sumAll(1,2,3,4));
console.log(sumAll(15,1558,10));



