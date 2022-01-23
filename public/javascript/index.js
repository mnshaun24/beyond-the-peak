var getRandomDrink = function() {
 fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(function(response) {
     if (response.ok) {
         response.json().then(function(data) {
             displayDrink(data);
         })
     }
     })
 }

 var clearCurrentDrink = function() {
     if (document.querySelector('#drink-container').innerHTML) {
        document.querySelector('#drink-container').innerHTML = "";
     }
     return;
 }

var displayDrink = function(data) {
    clearCurrentDrink();
    var display = document.querySelector('#drink-container');
    var newDiv = document.createElement('div');
    newDiv.classList = 'cocktail';

    display.appendChild(newDiv);

    var cocktailName = document.createElement('h2');
    cocktailName.classList = 'mt-5';
    cocktailName.textContent = data.drinks[0].strDrink;

    newDiv.appendChild(cocktailName);
}

function findNewDrink(event) {
    event.preventDefault();
    getRandomDrink();
};

getRandomDrink();