let myLibrary = [];

// CONSTRUCTOR
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

// ADD BOOK
function addBookToLibrary(title, author, pages, readStatus) {

    myLibrary.push(new Book(title, author, pages, readStatus));
}

// REMOVE BOOK

function removeBook() {

    const bookIndex = this.parentNode.index;

    myLibrary.splice(bookIndex, 1);

    displayBooks();
}

// TOGGLE READ STATUS

function toggleReadStatus() {
    const bookIndex = this.parentNode.getAttribute("index");
    const book = myLibrary[bookIndex];

    // toggles book read status
    book.readStatus = (book.readStatus === "Read") ? "Not Read" : "Read";

    displayBooks();
}


// REMOVE EXISTING CARDS
function clearBooks() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Display books in library
function displayBooks() {

    // remove existing books (refreshing)
    clearBooks();

    for (let i = 0; i < myLibrary.length; i++) {

        const book = myLibrary[i];

        const card = document.createElement("div");
        card.setAttribute("index", i) // used to access a specific card when removing it from the list
        card.classList.add("card");

        const title = document.createElement("h3");
        title.classList.add("h3");
        title.textContent = book.title;

        const author = document.createElement("h3");
        author.classList.add("h3");
        author.textContent = book.author;

        const pages = document.createElement("h3");
        pages.classList.add("h3");
        pages.textContent = book.pages + " pages";

        const readButton = document.createElement("button");
        readButton.classList.add("read-button");
        readButton.textContent = book.readStatus;
        readButton.addEventListener("click", toggleReadStatus);

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", removeBook);


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
    document.querySelector(".form-popup").style.display = "flex";
}

// CLOSE POPUP FORM
function closeForm() {
    document.querySelector(".add-book-button").style.display = "block";
    document.querySelector(".form-popup").style.display = "none";

    resetFormValues();
}

// reset form values
function resetFormValues() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
}


// submit form, retrieve values, and add book to library
function submitForm(event) {

    event.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    // set read status
    readStatus = read ? "Read" : "Not Read";

    addBookToLibrary(title, author, pages, readStatus);
    closeForm();

    displayBooks();
}

const container = document.querySelector(".container");
const card = document.querySelector(".card");

displayBooks();

