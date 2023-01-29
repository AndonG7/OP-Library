export function removeBook(){
    const removeButtons = document.querySelectorAll('.remove');

    removeButtons.forEach(btn => 
        btn.addEventListener("click", function() {
            const bookRemove = document.querySelector(`.b${btn.className[8]}`);
            bookRemove.remove();
            console.log(bookRemove);
        }
    ));
}