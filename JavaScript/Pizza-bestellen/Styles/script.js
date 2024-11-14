window.addEventListener("load", initialize);

function initialize() {
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("remove").addEventListener("click", remove);
}

function add() {
    var ingredients = document.getElementById("ingredients");
    
    if (ingredients.selectedIndex > -1 ) {
        //todo: ausgewählte Zutat von der linken in die rechte Listbox verschieben
        var index = ingredients.selectedIndex; 
        document.getElementById("choice").appendChild(ingredients.options[index]);
    }
}

function remove() {
    var choice = document.getElementById("choice");
    
    if (choice.selectedIndex > -1 ) {
        //todo: ausgewählte Zutat von der rechten in die linke Listbox verschieben
        var index = choice.selectedIndex; 
        document.getElementById("ingredients").appendChild(choice.options[index]);

    }
}