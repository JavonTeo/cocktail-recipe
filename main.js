const inputBox = document.getElementById('input-box');
const searchBtn = document.getElementById('search-btn');
const searchResult = document.getElementById('search-result');
const form = document.querySelector("form");

//event listeners
$("form").on('submit', (event) => {
    event.preventDefault();
    getInfo();
})

const searchURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function getInfo() {
    let inputVal = inputBox.value.trim();
    query(inputVal);
}

function query(inputVal) {
    const URL = searchURL + inputVal;
    console.log(URL);
    fetch(URL) //needs to be variable URL
    .then(response => response.json())
    .then(data => {
        console.log("FOUND");
        console.log(data);
        $("#search-result").empty();
        const drinksFound = data.drinks;
        console.log(drinksFound);
        drinksFound.forEach(drink => {
            const drinkLink = document.createElement('a');
            drinkLink.className = "drink-figure";
            const drinkImg = document.createElement('img');
            const figCaption = document.createElement('figcaption');
            drinkLink.appendChild(drinkImg);
            drinkLink.appendChild(figCaption);
            drinkImg.src = drink.strDrinkThumb;
            figCaption.textContent = drink.strDrink;
            searchResult.appendChild(drinkLink);
        });
    })
    .catch(error => console.error(error));
}