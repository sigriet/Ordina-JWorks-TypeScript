abstract class Item {
    title: string;
    genre: string;
    description: string;

    constructor(title: string, genre: string, description: string) {
        this.title = title;
        this.genre = genre;
        this.description = description;
    }

    abstract render(element: HTMLElement): void;
}