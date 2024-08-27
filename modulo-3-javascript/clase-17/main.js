/* OPERACIONES ABM */

/* ARRAYS */
/* ALTA */
/* PUSH() y UNSHIFT()*/

const frutas = ["manzana", "banana", "naranja"];
frutas.push("pera"); // agrega el último

frutas.unshift("uvas"); // agrega el primero
//console.log(frutas)

/* BAJA */
/* POP(), SHIFT() SPLICE() */
frutas.pop(); // elimina el último

frutas.shift(); // elimina el primero

frutas.splice(2, 1); // elimina por índice y cantidad

/* MODIFICACIÓN */
/* SPLICE() y índice y valor */
frutas.splice(1, 1, "mandarina");

frutas[0] = "uvas";
//console.log(frutas);

/* OBJETOS */
/* ALTA */
let persona = {};

persona.nombre = "Jaz";
persona.edad = 22;

persona.hobbies = ["programar", "leer"];

/* BUSCAR */
//console.log(persona.nombre);

/* MODIFICACION */
persona.edad = 23;
//console.log(persona);

/* BUSCAR ARRAY DE OBJETOS */
let gentes = [
  { nombre: "Meli", edad: 40 },
  /* { nombre: "Jaz", edad: 22 }, */
];

let buscarNombre = gentes.filter((gentes) => gentes.edad > 23);
//console.log(buscarNombre);

/* OPERACIONES BASICAS */
/* 
Object.keys() //array con claves del objeto
Object.values() // array con los valores
Object.entries() // array de pares clave-valor
Object.assign() // copiar propiedades de uno a otro
*/
//console.log(Object.keys(persona));
//console.log(Object.values(persona));
//console.log(Object.entries(persona));

const persona2 = {};
// el objeto donde voy a copiar, el objeto que copio
Object.assign(persona2, persona);
//console.log("METODO ASSIGN", persona2);

const persona3 = { ...persona };
//console.log("LOS TRES PUNTITOS", persona3);

/* --------------------------------------- */
/* VALORES ALEATORIOS DE UN ARRAY */
/* Math.random() */
frutas.push(
  "banana",
  "manzana",
  "tomate",
  "kiwi",
  "pera",
  "arandanos",
  "sandia",
  "melon",
  "pomelo"
);
//console.log(frutas);

const indiceAleatorio = Math.floor(Math.random() * frutas.length);
//console.log(indiceAleatorio);
const frutaAleatoria = frutas[indiceAleatorio];
//console.log(frutaAleatoria);

/* ENCADENANDO MÉTODOS */
const otrasPersonas = [
  { nombre: "Juan", edad: 25, dirección: "Calle 1" },
  { nombre: "María", edad: 30, dirección: "Calle 2" },
  { nombre: "Pedro", edad: 20, dirección: "Calle 3" },
  { nombre: "Ana", edad: 35, dirección: "Calle 4" },
  { nombre: "Carlos", edad: 40, dirección: "Calle 5" },
];

/* Encadenar filter y map */
const nombresMayoresDe30 = otrasPersonas
  .filter((otrasPersonas) => otrasPersonas.edad > 30)
  .map((otrasPersonas) => otrasPersonas.nombre.toUpperCase());

//console.log(otrasPersonas.filter((otrasPersonas) => otrasPersonas.edad > 30))
//console.log(nombresMayoresDe30);

/* Encadenar filter, sort y slice */
const personasJovenes = otrasPersonas
  .filter((otrasPersonas) => otrasPersonas.edad < 30)
  .sort((a, b) => a.edad - b.edad)
  .slice(0, 3);

//console.log(personasJovenes);

/* Encadenar map, filter y reduce */
const sumaEdad = otrasPersonas
  .map((otrasPersonas) => ({
    edad: otrasPersonas.edad,
    dirección: otrasPersonas.dirección,
  }))
  .filter(
    (otrasPersonas) =>
      otrasPersonas.dirección === "Calle 1" ||
      otrasPersonas.dirección === "Calle 2"
  )
  .reduce((acumulado, otrasPersonas) => acumulado + otrasPersonas.edad, 0);
console.log(sumaEdad);

/* Operadores
|| && !
!variable
!== 
=
==
===
*/
