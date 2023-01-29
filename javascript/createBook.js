import * as readSwitch from "./readSwitch.js";
import * as changeRead from "./changeRead.js";
import * as removeBook from "./removeBook.js";

//So ovaa funkcija se kreiraat DOM elementite za novata kniga i se vnesuvaat na soodvetnoto mesto
export function createBook(title, author, pages, read, bookNumber){
    const bookParent = document.querySelector('.bookshelf');
    const book = document.createElement('div');
    const addBookButton = document.querySelector('.add-book');
    let readd = readSwitch.readSwitch(read);
    book.classList.add('book');
    book.classList.add('card');
    book.classList.add(`b${bookNumber}`);
    book.innerHTML = `
                <div class="book-info">
                    <div class="name">${title}</div>
                    <div class="author">${author}</div>
                    <div class="pages">${pages} pages</div>
                </div>
                <div class="book-buttons">
                    <button class="${readd} changeRead"></button>
                    <button class="remove r${bookNumber}"></button>
                </div>
    `;
    //Vnesuvanje na kreiranite DOM elementi pred kopceto za nova kniga
    bookParent.insertBefore(book, addBookButton);

    //Iskoristuvanje na changeRead i removeBook metodot po vtor pat bidejki originalniot metod ne raboti
    //na novo kreiranite DOM elementi
    removeBook.removeBook();
    changeRead.changeRead();
}