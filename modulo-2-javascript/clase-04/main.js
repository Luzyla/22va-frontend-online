/* FUNCIONES NATIVAS */
/* Strings */
// length | largo
let unString = "Hola Chicas!";
console.log("Longitud de un string", unString.length);
console.log(typeof unString.length);

// toUpperCase | hacia mayusculas
let lowerString = "hola chicas!";
console.log(lowerString.toUpperCase());
console.log(unString.toUpperCase());

// toLowerCase | hacia minúsculas
let upperString = "HOLA CHICAS!";
console.log(upperString.toLowerCase());
console.log(lowerString.toLowerCase());
console.log(unString.toLowerCase());

// slice | cortar
let primerString = "Clase 04 de JavaScript";
let sliceString = primerString.slice(0, 5);
console.log(sliceString);

// includes | incluye | es sensible a las mayúsculas - case sensitive
console.log(primerString.includes("JavaScript"));
let checkSeguridad = primerString.toLowerCase();
console.log(checkSeguridad.includes("javascript"));

// indexOf | es sensible a las mayúsculas - case sensitive
const otroString = "Quiero saber la posición de la palabra";
let indexOfString = otroString.indexOf("saber");
// este es el caso cuando no encuentra el string por el que pregunto
let indexOfFalse = otroString.indexOf("x");
console.log(indexOfString);
console.log(indexOfFalse);

// replace | reemplazar
const unStringQueVaACambiar = "Hoy es lunes. Mañana no es lunes.";
let reemplazarString = unStringQueVaACambiar.replace("lunes", "viernes");
let reemplazarString2 = reemplazarString.replace("lunes", "viernes");
console.log(reemplazarString);
console.log(reemplazarString2);

// toString | equivalente console.log(String(123));
const variableNumero = 1000;
const cambiarAString = variableNumero.toString();
console.log(cambiarAString);
console.log(typeof cambiarAString);

// Numbers
// Math objeto nativo de JavaScript
// numero aleatorio entre 0 y 1
const crearUnNumeroRandom = Math.random();
console.log(crearUnNumeroRandom);

const randomDeCien = Math.random() * 100;
console.log(randomDeCien);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
  //     aleatorio e/0y1   50 - 8 = 42 + 8
}
console.log(getRandomArbitrary(8, 50));

// min
const averiguarElMinimo = Math.min(10, 14, 18, 13, 9);
console.log(averiguarElMinimo);

// max
const averiguarElMaximo = Math.max(35, 200, 50.4, 1000.8, 3);
console.log(averiguarElMaximo);

// round | redondeo
const soyUnNumeroConComa = 8.7; // podria poner una operación (+-*/) pero no es una buena práctica en este caso
const redondearNumeroConComa = Math.round(soyUnNumeroConComa);
console.log(redondearNumeroConComa);
// punto de quiebre .5, mayor a, redondea hacia el numero mas grande, menor a redondea hacia el mas chico

// ceil | aproximación al entero mayor
const ceiled = Math.ceil(4.1);
console.log(ceiled);

// floor | aproxima al entero menor
const floored = Math.floor(4.99);
console.log(floored);

// isNaN | is a Not a Number
const esUnNaN = isNaN(NaN);
const esUnNaN2 = isNaN("7");
const esUnNaN3 = isNaN("hola");
console.log("NaN", esUnNaN, typeof NaN);
console.log("string2", esUnNaN2, typeof "7");
console.log("string3", esUnNaN3, typeof "hola");

// NaN = Not a Number = No es un Número
// si es NaN = si no es un número
