const formContainer = document.querySelector('.form-container');
function openForm () {
    formContainer.style.visibility = 'visible';
    formContainer.style.transition = 'all 0.5s ease';
    formContainer.style.opacity = '100%';
}

function closeForm () {
    formContainer.style.opacity = '0';
    formContainer.style.visibility = 'hidden';
}

const addBtn = document.querySelector('.add-book');
const submitBtn = document.querySelector('.submit');


export function addBook () {
    addBtn.addEventListener("click", function () {

        openForm();

        console.log('clickk');
    });

    submitBtn.addEventListener("click", function () {

        closeForm();

        console.log('close form');
    });
}