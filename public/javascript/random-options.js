// create set arrays to use for random displays
const alcTypes = ["tequila", "vodka", "rum", "gin", "bourbon", "scotch", "whiskey", "cognac", "brandy", "vermouth", "liqueur", "absinthe"];
const include = ["a splash of", "a few drops of", "a shot of", "a hint of", "mixed with"];
const mixer = ["root beer", "coke", "sprite", "water", "OJ", "Dr. Pepper", "pineapple juice", "tomato juice", "tonic water", "lemonade", "carbonated water"];
const topping = ["salt", "pepper", "tobasco", "lemon", "lime", "sugar", "berries", "mint", "cinnamon"];

// return random item from the arrays to the page

function lowDrunk() {
    var display = document.querySelector("#random-one")
    var randomOne = document.createElement("div")
    var randomDrink = Math.floor(Math.random()*alcTypes.length)
    var firstVariable = alcTypes[randomDrink]
    var drinkText = document.createElement("p")

    drinkText.textContent = ("Made with " + firstVariable)

    display.appendChild(randomOne).appendChild(drinkText)
};

function midDrunk() {
    var randomDrink = Math.floor(Math.random()*alcTypes.length)
    var randomDrinkAlt = Math.floor(Math.random()*alcTypes.length)
    var firstVariable = alcTypes[randomDrink]
    var firstVariableAlt = alcTypes[randomDrinkAlt]
    var display = document.querySelector("#random-one")
    var randomTwo = document.createElement("div")
    var randomInclude = Math.floor(Math.random()*include.length)
    var secondVariable = include[randomInclude]
    var includeText = document.createElement("p")

    includeText.textContent = ("Made with " + firstVariable + " and include " + secondVariable + " " + firstVariableAlt)

    display.appendChild(randomTwo).appendChild(includeText)
};



// function highDrunk() {
//     var display = document.querySelector("#random-one")
//     var randomOne = document.createElement("div")
//     var randomDrink = Math.floor(Math.random()*alcTypes.length)
//     var firstVariable = alcTypes[randomDrink]
//     var drinkText = document.createElement("p")

//     drinkText.textContent = firstVariable

//     display.appendChild(randomOne).appendChild(drinkText)
// };

// function lowDrunk() {
//     var display = document.querySelector("#random-one")
//     var randomOne = document.createElement("div")
//     var randomDrink = Math.floor(Math.random()*alcTypes.length)
//     var firstVariable = alcTypes[randomDrink]
//     var drinkText = document.createElement("p")

//     drinkText.textContent = firstVariable

//     display.appendChild(randomOne).appendChild(drinkText)
// };


document.querySelector("#low-drunk").addEventListener("click", lowDrunk);
document.querySelector("#mid-drunk").addEventListener("click", midDrunk);
// document.querySelector("#high-drunk").addEventListener("click", randomMixer);
// document.querySelector("#too-drunk").addEventListener("click", randomTopping);
