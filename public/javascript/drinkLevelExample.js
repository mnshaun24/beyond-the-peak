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

let levelSelect = function(event) {
    event.preventDefault();
    clearLevel();

    let level = document.querySelector('#level-container');
    let pEl = document.createElement('p');
    pEl.setAttribute('id', 'pEl');
    pEl.textContent = '';
    level.appendChild(pEl);

    if (event.target === document.querySelector('#level-one')) {
        let levelOneEl = document.querySelector('#pEl');
        levelOneEl.textContent = "Add " + getInclude(include) + ' ' + getAlcTypes(alcTypes);
    } else if (event.target === document.querySelector('#level-two')) {
        let levelTwoEl = document.querySelector('#pEl');
        levelTwoEl.textContent = "Add " + getInclude(include) + ' ' + getAlcTypes(alcTypes) + " and " + getMixer(mixer);
    } else if (event.target === document.querySelector('#level-three')) {
        let levelThreeEl = document.querySelector('#pEl');
        levelThreeEl.textContent = "Add " + getInclude(include) + ' ' + getAlcTypes(alcTypes) + " and " + getMixer(mixer) + " along with some " + getTopping(topping);
    }

}

let clearLevel = function() {
    document.querySelector('#level-container').innerHTML = '';
}

// levelOne = function(event) {
//     event.preventDefault();
//     levelSelect();
//     let levelOneEl = document.querySelector('#pEl');
//     levelOneEl.textContent = "Add " + getInclude(include) + ' ' + getAlcTypes(alcTypes);
// }

// levelTwo = function(event) {
//     event.preventDefault();
//     levelSelect();
//     let levelTwoEl = document.querySelector('#pEl');
//     levelTwoEl.textContent += " and " + getMixer(mixer);
// }

// levelThree = function(event) {
//     event.preventDefault();
//     levelSelect();
//     let levelThreeEl = document.querySelector('#pEl');
//     levelThreeEl.textContent += " along with some " + getTopping(topping);
// }

document.querySelector("#level-one").addEventListener("click", levelSelect);
document.querySelector("#level-two").addEventListener("click", levelSelect);
document.querySelector("#level-three").addEventListener("click", levelSelect);