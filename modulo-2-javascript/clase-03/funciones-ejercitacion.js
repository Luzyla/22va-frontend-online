/* 
    Crear una función sumar que tome como argumentos dos números y devuelva la suma de ellos
*/

// 1) Declarar la funcion
function sumar(numero_1, numero_2) {
  //console.log("Parameto 1: ", numero_1)
  //console.log("Parameto 2: ", numero_2)
  //console.log("Soy la funcion sumar")
  //console.log("El resultado de la suma es:",numero_1 + numero_2)

  let resultado = Number(numero_1) + Number(numero_2);
  alert(resultado);
}

// 2) Ejecutar la funcion
//sumar(2, 2);

/* 
    -   -   -   -   -   -   -   -   -   -   -   -
*/

// 1) Declaro la funcion
function restar(a, b) {
  // console.log('Soy la funcion restar')
  let resultado = a - b;
  console.log(resultado);
  alert(resultado);
}

// 2) Ejecutar la funcion
// restar(3, 2)
// restar(10, 5.5)
// restar(3, 5)

/* 
    -   -   -   -   -   -   -   -   -   -   -   -
*/

function gritar(string) {
  // console.log(`¡${string}!`)
  let resultado = `¡${string}!`;
  return resultado;
}

function obtenerNombreCompleto(nombre, apellido) {
  // console.log(`${nombre} ${apellido}`)
  let resultado = `${nombre} ${apellido}`;
  return resultado;
}

function saludar(nombre) {
  // console.log(`Hola ${nombre}, un gusto conocerte`)
  let resultado = `Hola ${nombre}, un gusto conocerte`;
  return resultado;
}

function saludarGritando(nombre, apellido) {
  const nombreCompleto = obtenerNombreCompleto(nombre, apellido);
  const saludo = saludar(nombreCompleto);
  const grito = gritar(saludo);
  console.log(grito);
}

saludarGritando("Lu", "Lu");
