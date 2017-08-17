class Library {
    movies: Array<Movie> = [];
    books: Array<Book> = [];

    constructor(movies: Array<Movie>, books: Array<Book>) {
        this.movies = movies;
        this.books = books;
    }

    getAll(): Array<Item> {
        let items: Array<Item> = [];
        items = items.concat(this.movies);
        items = items.concat(this.books);
        return items;
    }

    static fromJSON(data: any): Library {
        let movies: Array<Movie> = data.movies.map(item => Movie.fromJSON(item));
        let books: Array<Book> = data.books.map(item => Book.fromJSON(item));

        return new Library(movies, books);
    }
}