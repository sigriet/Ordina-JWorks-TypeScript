var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by sigriet on 17/08/2017.
 */
var Library = (function () {
    function Library() {
        this.list = [];
        this.list.push(new Book("Moby Dick", "Drama", "Is this fish for real?", new Author("Herman Melville")));
        this.list.push(new Book("The hitchhiker's guide to the galaxy", "Sci fi", "So lang and thanks for the fish", new Author("Douglas Adams")));
        this.list.push(new Movie("Matrix", "Thriller", "Did you know, Neo is the one?", "PG", 13));
        this.list.push(new Movie("Inception", "Sci fi", "Don't Think About Elephants", "R", 17));
    }
    Library.prototype.render = function (element) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var item = _a[_i];
            item.render(element);
        }
    };
    return Library;
}());
var Rating = (function () {
    function Rating() {
    }
    return Rating;
}());
var Author = (function () {
    function Author(name) {
        this.name = name;
    }
    return Author;
}());
var Item = (function () {
    function Item(title, genre, description) {
        this.title = title;
        this.genre = genre;
        this.description = description;
    }
    return Item;
}());
var Movie = (function (_super) {
    __extends(Movie, _super);
    function Movie(title, genre, description, name, age) {
        _super.call(this, title, genre, description);
        this.name = name;
        this.age = age;
    }
    Movie.prototype.render = function (element) {
        var article = document.createElement("article");
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
                "<p>" + this.genre + "</p>" +
                "<p>" + this.name + ": minimum age is " + this.age + "</p>" +
                "<span>" + this.description + "</span>";
        element.appendChild(article);
    };
    return Movie;
}(Item));
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(title, genre, description, author) {
        _super.call(this, title, genre, description);
        this.author = author;
    }
    Book.prototype.render = function (element) {
        var article = document.createElement("article");
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
                "<p>" + this.author.name + "</p>" +
                "<p>" + this.genre + "</p>" +
                "<span>" + this.description + "</span>";
        element.appendChild(article);
    };
    return Book;
}(Item));
//# sourceMappingURL=library.js.map