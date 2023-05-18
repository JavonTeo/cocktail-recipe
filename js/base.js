const inputBox = document.getElementById('input-box');
const searchBtn = document.getElementById('search-btn');
const searchResult = document.getElementById('search-result');

//event listeners
$("form").on('submit', (event) => {
    event.preventDefault();
    findDrink();
});

const searchURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function findDrink() {
    let inputVal = inputBox.value.trim();
    searchDB(inputVal);
}

function searchDB(inputVal) {
    const URL = searchURL + inputVal;
    // console.log(URL);
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        $("#search-result").empty();
        const drinksFound = data.drinks;
        // console.log(drinksFound);

        if (drinksFound == null) {
            const cannotFindDrink = document.createElement('h2');
            cannotFindDrink.textContent = "Sorry, we cannot find a drink matching that search.";
            cannotFindDrink.style.color = "brown";
            cannotFindDrink.style.margin = "auto";
            cannotFindDrink.style.paddingTop = "5%"
            searchResult.appendChild(cannotFindDrink);
        } else {
            drinksFound.forEach(drink => {
                let drinkName;
                const drinkDetails = {};
                for (const key in drink) {
                    if (key == "strDrink") {
                        drinkName = drink[key];
                    }
                    drinkDetails[key] = drink[key];
                }

                const drinkLink = document.createElement('a');
                drinkLink.className = "drink-figure";
                const drinkImg = document.createElement('img');
                const figCaption = document.createElement('figcaption');
                drinkLink.appendChild(drinkImg);
                drinkLink.appendChild(figCaption);
                drinkImg.src = drinkDetails.strDrinkThumb;
                figCaption.textContent = drinkName;
                drinkLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    displayDrink(drinkName);
                });
                searchResult.appendChild(drinkLink);

                sessionStorage.setItem(drinkName, JSON.stringify(drinkDetails));
            });
        }
    })
    .catch(error => console.error(error))
}

function displayDrink(drinkName) {
    var drinkData = sessionStorage.getItem(drinkName);
    console.log(drinkData);
    var url = './drink-details.html?data=' + JSON.stringify(encodeURI(drinkData));
    window.open(url, '_blank');
}