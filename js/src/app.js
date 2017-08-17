"use strict";
function publishItems(title, genre, description) {
    var article = document.createElement("article");
    article.innerHTML =
        "<h3>" + title + "</h3>" +
            "<p>" + genre + "</p>" +
            "<span>" + description + "</span>";
    document.getElementById("items").appendChild(article);
}
publishItems("Matrix", "Thriller", "Did you know, Neo is the one?");
publishItems("Moby Dick", "Drama", "Is this fish for real?");
//# sourceMappingURL=app.js.map