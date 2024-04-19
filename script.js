//TODO: Cursore personalizzato

//TODO: transizione route

//Percentuali skill
document.addEventListener('DOMContentLoaded', function() {
    const nameskills = document.querySelectorAll('.nameskill');
    nameskills.forEach(function(nameskill) {
        const originalText = nameskill.innerText; // Salva il testo originale
        const newText = nameskill.dataset.newText; // Ottieni il nuovo testo dall'attributo data

        nameskill.addEventListener('mouseover', function() {
            this.textContent = newText;
        });
        nameskill.addEventListener('mouseout', function() {
            this.textContent = originalText;
        });
    });
});

//TODO: pulsanti slider

let count = 0;

function preSlider(){
    if(count === -1)
        count = 1;
    else
        count -= 1;
}

function postSlider(){
    if(count === 2)
        count = 0;
    else
        count += 1;
}

// TODO: invio email
