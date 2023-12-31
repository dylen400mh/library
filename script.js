const container = document.querySelector(".container");
const card = document.querySelector(".card");
const form = document.querySelector(".form-container");
const submitButton = document.querySelector(".submit");

// form elements
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let read = document.getElementById("read");

let inputBoxes = document.querySelectorAll("input");
console.log(inputBoxes)


let myLibrary = [];


// CONSTRUCTOR
class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}

// ADD BOOK
function addBookToLibrary(title, author, pages, readStatus) {

    myLibrary.push(new Book(title, author, pages, readStatus));
}

// REMOVE BOOK

function removeBook(index) {
    myLibrary.splice(index, 1);

    displayBooks();
}

// TOGGLE READ STATUS

function toggleReadStatus(index) {
    const book = myLibrary[index];

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

    // clear existing display
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

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
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
    document.querySelector(".form-popup").style.display = "flex";
}

function validateForm() {

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
function submitForm() {

    inputBoxes.forEach(box => {
        if (box.type !== "checkbox") {
            if (box.validity.valueMissing) {
                // show error message
                showError(box.id)

            } else {
                // hide error message
                hideError(box.id)
            }
        }
    })

    // check if form is valid and perform appropriate action
    if (form.checkValidity()) {
        // set read status
        readStatus = read.checked ? "Read" : "Not Read";

        addBookToLibrary(title.value, author.value, pages.value, readStatus);
        closeForm();

        displayBooks();
    } else {
        // make styling changes or whatever I want here...
    }
}

function showError(inputId) {
    const errorText = document.getElementById(`${inputId}-error`);
    errorText.style.display = "block";
}

function hideError(inputId) {
    const errorText = document.getElementById(`${inputId}-error`);
    errorText.style.display = "none";
}

container.addEventListener("click", (e) => {
    const index = e.target.parentNode.getAttribute("index")
    if (e.target.classList.contains("read-button")) {
        toggleReadStatus(index);
    } else if (target.classList.contains("remove-button")) {
        removeBook(index);
    }
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitForm();
});


submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    submitForm();
})







displayBooks();

