const title = document.querySelector(".title");
const texto = document.getElementById("texto");

const botonClaro = document.getElementById("boton-claro");
const botonOscuro = document.getElementById("boton-oscuro");

const body = document.querySelector('body');

function cambiarModo () {
//    if(body = 'modo-claro')
    if(body.classList.contains('modo-claro')) {
    body.classList.remove('modo-claro')
    body.classList.add('modo-oscuro')
 } else {
    body.classList.remove('modo-oscuro')
    body.classList.add('modo-claro')
 }
}

function cambiarFuente () {
    //title.style.fontFamily = 'Segoe UI';
    //title.style.backgroundColor = 'var(--color-2)';
    title.classList.toggle('fuente-alternativa');
    title.classList.toggle('title');
    body.classList.toggle("modo-claro")
    body.classList.toggle("modo-oscuro")
}
botonClaro.addEventListener('click', cambiarFuente);
botonOscuro.addEventListener('click', cambiarModo);
