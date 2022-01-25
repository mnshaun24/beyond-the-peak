function lastNightList() {
    let list = JSON.parse(window.localStorage.getItem('key'));

    var display = document.querySelector('#list-of-drinks');
    var newDiv = document.createElement('div');

    display.appendChild(newDiv);

    var listDisplay = document.createElement('p');
    listDisplay.setAttribute('id', 'drink-list')
    listDisplay.textContent = list;

    newDiv.appendChild(listDisplay);
}

function clearStorage(event) {
    event.preventDefault();

    var display = document.querySelector('#drink-list');
    display.textContent = '';
    window.localStorage.clear();
}

document.querySelector('#clear').addEventListener('click', clearStorage);

lastNightList();