// BOOLEANOS
let isAdmin = true;

// Operadores relacionales
// > mayor que
// < menor que
// >= mayor o igual que
// <= menor o igual que

/* Ejemplos
9 > 5 // true
9 < 5 // false
9 <= 10 // true (incluye o no en el rango)
*/

// Operadores de igualdad
// == (igual que)
// != (no es igual que)
// === (estrictamente igual que)

// Ejemplos
// 6 != 5 // true
// 6 != 6 // false

let numero = 5; // un solo = es un operador de asignación, no de igualdad en JS

const numero5 = 5;
const string5 = "5";

console.log(numero5 == string5); // true COERCION DE TIPOS (igualdad NO estricta)
console.log(numero5 === string5); // false (igualdad ESTRICTA)

// IF [ELSE]
// if (condición) { //es obligatorio el IF
/* El codigo que necesito ejecutar, si la condicion es TRUE (o sea, secumple) */
// } else { // no es obligatorio el ELSE
/* El cógido que ejecuto cuando la condición NO se cumple, es decir es FALSE */
// }

let edad = 18;

if (edad < 18) {
  // si la edad es menor que 18
  console.log("Eres menor de edad"); // le digo que es menor de edad
} else {
  // si la edad NO es menor que 18
  console.log("Eres mayor de edad"); // le digo que es mayor de edad
}
console.log("EDAD", edad < 18);

// otro caso de uso
let isEmpty = ""; // variable contiene string vacío

if (isEmpty) {
  // si isEmpty == true, ejecutar 👇
  console.log("El string no está vacío");
} else {
  // si isEmpty == false, ejecutar 👇
  console.log("El string está vacío");
}
