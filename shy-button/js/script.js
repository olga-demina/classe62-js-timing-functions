// Al click sul bottone, il testo deve diventare rosso dopo 2 secondi
const shyBtn = document.getElementById("my-btn");
shyBtn.addEventListener("click", function() {
    // Aspetto 2 secondi e faccio diventare rosso il bottone cliccato
    setTimeout(() => {
        console.log(this);
        this.classList.add("red"); 
    }, 2000);
});
