const students=[
    {name:"aman",age:23,city:"bhopal"},
    {name:"rohit",age:22,city:"delhi"},
    {name:"semon",age:21,city:"kolkata"},
    {name:"arun",age:24,city:"indore"},
    {name:"aman",age:23,city:"bhopal"},
    {name:"rohit",age:22,city:"delhi"},
    {name:"semon",age:21,city:"kolkata"},
    {name:"arun",age:24,city:"indore"},
    {name:"aman",age:23,city:"bhopal"},
    {name:"rohit",age:22,city:"delhi"},
    {name:"semon",age:21,city:"kolkata"},
    {name:"arun",age:24,city:"indore"},
    {name:"aman",age:23,city:"bhopal"},
    {name:"rohit",age:22,city:"delhi"},
    {name:"semon",age:21,city:"kolkata"},
    {name:"arun",age:24,city:"indore"},
    {name:"aman",age:23,city:"bhopal"},
    {name:"rohit",age:22,city:"delhi"},
    {name:"semon",age:21,city:"kolkata"},
    {name:"arun",age:24,city:"indore"},
    {name:"aman",age:23,city:"bhopal"},
    {name:"rohit",age:22,city:"delhi"},
    {name:"semon",age:21,city:"kolkata"},
    {name:"arun",age:24,city:"indore"},
    {name:"aman",age:23,city:"bhopal"},
    {name:"rohit",age:22,city:"delhi"},
    {name:"semon",age:21,city:"kolkata"},
    {name:"arun",age:24,city:"indore"},
];


function display() {
    let table=`
    <table border="2px" width="600px" bgcolor="lightblue">
    <tr bgcolor="yellow">
    <th>Name</th>
    <th>age</th>
    <th>city</th>
    </tr>
    `;

    students.map(function(key){
        table += `
        <tr>
        <td>${key.name}</td>
        <td>${key.age}</td>
        <td>${key.city}</td>
        </tr>

        `;
    
    });
    table +="</table>";
    document.getElementById("demo").innerHTML=table;
}



//make a table with 5 object and add css in a verry formet