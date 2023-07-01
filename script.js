let myLibrary = [];

// CONSTRUCTOR
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        string = `${this.title} by ${this.author}, ${pages} pages, `
        if (read) {
            return string + "already read."
        }
        return string + "not read yet."
    }
}



function addBookToLibrary() {

}