const newDrinkBtn = require("./index");

function findNewDrink(event) {
    event.preventDefault();
    getRandomDrink();
};

document.querySelector(".new-drink").addEventListener("submit", newDrinkBtn);