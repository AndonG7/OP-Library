const formContainer = document.querySelector('.form-container');

export function openForm () {
    formContainer.style.visibility = 'visible';
}

export function closeForm () {
    formContainer.style.visibility = 'hidden';
}