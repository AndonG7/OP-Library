import * as formOpenClose from "./formOpenClose.js";
import * as createBook from "./createBook.js";

const addBtn = document.querySelector('.add-book');
const form = document.querySelector('.form');
const cancelBtn = document.querySelector('.cancelButton');
const submitBtn = document.querySelector('.submitButton');
const title = document.querySelector('.ftitle');
const author = document.querySelector('.fauthor');
const pages = document.querySelector('.fpages');
const read = document.querySelector('.fread');
let bookNumber = 3;


export function bookConstructor () {
    //Ovoj kod ja resetira formata (dokolku ne e prazna), potoa ja otvora formata
    addBtn.addEventListener("click", function () {
        form.reset();
        formOpenClose.openForm();
    });

    //Ovoj kod na submit klik kreira DOM elemnti so podatocite od formata vneseni

    //* Form event listener ("submit") ne iskoristiv bidejki avtomatski pravi submit na formata 
    //koga se zatvara, so sto se generira prazna kniga koga ke se klikne close 
    submitBtn.addEventListener("click", function () {
        createBook.createBook(title.value, author.value, pages.value, read.checked, bookNumber);
        bookNumber++;
        formOpenClose.closeForm();
    });

    //Ovoj kod ja zatvara formata koga ke se klikne cancel
    cancelBtn.addEventListener("click", function () {
        formOpenClose.closeForm();
    });
}