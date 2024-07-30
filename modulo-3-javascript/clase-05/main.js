/* TIMER */

/* setTimeout 
ejecuta la función 1 vez, despues del intervalo de tiempo
Sintaxis:
setTimeout(función, tiempo);

tiempo: intervalo de tiempo se escribe en milisegundos (1seg = 1000ms)
*/

function saludar() {
    //alert("Hola chicas! Soy una función.");
    console.log("Hola chicas! Soy una función.");
}
//let timerTimeout = setTimeout(saludar, 4000);

const buttonTimeout = document.getElementById('button-timeout');

buttonTimeout.addEventListener('click', () => {
    clearTimeout(timerTimeout);
    console.log('setTimeout cancelado!');
});

// clearTimeout(timer); // cancela el timer

/* setInterval 
ejecuta la funcion todas las veces en un tiempo determinado
Sintaxis:
setInterval(función, tiempo);
*/

function decirHola() {
    console.log("hola! soy la función ejecutada por intervalo!")
    //alert("Hola! (intervalo)");
}

let timerInterval = setInterval(decirHola, 3000);

const buttonInterval = document.getElementById('button-interval');
buttonInterval.addEventListener('click', () => {
    clearInterval(timerInterval)
    console.log('setInterval cancelado!');
});

