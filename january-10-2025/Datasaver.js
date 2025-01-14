document.getElementById("btn1").addEventListener("click",datainsert);

function datainsert(){
    let Rollno=document.getElementById("rno").value;
    let nm=document.getElementById("nm").value;
    let City=document.getElementById("ct").value;
    let fees=document.getElementById("fs").value;
    let api = "http://localhost:3000/students";

    fetch(api,{
        method :'POSt',
        headers:{
            'Content-Type':'application/json'
        },

        body:JSON.stringify({
            "rollno":rno,
            "name":nm,
            "city":City,
            "fee":fees
        })
    


    }).then((res)=>{
        alert("data save!");
    })
}

//data fatch in js for api data  