const container = document.querySelector(".card-container");
const addBtn = document.getElementById("add");
const formContainer = document.querySelector(".form-container");
const closeBtn = document.getElementById("close");
const form = document.getElementById("new-form");
const submitBtn = document.getElementById("submit-btn")

addBtn.addEventListener("click", openForm);
closeBtn.addEventListener("click", closeForm);

let myLibrary = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let book = new Book(form.title.value, form.author.value, form.pages.value);
    myLibrary.push(book);
    closeForm();
    displayLibrary();
})

function Book(title, author, pages) {
  this.name = title;
  this.author = author;
  this.pages = pages;
//   this.isRead = form.isRead.value;
}

function displayLibrary() {
    let card = document.createElement('div');
    card.classList.add('card');
    card.textContent += `Title: ${this.title.value} Author: ${this.author.value} Pages: ${this.pages.value}`;
    container.appendChild(card);
}

function openForm() {
  formContainer.style.display = "block";
}

function closeForm() {
  formContainer.style.display = "none";
}

// myLibrary.forEach(book => {
//     let card = document.createElement('div');
//     card.classList.add('card');
//     card.textContent += `Title: ${book.name}, Author: ${book.author}, Page Count: ${book.pageCount}`
//     container.appendChild(card);
// });
