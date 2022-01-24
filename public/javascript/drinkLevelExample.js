const alcTypes = ["tequila", "vodka", "rum"];
const include = ["a splash of", "a few drops of", "a shot of"];
const mixer = ["root beer", "coke", "sprite"];
const topping = ["salt", "pepper", "tobasco"];

let getAlcTypes = function(alcTypes) {
    return alcTypes[Math.floor(Math.random() * alcTypes.length)];
}

let getInclude = function(include) {
    return include[Math.floor(Math.random() * include.length)];
}

let getMixer = function(mixer) {
    return mixer[Math.floor(Math.random() * mixer.length)];
}

let getTopping = function(topping) {
    return topping[Math.floor(Math.random() * topping.length)];
}

let levelSelect = function() {
    clearLevel();


    let level = document.querySelector('#level-container');
    let pEl = document.createElement('p');
    pEl.textContent = '';
    level.appendChild(pEl);
    
    // this needs work
    if (levelOne) {
        pEl.textContent = "Add " + getInclude(include) + ' ' + getAlcTypes(alcTypes);
    } else if (levelTwo) {
        pEl.textContent += " and " + getMixer(mixer);
    } else if (levelThree) {
        pEl.textContent += " along with some " + getTopping(topping);
    }

}

let clearLevel = function() {
    document.querySelector('#level-container').innerHTML = '';
}

levelOne = function(event) {
    event.preventDefault();
    levelSelect();
}

levelTwo = function(event) {
    event.preventDefault();
    levelSelect();
}

levelThree = function(event) {
    event.preventDefault();
    levelSelect();
}

document.querySelector("#level-one").addEventListener("click", levelSelect);
document.querySelector("#level-two").addEventListener("click", levelSelect);
document.querySelector("#level-three").addEventListener("click", levelSelect);