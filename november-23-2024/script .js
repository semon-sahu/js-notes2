// function display() {

//   alert("button was click");
// }

//   let button = document.getElementById("btn1");
//   button.addEventListener("mousemove", function () {
//     alert("button was hover");
//   });

document.getElementById("myform").addEventListener("submit", validate);
function validate(e) {
  //to prevent thee default behaviour of from submission
  e.preventDefault();
  //fetch input value
  let myname = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("paw").value;
  let cnfpassword = document.getElementById("cnfpsw").value;
  console.log(myname, email, password, cnfpassword);

  if (myname == "" || email == "" || password == "" || cnfpassword == "") {
    alert("all fiels are requiredd");
    return false;
  }
  if (password !== cnfpassword) {
    alert("password does not match ");
    return false;
  }
  alert("form sumbitted sucessfully");
}
