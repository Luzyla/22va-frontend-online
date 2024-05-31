/* template strings */
let variable = "template string";
let vivi = `Esto es un ${variable}`;

console.log(vivi);
console.log(typeof vivi);

/* SALUDO */
function holaAlumnas() {
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  const mensaje = `Hola ${nombre} ${apellido}, bienvenida a Ada!`;
  alert(mensaje);
}

holaAlumnas();

/* HELADERIA */
function ingresarGustosDeHelado() {
  let gusto1 = prompt("Ingrese gusto uno");
  //console.log("GUSTO1", gusto1);
  let gusto2 = prompt("Ingrese gusto dos");
  //console.log("GUSTO2", gusto2);
  let gusto3 = prompt("Ingrese gusto tres");
  //console.log("GUSTO3", gusto3);
  alert(`Aquí tiene su helado de ${gusto1}, ${gusto2} y ${gusto3}.`);
}

ingresarGustosDeHelado();

// otra manera de hacer el mismo ejercicio
let gusto1 = prompt("Ingrese gusto uno");
//console.log("GUSTO1", gusto1);
let gusto2 = prompt("Ingrese gusto dos");
//console.log("GUSTO2", gusto2);
let gusto3 = prompt("Ingrese gusto tres");
//console.log("GUSTO3", gusto3);

function otroHeladoByVivi(gusto1, gusto2, gusto3) {
  alert(`Aquí tiene su helado de ${gusto1}, ${gusto2} y ${gusto3}.`);
}

otroHeladoByVivi(gusto1, gusto2, gusto3);

/* AÑOS PERROS */
let edadHumana = Number(prompt("Ingrese su edad"));
let edadPerro = edadHumana * 15;
alert(`Su edad perro es ${edadPerro} años.`);

/* CASO ALTERNATIVO DESGLOSADO */
/* let edadHumana = prompt("Ingrese su edad");
const edadHumanaComoNumero = Number(edadHumana);
let edadPerro = edadHumanaComoNumero * 15;
 */
