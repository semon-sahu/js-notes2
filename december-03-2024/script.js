//wap to print a odd number from 1 to 100
//wap to print a even number from 1 to 20


printEvenNumber(); 
function printEvenNumber() {
  for (let num = 1; num <= 20; num++) {
    if (num % 2 === 0) {
      console.log(num);
    }
  }
}


printOddNumber();
function printOddNumber() {
  for (let num = 1; num <= 20; num++) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  }
}



let text="";
let y=1;
while(y<=10){
    text +=`this number is  ${y} <br>`;
    y++;

}
document.getElementById("demo").innerHTML=text;




let text1="";
let z=1;
do{
text +=`this number is ${z} <br>`;
console.log(z);
z++
}while(z<=10);
document.getElementById("demo").innerHTML = text1;

patten();
function patten(){
for( let  r=0;r<=10;r++){
    for(let c=0;c<5;c++){  
        console.log(let);

    }
    
}
}

