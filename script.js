//TODO: Cursore personalizzato


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

// TODO: invio email
