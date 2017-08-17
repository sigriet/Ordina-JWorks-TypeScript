var Library = (function () {
    function Library(movies, books) {
        this.movies = [];
        this.books = [];
        this.movies = movies;
        this.books = books;
    }
    Library.prototype.getAll = function () {
        var items = [];
        items = items.concat(this.movies);
        items = items.concat(this.books);
        return items;
    };
    Library.fromJSON = function (data) {
        var movies = data.movies.map(function (item) { return Movie.fromJSON(item); });
        var books = data.books.map(function (item) { return Book.fromJSON(item); });
        return new Library(movies, books);
    };
    return Library;
}());
//# sourceMappingURL=Library.js.map