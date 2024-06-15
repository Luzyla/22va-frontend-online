/* EVENTOS EN JAVASCRIPT */
/* EVENT HANDLER manejador de eventos */
const inputNombre = document.getElementById("name");

const evento = function () {
  alert("Hiciste click!");
  console.log("Hiciste click");
};

// inputNombre.addEventListener("click", evento);

/* EVENTOS DEL MOUSE Y DEL TECLADO */
/* 
click: cuando se hace clic a un elemento
dblclick: doble clic a un elemento
mouseover: cursor del mouse se mueve sobre un elemento
mouseout: cursor del mouse se mueve fuera del elemento
keydown: presiono una tecla
keyup: suelto una tecla
 */

const botonEnviar = document.getElementById("enviar");

botonEnviar.addEventListener("mouseover", function () {
  console.log("Mouse dentro del elemento");
});

botonEnviar.addEventListener("mouseout", function () {
  console.log("Mouse fuera del elemento");
});

/* CALLBACKS */

// Definimos la función callback
function mostrarMensaje() {
  console.log("Hiciste click en el campo Nombre!");
}

// Asignamos el callback al boton
//inputNombre.addEventListener("click", mostrarMensaje);

/* Objeto EVENT */
// El parametro o argumento de la función que se ejecuta dentro del addEventListener
// event o e

inputNombre.addEventListener("input", function (event) {
  console.log("Evento:", event);
  console.log("Target:", event.target);
  console.log("Texto en el input:", event.target.value);
});
