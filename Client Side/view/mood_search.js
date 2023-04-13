const baseurl="http://localhost:3001";

function find_mood(){
    let mood=document.getElementById("search-bar").value;
    console.log(mood);
    fetch(`${baseurl}/restaurant/mood/${mood}`)
    .then(response=>response.json())
    .then((data)=>
    {
        console.log(data);
        loadTable(data);
});
}

const searchmoodbtn=document.getElementById("searchmoodbtn");
searchmoodbtn.addEventListener("click",find_mood);

function loadTable(data) {
    let table = document.getElementById("resultTable");
    table.innerHTML = "";
    let header = `<tr>
        <th>Name</th>
        <th>Cuisine</th>
        <th>Location</th>
        <th>Mood</th>
        <th>Rating</th>
        </tr>`;
        table.innerHTML += header;
        data.forEach((restaurant) => {
            let row = `<tr>
            <td>${data.Name}</td>
            <td>${data.Cuisine}</td>
            <td>${data.Location}</td>
            <td>${data.Mood}</td>
            <td>${data.Rating}</td>
            </tr>`;
            table.innerHTML += row;
        });
    } 