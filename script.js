const container = document.querySelector(".card-container");
const addBtn = document.getElementById("add");
const formContainer = document.querySelector(".form-container");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("new-form");
const submitBtn = document.getElementById("submit-btn");
const log = document.querySelector(".log");
const finished = document.querySelector(".finished");
const inProgress = document.querySelector(".in-progress");

addBtn.addEventListener("click", openForm);
closeBtn.addEventListener("click", closeForm);

let myLibrary = [];
let sumRead = 0;
let sumNotRead = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let book = new Book(
    form.title.value,
    form.author.value,
    form.pages.value,
    form.status.checked
  );

  myLibrary.push(book);
  closeForm();
  displayLibrary();
  form.reset();
});

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

Book.prototype.changeStatus = function() {
  this.status = !this.status;
}

function changeStatus(index) {
  myLibrary[index].changeStatus();
  displayLibrary();
}

function displayLibrary() {
  container.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    
    let book = myLibrary[i];
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h2>${book.title}</h2>
      <p>by ${book.author}</p>
      <p>${book.pages} pages</p>`;

    let toggleStatus = document.createElement("button");
    toggleStatus.textContent = `${book.status ? "Finished" : "In Progress"}`;
    toggleStatus.classList.add("toggle-status");
    toggleStatus.addEventListener('click', () => {
      changeStatus(i);
    });
    card.appendChild(toggleStatus);

    if(book.status) {
      toggleStatus.style.backgroundColor = "forestgreen";
    }

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => {
      removeBook(i);
    });

    card.appendChild(removeBtn);
    container.appendChild(card);
  }
    sumRead = myLibrary.filter((book) => book.status);
    sumNotRead = myLibrary.length - sumRead.length;
    log.style.display = "flex";
    finished.textContent = `Books read: ${sumRead.length}`;
    inProgress.textContent = `Books in progress: ${sumNotRead}`;
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary();
}

function openForm() {
  formContainer.style.display = "block";
}

function closeForm() {
  formContainer.style.display = "none";
}
