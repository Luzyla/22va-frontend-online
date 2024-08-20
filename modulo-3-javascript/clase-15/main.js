/* METODOS DE ARRAYS */

/* map() 
Sintaxis:
array.map(callbacksFunction);
*/

const numbers = [1, 2, 3, 4, 5, 6];

function multiplicar(x) {
  return x * 2;
}
const doubleNumbers = numbers.map(multiplicar);

console.log(doubleNumbers);

const duplicarNumeros = numbers.map((x) => x * 2);
console.log(duplicarNumeros);

/* find() 
Sintaxis:
array.find(callbacksFunction);
*/

const people = [
  { nick: "Jane", age: 25 },
  { nick: "John", age: 30 },
  { nick: "Bob", age: 35 },
];

//flecha
const john = people.find((person) => person.nick === "John");
console.log(john);

//function (callback)
function encontrarAJohn(person) {
  return person.nick === "John";
}
/* const john = people.find(encontrarAJohn) */

/* filter() 
Sintaxis:
array.filter(callbacksFunction);
*/

// flecha
const numerosPares = numbers.filter((x) => x % 2 === 0);
console.log(numerosPares);

const numerosImpares = numbers.filter((x) => x % 2 !== 0);
console.log(numerosImpares);

/* every() es booleano
Sintaxis:
array.every(callbacksFunction);
*/

//flecha
const allPositive = numbers.every((x) => x > 0);
console.log(allPositive);

const allNegative = numbers.every((x) => x < 0);
console.log(allNegative);

/* some() es booleano
Sintaxis:
array.some(callbacksFunction);
*/

const haslargerNumber = numbers.some((x) => x > 3);
console.log("MAYOR A 3", haslargerNumber);
