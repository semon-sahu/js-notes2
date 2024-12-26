//destructing assigment syntex is a javascript experassion that makes it possible to unpack value from array or propertires from object into distinct variables

// jab kabhi bohot sari valus hoto yee use karte hai short way me sab kuch print karva ne ke liye 
//destructing
const numbers=[10,20,30,40,50,60,70,80,90];

//old way
const num1=numbers[0];
const num2=numbers[1];


//new way
const  [a,b,c,d,e,f,g]=numbers;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);



//destructing with dpread operator

const array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const [x,y,z,...nums]=array1;
console.log(x);
console.log(y);
console.log(z);
console.log(nums);


//destructing with object

const person={
    name:"john",
    age:30,
    city:"bhopal",
};
//old way

// const name=person.name;
// const age=person.age;
// const city=person.city;
//new way

const {name,age,city}=person;
console.log(name);
console.log(age);
console.log(city);
