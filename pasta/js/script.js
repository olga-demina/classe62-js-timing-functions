// BUTTA LA PASTA
// Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
// Dopo il tempo indicato, appare un alert().

// 1. chiedre all'utente i minuti che mancano
const seconds = parseInt(prompt("Quanti secondi mancano?")) * 1000;
console.log(seconds);

// 2. facciamo partire il timer con il tempo indicato
setTimeout(alertButtaPasta, seconds);

function alertButtaPasta() {
    alert("Butta la pasta!");
}