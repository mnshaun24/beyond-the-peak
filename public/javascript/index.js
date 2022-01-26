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
     if (document.querySelector('#drink-container').innerHTML && document.querySelector('#drink-image-container').innerHTML) {
        document.querySelector('#drink-container').innerHTML = "";
        document.querySelector('#drink-image-container').innerHTML = "";
     }
     return;
 }


var displayDrink = function(data) {
    clearCurrentDrink();

    //  set up a random array for intro
    const intro = ["Hey! Start sippin some ", "Grab a tall ", "Get busy making your ", "Time to drink your first ", "Your friends should be jealous of your "];
    let useIntro = function(intro) {
    return intro[Math.floor(Math.random() * intro.length)];
    };

    // Display Drink Name
    var display = document.querySelector('#drink-container');
    var newDiv = document.createElement('div');
    newDiv.classList = 'cocktail mt-5';

    display.appendChild(newDiv);

    var drinkIntro = document.createElement("span");
    drinkIntro.setAttribute("id", "drink-intro");
    newDiv.appendChild(drinkIntro);

    drinkIntro.textContent = (useIntro(intro));

    var cocktailName = document.createElement('h2');
    cocktailName.setAttribute('id', 'drink-name-save');
    cocktailName.classList = 'mt-5';
    cocktailName.textContent = (" " + data.drinks[0].strDrink);

    newDiv.appendChild(cocktailName);    

    // Display Drink Image
    
    let displayImg = document.querySelector('#drink-image-container');
    let imgEl = document.createElement("img");
    imgEl.classList = "img-fluid";
    imgEl.style.backgroundImage = "url(" + data.drinks[0].strDrinkThumb + ")";
    imgEl.style.width = "100%";
    imgEl.style.height = "100%";
    displayImg.appendChild(imgEl);
}
    

function findNewDrink(event) {
    event.preventDefault();
    getRandomDrink();
};

getRandomDrink();