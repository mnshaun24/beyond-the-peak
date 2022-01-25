function saveDrinkHandler() {
    var existingEntries = JSON.parse(window.localStorage.getItem('list'));

    if (existingEntries == null){
        existingEntries = [];
    }

    var drink = document.getElementById('drink-name-save');
    textContent = drink.textContent;
    existingEntries.push(textContent);
    localStorage.setItem('list', JSON.stringify(existingEntries));
}

document.querySelector('#save-btn').addEventListener('click', saveDrinkHandler);