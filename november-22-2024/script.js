//normal fucntion
function dispaly() {
  alert("this iis a normal funcyion");
}

//function experassion

const dispaly1 = function () {
  alert("this is a function experassion");
};

//arrow  function
const dispaly2 = () => {
  alert("arraw function");
};

//eventlisner function

let button = document.getElementById("btn");

//whenever you pass a function as an agrumnet to another function
//never use()
//you can call regular function before declaration but not
//arrow function and function experassion
button.addEventListener("click", dispaly);
button.addEventListener("mouseover", function () {
  console.log("hellow form mouseover function");
});

let h1 = document.querySelectorAll("h1");
console.log(h1);

h1[0].innerHTML="hello from query selector";
h1[0].style.color="red";
h1[0].style.backgroundColor="pink";