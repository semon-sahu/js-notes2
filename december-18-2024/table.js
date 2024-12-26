const employers = [
  {
    name: "Vinod",
    id: 12345,
    profile: "director",
    salery: 22500,
    Experiance: "five years",
  },
  {
    name: "Manoj",
    id: 12864,
    profile: "Manager",
    salery: 25000,
    Experiance: "two years",
  },
  {
    name: "Sadna",
    id: 78451,
    profile: "worker",
    salery: 75000,
    Experiance: "one years",
  },
  {
    name: "Rahul",
    id: 14866,
    profile: "worker",
    salery: 50000,
    Experiance: "three years",
  },
  {
    name: "AAgam",
    id: 75452,
    profile: "worker",
    salery: 52000,
    Experiance: "four years",
  },
  {
    name: "Dhanvi",
    id: 46465,
    profile: "worker",
    salery: 20000,
    Experiance: "eight years",
  },
  {
    name: "Richa",
    id: 49799,
    profile: "hr",
    salery: 10000,
    Experiance: "five years",
  },
  {
    name: "Vinod",
    id: 12345,
    profile: "director",
    salery: 22500,
    Experiance: "five years",
  },
  {
    name: "Manoj",
    id: 12864,
    profile: "Manager",
    salery: 25000,
    Experiance: "two years",
  },
  {
    name: "Sadna",
    id: 78451,
    profile: "worker",
    salery: 75000,
    Experiance: "one years",
  },
  {
    name: "Rahul",
    id: 14866,
    profile: "worker",
    salery: 50000,
    Experiance: "three years",
  },
  {
    name: "AAgam",
    id: 75452,
    profile: "worker",
    salery: 52000,
    Experiance: "four years",
  },
  {
    name: "Dhanvi",
    id: 46465,
    profile: "worker",
    salery: 20000,
    Experiance: "eight years",
  },
  {
    name: "Richa",
    id: 49799,
    profile: "hr",
    salery: 10000,
    Experiance: "five years",
  },
  {
    name: "Vinod",
    id: 12345,
    profile: "director",
    salery: 22500,
    Experiance: "five years",
  },
  {
    name: "Manoj",
    id: 12864,
    profile: "Manager",
    salery: 25000,
    Experiance: "two years",
  },
  {
    name: "Sadna",
    id: 78451,
    profile: "worker",
    salery: 75000,
    Experiance: "one years",
  },
  {
    name: "Rahul",
    id: 14866,
    profile: "worker",
    salery: 50000,
    Experiance: "three years",
  },
  {
    name: "AAgam",
    id: 75452,
    profile: "worker",
    salery: 52000,
    Experiance: "four years",
  },
  {
    name: "Dhanvi",
    id: 46465,
    profile: "worker",
    salery: 20000,
    Experiance: "eight years",
  },
  {
    name: "Richa",
    id: 49799,
    profile: "hr",
    salery: 10000,
    Experiance: "five years",
  },
];

function display() {
  let table = `
    <table border="4px" width="600px" >
    <tr bgcolor="yellow">
    <th>name</th>
    <th>id</th>
    <th>profile</th>
    <th>salery</th>
    <th>Experiance</th>
    </tr>
    `;

  employers.map(function (key) {
    table += `
    <tr>
        <td>${key.name}</td>
        <td>${key.id}</td>
        <td>${key.profile}</td>
        <td>${key.salery}</td>
        <td>${key.Experiance}</td>
        </tr>

        `;
  });

  table += "</table>";
  document.getElementById("table1").innerHTML = table;
}
