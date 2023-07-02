let myLibrary = [];

// CONSTRUCTOR
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// ADD BOOK
function addBookToLibrary(title, author, pages, read) {

    myLibrary.push(new Book(title, author, pages, read));
}

// REMOVE EXISTING CARDS
function removeBooks() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


// Display books in library
function displayBooks() {

    // remove existing books (refreshing)
    removeBooks();

    for (let i = 0; i < myLibrary.length; i++) {

        const book = myLibrary[i];

        const card = document.createElement("div");
        card.classList.add("card");

        const title = card.createElement("h3");
        title.classList.add("card h3");
        title.textContent = book.title;

        const author = card.createElement("h3");
        author.classList.add("card h3");
        author.textContent = book.author;

        const pages = card.createElement("h3");
        pages.classList.add("card h3");
        pages.textContent = book.pages + " pages";

        const readButton = card.createElement("button");
        readButton.classList.add("card h3");
        readButton.textContent = "Read";

        const removeButton = card.createElement("button");
        removeButton.classList.add("card h3");
        removeButton.textContent = "Remove";


        // Append book properties to card
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readButton);
        card.appendChild(removeButton);

        // Append book card to main container
        container.appendChild(card);

    }
}

// OPEN POPUP FORM

function openForm() {
    document.querySelector(".add-book-button").style.display = "none";
    document.querySelector(".form-popup").style.display = "inline";
}


const container = document.querySelector(".container");
const card = document.querySelector(".card");

let title = document.getElementById("title").value;
let author = document.getElementById("author").value;
let pages = document.getElementById("pages").value;
let read = document.getElementById("read").value;

addBookToLibrary(title, author, pages, read);


// displayBooks();

