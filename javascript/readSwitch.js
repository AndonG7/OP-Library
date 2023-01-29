//So ovaa funkcija se cita boolean sostojbata na read checkBox i vo odnos na toa dali e true ili false
//se vrakja string "read" ili "unread" so sto se dodava kako klasa na novo kreiranite knigi (kopceto za procitano)
export function readSwitch(read) {
    switch (read) {
        case true: return "read";
        break;
        case false: return "unread";
        break;
    }
}