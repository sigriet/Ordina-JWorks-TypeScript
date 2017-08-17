//activate when you finished exercise 3
let jsonParser = new JSONParser();

jsonParser.getJSON("items.json", data => {
    
    let library:Library = Library.fromJSON(data);

    var itemContainer: HTMLElement = document.getElementById("items");
    library.getAll().forEach(item => item.render(itemContainer));

});
