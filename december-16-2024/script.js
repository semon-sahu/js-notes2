const array1 = [10, 20, 30, 40]; //array literal
const array2 = new Array(1, 2, 3, 4);
const array3 = [];
array3[0] = "BMW";
array2[1] = "Audi";
array1[2] = "Porche";

console.log(array1);
console.log(array2);
console.log(array3);

console.log(array2.length);

const mixed = [1, 2, "hello", { name: "semon", age: 45 }, [20, 30, 40]];
console.log(mixed[3].name);
console.log(mixed[4][0]);

let text = "<ol>";
for (let i = 0; i < array1.length; i++) {
  text += "<li>" + array1[i] + "</li>";
}
text += "</ol>";
document.getElementById("demo").innerHTML = text;

const number2 = [100, 300, 400, 500];

const newArray = array1.concat(number2);//concat array kko merge kar deta hai like  1 index and 2 index
console.log(newArray);
//hw maap and for each



//push ,pop,shhift ,unshift,array,mmethod

const names=["akshay","semon","nikhil","aditya","ansh"];

//push  add last  a new name ya elsemnt in array list
names.push("lalit");
console.log(names);


//pop remove the last  name ya elsemnt in array list


names.pop("lalit");
console.log(names);


//shift remove the first name ya elsemnt in array list


names.shift("akshay");
console.log(names);

//unshift add the first value new name ya elsemnt in array list


names.unshift("akshay");
console.log(names);