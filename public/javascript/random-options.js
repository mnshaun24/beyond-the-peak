// create set arrays to use for random displays
const alcTypes = ["tequila", "vodka", "rum", "gin", "bourbon", "scotch", "whiskey", "cognac", "brandy", "vermouth", "liqueur", "absinthe"];
const include = ["a splash of", "a few drops of", "a shot of", "a hint of", "a mix of"];
const mixer = ["root beer", "coke", "sprite", "water", "OJ", "Dr. Pepper", "pineapple juice", "tomato juice", "tonic water", "lemonade", "carbonated water"];
const topping = ["salt", "pepper", "tobasco", "lemon", "lime", "sugar", "berries", "mint", "cinnamon"];

// return random item from the arrays to the page

let getAlcTypes = function(alcTypes) {
    return alcTypes[Math.floor(Math.random() * alcTypes.length)];
};

let getInclude = function(include) {
    return include[Math.floor(Math.random() * include.length)];
};

let getMixer = function(mixer) {
    return mixer[Math.floor(Math.random() * mixer.length)];
};

let getTopping = function(topping) {
    return topping[Math.floor(Math.random() * topping.length)];
};

let levelSelect = function(event) {
    event.preventDefault();
    clearLevel();

    let randomContainer = document.querySelector('#random-container');
    let pEl = document.createElement('p');
    pEl.setAttribute('id', 'pEl');
    pEl.textContent = '';
    randomContainer.appendChild(pEl);

    if (event.target === document.querySelector('#low-drunk')) {
        let levelOneEl = document.querySelector('#pEl');
        levelOneEl.textContent = "Made with " + getAlcTypes(alcTypes);
    } else if (event.target === document.querySelector('#mid-drunk')) {
        let levelTwoEl = document.querySelector('#pEl');
        levelTwoEl.textContent = "Made with " + getAlcTypes(alcTypes) + " and include " + getInclude(include) + " " + getAlcTypes(alcTypes);
    } else if (event.target === document.querySelector('#high-drunk')) {
        let levelThreeEl = document.querySelector('#pEl');
        levelThreeEl.textContent = "Made with " + getAlcTypes(alcTypes) + " and include " + getInclude(include) + " " + getAlcTypes(alcTypes) + " mix it with " + getMixer(mixer);
    } else if (event.target === document.querySelector("#too-drunk")) {
        let levelFourEl = document.querySelector("#pEl");
        levelFourEl.textContent = "Made with " + getAlcTypes(alcTypes) + " and include " + getInclude(include) + " " + getAlcTypes(alcTypes) + " mix it with " + getMixer(mixer) + " and top it off with some " + getTopping(topping);
    }

};

let clearLevel = function() {
    document.querySelector('#random-container').innerHTML = '';
};

document.querySelector("#low-drunk").addEventListener("click", levelSelect);
document.querySelector("#mid-drunk").addEventListener("click", levelSelect);
document.querySelector("#high-drunk").addEventListener("click", levelSelect);
document.querySelector("#too-drunk").addEventListener("click", levelSelect);