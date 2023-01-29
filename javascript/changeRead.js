//Ovaa funkcija vrsi smena na dali knigata e procitana
export function changeRead () {
    const changeReadButtons = document.querySelectorAll('.changeRead');

    changeReadButtons.forEach(btn => 
        btn.addEventListener("click", function() {
            
            if (btn.classList.contains('read')) {
                btn.classList.add('unread');
                btn.classList.remove('read');
                return;
            }
            if (btn.classList.contains('unread')) {
                btn.classList.add('read');
                btn.classList.remove('unread');
                return;
            }
        
        }
    ));
    
}