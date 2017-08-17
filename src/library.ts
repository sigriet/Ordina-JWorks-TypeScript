/**
 * Created by sigriet on 17/08/2017.
 */
class Library {
    list: Array<Item> =[];

    constructor() {
        this.list.push(new Book("Moby Dick", "Drama", "Is this fish for real?", new Author("Herman Melville")));
        this.list.push(new Book("The hitchhiker's guide to the galaxy","Sci fi",
            "So lang and thanks for the fish", new Author("Douglas Adams")));
        this.list.push(new Movie("Matrix", "Thriller", "Did you know, Neo is the one?", "PG", 13));
        this.list.push(new Movie("Inception", "Sci fi", "Don't Think About Elephants", "R", 17));
    }

    render(element: HTMLElement): void {
        for (let item of this.list) {
            item.render(element);
        }
    }
}

class Rating {
    name: string;
    age: number;
}

class Author {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

abstract class Item {
    title: string;
    genre: string;
    description: string;

    abstract render(element: HTMLElement): void;

    constructor(title: string, genre: string, description: string) {
        this.title = title;
        this.genre = genre;
        this.description = description;
    }
}

class Movie extends Item implements Rating {
    name: string;
    age: number;

    constructor(title: string, genre: string, description: string, name: string, age: number) {
        super(title, genre, description);
        this.name = name;
        this.age = age;
    }

    render(element: HTMLElement): void {
        let article: HTMLElement = document.createElement("article");
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
            "<p>" + this.genre + "</p>" +
            "<p>" + this.name + ": minimum age is " + this.age + "</p>" +
            "<span>" + this.description + "</span>";

        element.appendChild(article);
    }
}

class Book extends Item {
    author: Author;

    constructor(title: string, genre: string, description: string, author:Author) {
        super(title, genre, description);
        this.author = author;
    }

    render(element: HTMLElement): void {
        let article: HTMLElement = document.createElement("article");
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
            "<p>" + this.author.name + "</p>" +
            "<p>" + this.genre + "</p>" +
            "<span>" + this.description + "</span>";

        element.appendChild(article);
    }
}
