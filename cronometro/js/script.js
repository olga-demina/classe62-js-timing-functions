// Cliccando su un pulsante, viene avviato un cronometro.
// Per fermare il cronometro, bisogna cliccare su un secondo pulsante.

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const toggleBtn = document.getElementById("toggle");
const counterContainer = document.getElementById("counter");

let counter = 0;
let timer;
let previousTimer;
// al click sul bottone start:
//  - ogni secondo il cronometro aumenta di 1
startBtn.addEventListener("click", function() {
    clearInterval(timer);
    timer = setInterval(() => {
        counter++;
        counterContainer.innerHTML = counter;
    }, 1000);
});

// al click sul bottone stop
//  - si arresta il cronometro con clearInterval
stopBtn.addEventListener("click", function() {
    clearInterval(timer);
});

// Variante con toggle
// toggleBtn.addEventListener("click", function() {
//     // se il timer è undefined allora non è partito e quindi lo faccio partire
//     // altrimenti sta andando avanti e quindi lo dobbiamo risettare
//     console.log(timer);
//     if (timer === undefined) {
//         timer = setInterval(() => {
//             previousTimer = timer;
//             counter++;
//             counterContainer.innerHTML = counter;
//         }, 1000);
//     } else {
//         clearInterval(timer);
//         timer = undefined;
//     }
// });