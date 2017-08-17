//activate when you finished exercise 3
var jsonParser = new JSONParser();
jsonParser.getJSON("items.json", function (data) {
    var library = Library.fromJSON(data);
    var itemContainer = document.getElementById("items");
    library.getAll().forEach(function (item) { return item.render(itemContainer); });
});
//# sourceMappingURL=app.js.map