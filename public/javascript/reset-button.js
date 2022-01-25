function findNewDrink(event) {
    event.preventDefault();
    getRandomDrink();
};

document.querySelector("#new-drink").addEventListener("click", findNewDrink);

