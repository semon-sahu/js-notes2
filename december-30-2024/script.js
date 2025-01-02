document.getElementById("btn1").addEventListener("click",myfun);
function myfun(){
    let phynum = document.getElementById("phy").value;
    let chenum = document.getElementById("che").value;
    let mathnum = document.getElementById("math").value;
    let engnum = document.getElementById("eng").value;



    let total = parseFloat(phynum) + parseFloat(chenum) + parseFloat(mathnum) + parseFloat(engnum);
    let percentage = (total/400)*100;
    document.getElementById("ans1").innerHTML = "Total Marks: " + total+ "/400"+"<br>"+"Percentage: "+percentage+"%";
}
