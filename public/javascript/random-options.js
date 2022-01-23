// create set arrays to use for random displays
const alcTypes = ["tequila", "vodka", "rum", "gin", "bourbon", "scotch", "whiskey", "cognac", "brandy", "vermouth", "liqueur", "absinthe"];
const include = ["a splash of", "a few drops of", "a shot of", "a hint of", "mixed with"];
const mixer = ["root beer", "coke", "sprite", "water", "OJ", "Dr. Pepper", "pineapple juice", "tomato juice", "tonic water", "lemonade", "carbonated water"];
const topping = ["salt", "pepper", "tobasco", "lemon", "lime", "sugar", "berries", "mint", "cinnamon"];

// return random item from the arrays

function getAlcTypes(alcTypes) {
    return alcTypes[Math.floor(Math.random()*alcTypes.length)]
};

function getInclude(include) {
    return alcTypes[Math.floor(Math.random()*include.length)]
};

function getMixer(mixer) {
    return alcTypes[Math.floor(Math.random()*mixer.length)]
};

function getTopping(topping) {
    return alcTypes[Math.floor(Math.random()*topping.length)]
};

