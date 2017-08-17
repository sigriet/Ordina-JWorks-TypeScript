var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(title, author, genre, description) {
        _super.call(this, title, genre, description);
        this.author = author;
    }
    Book.prototype.render = function (element) {
        var article = document.createElement("article");
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
                "<h4>" + this.author.name + "</h4>" +
                "<p>" + this.genre + "</p>" +
                "<span>" + this.description + "</span>";
        element.appendChild(article);
    };
    Book.fromJSON = function (input) {
        return new Book(input.title, new Author(input.author), input.genre, input.description);
    };
    return Book;
}(Item));
//# sourceMappingURL=Book.js.map