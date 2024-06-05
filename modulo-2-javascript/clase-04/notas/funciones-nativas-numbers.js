/* Funciones Nativas - NUMBERS */
let numero = 147;

// Math.random()
// El método random, nos permite generar un numero aleatorio entre 0 y 1.
console.log(Math.random());

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandomNumber(1, 10));

// Math.min(numeros)
// El método min, nos permite obtener el menor número entre todos
console.log(Math.min(10, 5, 1));

// Math.max(numeros)
// El método max, nos permite obtener el mayor número entre todos
console.log(Math.max(10, 5, 1));

// Math.round(numero)
// El método round, nos permite redondear el numero para arriba o abajo, dependiendo de su decimal.
console.log(Math.round(4.2));
console.log(Math.round(4.5));

// Math.ceil(numero)
// El método ceil, nos permite aproximar el numero para arriba, indistintamente de su decimal.
console.log(Math.ceil(4.2));
console.log(Math.ceil(5.05));

// Math.floor(numero)
// El método floor, nos permite aproximar el numero para abajo, indistintamente de su decimal.
console.log(Math.floor(4.8));
console.log(Math.floor(5.05));

// isNaN()
// El método isNaN, nos permite preguntar si el valor es un número o no.
console.log(isNaN(4));
console.log(isNaN(NaN));
console.log(isNaN("12"));
