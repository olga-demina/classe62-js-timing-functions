// DISINNESCA UNA BOMBA
// Abbiamo una bomba all'interno del browser, che si esplode dopo 10 secondi
// Ci sono 4 bottoni e solo uno di questi disinnesca la bomba, gli altri la fanno esplodere


// all'avvio della pagina facciamo partire il counter
const countContainer = document.getElementById("countdown");
let count = parseInt(countContainer.textContent);

// Ogni secondo devo decrementare il count e scrivere il nuovo numero nel countContainer
const timer = setInterval(function(){
    count--;
    if (count <= 0) {
        clearInterval(timer);
        countContainer.innerHTML = "Booom!💣";
    } else {
        countContainer.innerHTML = count;
    }
}, 1000);


const buttons = document.querySelectorAll("button");

// Geneare numero random da 0 all'untima posizione dell'array di bottoni. Il bottone che si trova in questa posizione disinnesca la bomba.
// altri bottoni fanno esplodere la bomba

const rndNumber = getRndInteger(0, (buttons.length - 1));
console.log(rndNumber);

for (let i = 0; i < buttons.length; i++) {
    const thisButton = buttons[i];
    thisButton.addEventListener("click", function() {
        if( i === rndNumber) {
            clearInterval(timer);
        } else {
            count = 0;
        }
    });
}


// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}