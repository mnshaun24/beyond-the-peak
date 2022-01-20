var getRandomDrink = function() {
 fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(function(response) {
     if (response.ok) {
         response.json().then(function(data) {
             displayDrink(data);
         })
     }
     })
 }

var displayDrink = function(data) {
    var display = document.querySelector('#drink-container');
    var newDiv = document.createElement('div');
    newDiv.classList = 'cocktail';

    display.appendChild(newDiv);

    var cocktailName = document.createElement('h2');
    cocktailName.textContent = data.drinks[0].strDrink;

    newDiv.appendChild(cocktailName);
}

getRandomDrink();