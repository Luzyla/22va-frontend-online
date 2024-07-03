/* DESCARGAR MEME */

const botonDescarga = document.getElementById('button-descarga');
const contenedorMeme = document.getElementById('canvas-meme');

function descargarMeme () {
    domtoimage.toBlob(contenedorMeme).then(function (blob) {
        saveAs(blob, 'mi-meme.png')
    }
    )
}

botonDescarga.addEventListener('click', descargarMeme);


/* Método ClassList */
/* ADD REMOVE TOGGLE CONTAINS */

const textoTop = document.getElementById('contenedor-texto-top');

/* ADD */
textoTop.classList.add('hidden');


/* REMOVE */
textoTop.classList.remove('hidden');

/* TOGGLE */
botonDescarga.addEventListener('click', function () {
    textoTop.classList.toggle('rojo');    
});

/* CONTAINS */
const tieneLaClase = textoTop.classList.contains('rojo');
console.log(tieneLaClase)
