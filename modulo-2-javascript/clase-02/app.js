let nombre = prompt("Por favor, ingresá tu nombre:");
// al completar el prompt se reescribe la variable con el dato que ingreso: nombre = "Claudia"
console.log("Hola " + nombre);

// FUNCIONES NATIVAS DE JAVASCRIPT
prompt("Por favor, ingresá tu nombre:");
alert("Este es un alert");

// ESTRUCTURA DE LA FUNCIÓN
function nombreDeLaFuncion(parametros) {
  //todo lo que yo quiera ejecutar en esta función
}

// DECLARACIÓN DE LA FUNCIÓN
function saludar(nombre) {
  console.log("Hola " + nombre + "!");
  //console.log(`Hola ${nombre}!`);
}

saludar("Julian");
saludar(345);
saludar();
saludar(nombre);

// OTRA MANERA DE ESCRIBIR UNA FUNCIÓN (como variable)
const estoEsUnaFuncionDeExpresion = function (parametro) {
  // todo el contenido de la función
};

const pedirApellido = function () {
  /* VARIABLES PRIVADAS */
  let apellido = prompt("Ingresa tu apellido"); // se reescribe apellido = "Pacilio";
  let edad = prompt("Edad"); // se reescribe edad = 25;
  console.log("Hola Mr. " + apellido + " Edad: " + edad);
};

pedirApellido();

console.log(apellido);

/* VARIABLE GLOBAL */
let otraVariable = "Esta es una variable global";

// OJO con repetir nombres de variables en distintos scopes
let apellido = "Soy un apellido";
console.log(apellido);

/* ---------------- */

// declaro una variable global y le asigno valor null
let variableGlobal = null; // aca pueden no ponerle valor a la variable y les va a dar undefined, o pueden poner un string o ... etc!
// verifico el valor guardado en variable global
console.log(variableGlobal);

// creo una función para reescribir la variable global que recibe un parámetro
function reescribirVariableGlobal(parametro) {
  // declaro una variable privada a la que le asigno el valor del parámetro
  let variablePrivada = parametro;
  // asigno el valor de variable privada a la variable global (la sobreescribo, es decir, toma el valor del parámetro)
  variableGlobal = variablePrivada;
  // verifico el valor guardado en memoria para ambas variables
  console.log(variableGlobal, variablePrivada);
}

// ejecuto la función pasándole un string como parámetro
reescribirVariableGlobal("Hola soy el parámetro");
reescribirVariableGlobal("Le paso este string como parámetro a la función. ");
// verifico el valor de la variable global
console.log(variableGlobal);

/* ---------------- */

function valorPorDefaultDelParametro(tarea = "limpiar la casa") {
  return `Hola, esta es la tarea: ${tarea}.`;
}

console.log(valorPorDefaultDelParametro()); // llamo a la funcion SIN pasar parámetro.
console.log(valorPorDefaultDelParametro("tender la cama")); // llamo a la función CON parámetro.
