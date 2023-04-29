const container = document.querySelector(".card-container");
const addBtn = document.getElementById("add");
const formContainer = document.querySelector(".form-container");
const closeBtn = document.querySelector(".close");
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
    form.reset();
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
    let p1 = document.createElement('p');
    p1.textContent = `Title: ${this.title.value}`;
    let p2 = document.createElement('p');
    p2.textContent = `Author: ${this.author.value}`;
    let p3 = document.createElement('p');
    p3.textContent = `Pages: ${this.pages.value}`;
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
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
