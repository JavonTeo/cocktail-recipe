import fetch from "node-fetch";
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

const response = fetch(URL);
const json = response.then(response => response.json())
.then(data => console.log(data));