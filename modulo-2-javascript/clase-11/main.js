/* Eventos de inputs */
/* blur */
const nombre = document.getElementById("name");
const nombreP = document.getElementById("name-p");

nombre.addEventListener('blur', function() {
    console.log('Falta completar el nombre');
    nombreP.innerText = "Falta completar el nombre"
})

/* change */
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener('change', function() {
    console.log('Cambio el estado del checkbox');
})

/* focus */
const apellido = document.getElementById('lastname');
const mensaje = document.getElementById('mensaje')

mensaje.addEventListener('focus', function() {
    console.log("El usuario hizo foco en mensaje")
});

/* submit y preventDefault() */
const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("El formulario ha sido enviado");
})





