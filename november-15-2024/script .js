var heading = document.getElementById("demo");

//heading .innerhtml="do your work evveryday"
var name = "john dom";
var age = 30;

//concatination
// console.log(name+" "+age)
heading.innerHTML = name + " " + age;
// var username=prompt("enter your name");
// var userage=prompt("enter your age");

//get color name and backgroynd coloe
//for user and applay on heading

var txtcolor = prompt("enter your color");
var bgcolor = prompt("enter your bgcolor");

heading.style.color = txtcolor;
heading.style.backgroundColor = bgcolor;

var myimg = document.getElementById("myimg");
myimg.src = "images.jpg";
