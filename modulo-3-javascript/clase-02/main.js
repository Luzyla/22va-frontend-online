/* ARRAYS */
/* 
un conjunto de valores especificos
una formacion de algo
un dato que almacena una o mas variables 
una lista de datos que pueden ser de cualquier tipo
conjunto de datos ordenados

Un array o matriz o arreglo es una colección de valores que se pueden almacenar en una sola variable.
*/

/* Sintaxis */
/* let myArray = [valor1, valor2, valor3]; */

let frutas = ["banana", "manzana", "mango", "ciruela"];
                /* 0,          1,      2,          3,          4 */

//console.log(frutas);
//console.log(typeof frutas);

/* Índices o Posiciones */
/* empezamos a contar desde CERO, que es la primera posición del array
0: "banana"
1: "manzana"
2: "mango"
3: "ciruela"
 */

//console.log(frutas[0]); // posicion 1 que es indice 0
//console.log(frutas[4]); // posicion 5 que es indice 4  => undefined, no existe!

//console.table(frutas); // me devuelve una tabla del index y el value del array

// Asignar a una variable
let primeraFruta = frutas[0];
//console.log("PRIMERA FRUTA", primeraFruta);

let terceraFruta = frutas[2];
//console.log("TERCERA FRUTA", terceraFruta);

// Utilizar el valor del elemento del array en una función
function saludar(fruta) { // fruta es un parámetro que la función espera
    console.log(`Hola, me gusta la ${fruta}`);
}
//saludar(frutas[1]); // a la ejecución de la función le paso un argumento
//saludar() // si lo paso vacío de argumento, la función da undefined

/* if (frutas[3] === 'naranja') {
    //console.log('La naranja es un cítrico')
} else {
    //console.log('No es naranja')
} */

/* REEMPLAZAR DATOS */
const autos = ['ferrari', 'VW beetle', 'mercedes', 'BMW', 'Chevrolet', 'Toyota', 'Audi'];

autos[2] = 'peugeot';
//console.log(autos);

autos[7] = 'mercedes';
//console.log(autos);

/* LENGTH */ 
/* devuelve el número de elementos que contiene el array */
//console.log(autos.length);

autos[8] = 'fiat';
//console.log(autos.length);

/* BUCLES */
/* for...in 
itera sobre las propiedades del objeto, no sobre los valores del array
*/

/* for (variable in array) {
// código a ejecutar
} */

for (let indice in autos) {
    //console.log(`índice: ${indice}, valor: ${autos[indice]}`)
}

/* for...of 
itera sobre los valores del array.
*/

/* for (variable of iterable) {
// código a ejecutar
} */

/* for (let fruta of frutas) {
  //  console.log(fruta);
} */

//console.log(frutas.length) // cantidad de elementos que tiene el array

/* METODOS DE ARRAY */
/* POP() 
array.pop()
*/
//let frutas = ["banana", "manzana", "mango", "ciruela"];
//console.log("ARRAY", frutas)

/* frutas.pop();
console.log("ARRAY", frutas) */

// const ultimaFruta = frutas.pop(); // asigna el último elemento del array frutas

 /* console.log("ARRAY", frutas)
console.log("ULTIMA FRUTA", ultimaFruta) */

/* const ultimaFruta2 = frutas.pop()
console.log("OTRA ULTIMA FRUTA", ultimaFruta2) */

/* SHIFT() 
elimina el primer valor, y todo el array cambia de indice
array.shift()
*/
const primerFruta = frutas.shift();
console.log("PRIMER FRUTA", primerFruta)

/* PUSH() 
modificar array agregando elementos (uno o más) AL FINAL
array.push(elemento1, elemento2, ..., elementoN);
*/
frutas.push('frutilla', 'mora', 'cereza', 'sandía', 'ananá', 'carambola');
console.log(frutas);

/* UNSHIFT()
modifico el array agregando elementos AL PRINCIPIO
array.unshift(elemento1, elemento2, ..., elementoN);
*/
frutas.unshift('uvas', 'mandarina');
console.log(frutas);

/* SLICE() 
me permite copiar una parte del array sin modificar el original
array.slice(inicio, fin)
*/
const frutasCopia = frutas.slice(0,4); // [0,4)
console.log("FRUTAS COPIA", frutasCopia);
console.log(frutas);

const frutasTodasCopia = frutas.slice(0,(frutas.length));
console.log(frutasTodasCopia);

/* SPLICE()
elimina o reemplaza elementos. Modifica array original
array.splice(inicio, cantidad, elemento1, elemento2, ..., elementoN)
*/

frutasTodasCopia.splice(5, 2, 'kiwi', 'tomate'); // si pongo elementos, se reemplazan
console.log(frutasTodasCopia);

frutasTodasCopia.splice(3, 2); // si no pongo elementos, se eliminan
console.log(frutasTodasCopia);

/* CONCAT() 
me devuelve un nuevo array que es la concatenacion de otros dos o mas arrays
array.concat(array2, array3, ... , arrayN)
*/

const grupo1 = ['Vivi', 'Carola'];
const grupo2 = ['Majo', 'Betsa'];
const grupo3 = ['Jaz', 'Nati'];

const grupo1y2 = grupo1.concat(grupo2);
console.log(grupo1y2)

const losTresGrupos = grupo1.concat(grupo2, grupo3)
console.log("LOS TRES GRUPOS", losTresGrupos)

const losTresGrupos2 = grupo2.concat(grupo3, grupo1)
console.log("LOS TRES GRUPOS", losTresGrupos2)

/* JOIN() 
devuelve una cadena que es una concatenacion de los elementos del array, con un separador especifico.
array.join(separador)
*/

const frutasCopiaJoin = frutasCopia.join('-');
console.log(typeof frutasCopiaJoin);
console.log(frutasCopiaJoin.length);

const frutasCopia2 = frutasCopia.join(' - ')
console.log(typeof frutasCopia2);
console.log(frutasCopia2.length);

const frutasCopia3 = frutasCopia.join(', ')
console.log(typeof frutasCopia3);
console.log(frutasCopia3.length);

const frutasCopia4 = frutasCopia.join(' + ')
console.log(typeof frutasCopia4);
console.log(frutasCopia4);
console.log(frutasCopia4.length);

console.log(frutasCopia)
console.log(typeof frutasCopia);
