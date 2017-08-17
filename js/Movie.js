var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Movie = (function (_super) {
    __extends(Movie, _super);
    function Movie(title, genre, description, age, name) {
        _super.call(this, title, genre, description);
        this.age = age;
        this.name = name;
    }
    Movie.prototype.render = function (element) {
        var article = document.createElement("article");
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
                "<p>" + this.genre + " " + this.name + " " + this.age + "</p>" +
                "<span>" + this.description + "</span>";
        element.appendChild(article);
    };
    Movie.fromJSON = function (input) {
        return new Movie(input.title, input.genre, input.description, input.age, input.name);
    };
    return Movie;
}(Item));
//# sourceMappingURL=Movie.js.map