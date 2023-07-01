let myLibrary = [];

// CONSTRUCTOR
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        string = `${this.title} by ${this.author}, ${pages} pages, `
        if (read.toUpperCase() === "Y") {
            return string + "already read."
        }
        return string + "not read yet."
    }
}

// ADD BOOK
function addBookToLibrary(title, author, pages, read) {

    myLibrary.push(new Book(title, author, pages, read));
}

// let title = prompt("Book Title: ");
// let author = prompt("Book Author: ");
// let pages = Number(prompt("Pages:"));
// let read = prompt("Read (Y/N):");

// addBookToLibrary(title, author, pages, read);

