const content = document.getElementById('content');

var urlParams = new URLSearchParams(window.location.search);
var encodedData = urlParams.get('data');
encodedData = encodedData.substring(1, encodedData.length - 1);
var data = JSON.parse(encodedData);
console.log(data);

const heading = document.createElement('h1');
heading.innerHTML = data.strDrink;
content.appendChild(heading);