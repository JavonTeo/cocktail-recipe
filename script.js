import fetch from "node-fetch";
const inputBox = document.getElementById('input-box');
const searchBtn = document.getElementById('search-btn');
const drinkList = document.getElementById('drink-list');

//event listeners
searchBtn.addEventListener('click', getInfo)

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

function query(inputVal) {
    fetch(URL) //needs to be variable URL
    .then(response => response.json())
    .then(data => presentDrinks(data))
    .catch(error => console.error(error));
}

function presentDrinks(data) {
    let html = "";
    if (data.drinks) {
        data.drinks.forEach(drink => {
            html += `
            <div class = "drink-item" id = "${drink.idDrink}">
            <div class = "drink-name">
            <h2>${drink.strDrink}</h2>
            </div>
            </div>`
            
        });
    } else {
        html = "<p>Sorry! We couldn't find any drink matching your search.</p>"
    }
    drinkList.innerHTML = html;
}

function getInfo() {
    let inputVal = inputBox.value.trim();
    // alert("input is " + inputVal)
    query(inputVal)
}