/* card
Hacer un programa que al iniciarse pregunte mediante prompts por

un título
una url de una imagen
una url a un artículo

Utilizar esos datos para completar en el html una card que tenga

una imagen, con la url de la imagen ingresada
un título, con el texto del título ingresado
un link que diga Leer más, con la url al artículo ingresado

Dar algunos estilos mínimos a la card:

centrarla con respecto a la pantalla
agregarle un borde
agregarle un sombreado
cambiarle la tipografía
cambiarle los tamaños de fuente
cambiarle los colores por defecto */

let tituloContent = prompt("Ingresa un titulo");
let urlImagenContent = prompt("Ingresa URL de la imagen");
let urlArticuloContent = prompt("Ingresa URL del artículo");

const titulo = document.getElementById('titulo');
const urlImagen = document.getElementById('imagen-url');
const urlLink = document.getElementById('link-url');

titulo.innerText = tituloContent;
urlImagen.src = urlImagenContent;
urlLink.href = urlArticuloContent;


