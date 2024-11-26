 //4 ways to get display any word on screen jaavascript
console.log("hello world");
window.alert("hhello world");
document.write("hello world");
document.getElementById("demo").innerHTML = "hello world";

// the document object mobel
// when a web page is loaded the border create a document pbject modle
// of he page.
// the html Dom  model is construct as a tree of  object

//with the object model,javascript ggets all the pwoer it need to
// creat dynamic html

var age = 34; //is a globle socpe without any bracket
{
  var name = "john"; //its a  block scope is a bracke me value dete hai
}

//var has global  scope   and let and const has block or functiion scope
{
  var a = 34;
  let b = 20;
  const c = 30;
  console.log(c);
}
console.log(a);
