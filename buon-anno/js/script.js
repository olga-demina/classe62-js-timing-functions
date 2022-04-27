// Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"

const countContainer = document.getElementById("countdown");
let count = parseInt(countContainer.textContent);

// Ogni secondo devo decrementare il count e scrivere il nuovo numero nel countContainer
const timer = setInterval(function(){
    count--;
    if (count === 0) {
        clearInterval(timer);
        countContainer.innerHTML = "Buon Anno! 🎉";
    } else {
        countContainer.innerHTML = count;
    }
}, 1000);