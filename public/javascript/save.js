function saveDrinkHandler() {
    var drink = document.getElementById('drink-name-save');
    textContent = drink.textContent;
    window.localStorage.setItem('key', JSON.stringify(textContent));
}

document.querySelector('#save-btn').addEventListener('click', saveDrinkHandler);