/* JavaScript llama elementos HTML, NO REEMPLAZA A CSS NI A HTML */

/* getElementById 
Sintaxis: document.getElementById(id) 
*/
const unDiv = document.getElementById("soy-un-div");
console.log("UN DIV", unDiv);

/* querySelector // un elemento
Sintaxis: document.querySelector(selector)
*/

const otroDiv = document.querySelector(".llamar-div");
console.log("OTRO DIV", otroDiv);

/* querySelectorAll // varios elementos
Sintaxis:  document.querySelectorAll(selector);
*/

const tercerDiv = document.querySelectorAll(".llamar-div");
console.log("TERCER DIV", tercerDiv);

/* Metodos de classList */
/* ADD */
const soyTercerDiv = document.querySelector("#soy-tercer-div");
// const soyTercerDiv = document.getElementById("soy-tercer-div"); <<-- versión de variable equivalente a la anterior de la linea 25
console.log("SOY TERCER DIV by ID", soyTercerDiv);
soyTercerDiv.classList.add("hidden"); // agrega la clase hidden al elemento citado en soyTercerDiv

/* REMOVE */
soyTercerDiv.classList.remove("hidden"); // remueve la clase hidden al elemento citado en soyTercerDiv

/* TOGGLE */
const segundoDiv = document.getElementById("soy-otro-div");
segundoDiv.classList.toggle("cambiar-background");
// agrega o remueve la clase hidden al elemento citado en soyTercerDiv, según si el elemento tiene o no ya asignada la clase.

/* CONTAINS | es un booleano */
const tieneLaClase = soyTercerDiv.classList.contains("hidden");
console.log("CONTAINS", tieneLaClase);

/* innerText */
const pepito = document.getElementById("soy-un-parrafo");
console.log(pepito.innerText);
/*  también podría escribir el console.log con la expresión completa, pero no es necesario:
 console.log(document.getElementById("soy-un-parrafo").innerText); */

pepito.innerText = "Este es un nuevo párrafo"; // cambio el texto de pepito al nuevo texto

/* ATRIBUTOS */
/* href 
    se utiliza para especificar una URL*/
const link = document.getElementById("soy-un-link");
console.log(link.href);

/* src 
    especificar la URL de una imagen o recurso externo*/
const imagen = document.getElementById("soy-una-imagen");
console.log(imagen.src);

/* PROPIEDADES DEL OBJETO STYLE 
Sintaxis: variable.style.propiedad
*/

unDiv.style.backgroundColor = "pink";
pepito.style.fontSize = "50px";
pepito.style.color = "white";
link.style.textDecoration = "none";
unDiv.style.display = "flex";
segundoDiv.style.display = "inline";
segundoDiv.style.visibility = "hidden";
