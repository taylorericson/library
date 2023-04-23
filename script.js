const container = document.querySelector(".container");
const addBtn = document.getElementById("add");
const formContainer = document.querySelector(".form-container");

addBtn.addEventListener('click', openForm);

let myLibrary = [];

function Book(name, author, pageCount, isRead) {
  this.name = name;
  this.author = author;
  this.pageCount = pageCount;
  this.isRead = isRead;
}

book1 = new Book("Harry Potter", "J.K Rowling", "564");

book2 = new Book("testbook", "authortest", "335");

addBookToLibrary(book1);
addBookToLibrary(book2);


function addBookToLibrary(book) {
  myLibrary.push(book);
}

function openForm() {
    console.log("function called");
    formContainer.style.display = "block";
}

console.log(myLibrary);



// myLibrary.forEach(book => {
//     let card = document.createElement('div');
//     card.classList.add('card');
//     card.textContent += `Title: ${book.name}, Author: ${book.author}, Page Count: ${book.pageCount}`
//     container.appendChild(card);
// });




