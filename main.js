let data = [
    { id: 101, name: "juli jahan tondra" },
    { id: 202, name: "Faysal ahmed topu" },
    { id: 303, name: "sadia islam sila" },
    { id: 404, name: "nusrat jahan nur" },
];

function displayTableData() {
    var html = "<table border='1|1' >";
    html += "<thead>";
    html += "<tr >";
    html += "<td>" + 'id' + "</td>";
    html += "<td>" + 'name' + "</td>";
    html += "<td>" + 'Action' + "</td>";
    html += "</tr>";
    html += "</thead>";
    for (var i = 0; i < data.length; i++) {
        html += `<tr id=${data[i].id} >`;
        html += "<td>" + data[i].id + "</td>";
        html += "<td>" + data[i].name + "</td>";
        html += `<td><button type="button " onclick="removeItem(${data[i].id})">Remove</button></td>`;
        html += "</tr>";

    }
    html += "</table>";
    document.getElementById('table').innerHTML = html

};
displayTableData();

function removeItem(receiveID) {
    var xx = document.getElementById(receiveID);
    xx.remove();
}
// console.log(rec)
//     data.filter((a, i) => {
//         if (receiveID == a.id) {
//             data.splice(i, 1);
//             displayTableData();
//         }
//     })
// }

