// TIPOS DE DATOS
// 1. Primitivos
// number: 0-9, negativos, 0.5,
// string: "", '', ``
// boolean: true, false
// null: null
// undefined: undefined

// NaN (not a number)
// Infinity

// 2. Objetos
// numbers
// strings
// booleans
// date
// arrays

// 3. Functions

// console.log("Hola Chicas!");
// console.log(2 + "hola");

// VARIABLES
var unaVariable = "Hola";
console.log(unaVariable);

var $una_Var = "Dice Juli que se puede";
console.log($una_Var);

var eñe = "probando la ñ";
console.log(eñe);
// unaVariable = "Hola";

eñe = "este es otro valor para eñe";
console.log(eñe);

let estaVariablePuedeCambiar; // puede cambiar el valor
console.log("LET", estaVariablePuedeCambiar);
const ID = 20; // no cambia el valor, el contenido

let backticks = `Hola,
como estas?
te gusta esto?`;

const html = `
<div>
<h1>Hola</h1>
<p>Esto es un parrafo</p>
</div>
`;

console.log(html);
console.log(typeof html);

let queEs = "2";
console.log(queEs);

let esString = "";

estaVariablePuedeCambiar = "Hola Carola";
console.log("LET 2,", estaVariablePuedeCambiar);

/*  OPERADORES ARITMÉTICOS
Suma +
Resta -
Multiplicacion *
Division /
Resto % (resto de la división entera)
Incremento ++ (aumenta en 1 en valor numérico)
Decremento -- (disminuye en 1 en valor numérico)
Potencia ** (potencia de un número)
*/

/* OPERADOR DE CONCATENACIÓN
Operador +

"Hola " + "Chicas"
'Hola Chicas'

2+"2"
'22'

2+"3"+4+5
'2345'

2+3+4+5
14

2+3+4+"5"+6
'956'
*/

/* TEMPLATE STRINGS OR TEMPLATE LITERALS
 */
// Concatenación de strings
let nombre = "Julian";
const mensaje = `Hola, ${nombre}!`;
console.log(mensaje);

nombre = "Claudia";
// mensaje = `Hola, ${nombre}!`;
console.log(nombre);
console.log(mensaje); // deberia mostrar Hola, Claudia!

//alert(mensaje);

// Incrustar expresiones
const x = 5;
const y = 10;
const resultado = `El resultado es ${x + y}`;

console.log(resultado);

// Multi-linea
const componente = `
<div>
<h1>Hola</h1>
<p>Esto es un parrafo</p>
    </div>
`;

console.log(componente);

// COERCION DE TIPOS
console.log(Number("123"));

console.log(Number(true));
console.log(Number(false));

let numberToString = 333;
console.log(
  typeof numberToString,
  String(numberToString),
  typeof String(numberToString)
);
// console.log(numberToString.toString());

console.log(String(2333), typeof String(2333));
