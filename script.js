const container = document.querySelector(".card-container");
const addBtn = document.getElementById("add");
const formContainer = document.querySelector(".form-container");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("new-form");
const submitBtn = document.getElementById("submit-btn");

addBtn.addEventListener("click", openForm);
closeBtn.addEventListener("click", closeForm);

let myLibrary = [];

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

function displayLibrary() {
  container.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h2>${book.title}</h2>
      <p>by ${book.author}</p>
      <p>${book.pages} pages</p>
      <p>${book.status ? "Read" : "Not Read Yet"}</p>`;
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", function () {
      console.log(book);
      removeBook(i);
    });
    card.appendChild(removeBtn);
    container.appendChild(card);
  }
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
