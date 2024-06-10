/* 
obtenerGeneracion(anioNacimiento)
Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:

Generación	Años de nacimiento
Baby boomer	1949-1968
Generación X	1969-1980
Millennials	1981-1993
Generación Z	1994-2010
*/

/* function obtenerGeneracion(anioNacimiento) {
  // let anioNormalizado = Number(anioNacimiento);
  // Baby boomer	1949-1968
  if (1949 <= anioNacimiento <= 1968) {
    // (anioNacimiento >= 1949 && anioNacimiento <= 1968)
    console.log("Baby boomer");
  } else if (1969 <= anioNacimiento <= 1980) {
    // Generación X	1969-1980
    console.log("Generación X");
  } else if (1981 <= anioNacimiento <= 1993) {
    // Millennials	1981-1993
    console.log("Millennials");
  } else if (1994 <= anioNacimiento <= 2010) {
    //Generación Z	1994-2010
    console.log("Generación Z");
  } else {
    console.log("No tenes generación");
  }
} 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
La razón por la que el resultado es siempre «Baby boomer» es que las expresiones condicionales de las sentencias if y else if no están escritas correctamente.

En JavaScript, los operadores de comparación (<=, >=, etc.) tienen mayor precedencia que los operadores lógicos (&&, ||, etc.). Por lo tanto, la expresión 1949 <= anioNacimiento <= 1968 se evalúa como (1949 <= anioNacimiento) <= 1968, que siempre es verdadero.

Para solucionarlo, debe comparar explícitamente anioNacimiento con los límites inferior y superior de cada sentencia condicional. 

Entonces:
*/

function obtenerGeneracion(anioNacimiento) {
  // Baby boomer    1949-1968
  if (anioNacimiento >= 1949 && anioNacimiento <= 1968) {
    console.log("Baby boomer");
  } else if (anioNacimiento >= 1969 && anioNacimiento <= 1980) {
    // Generación X    1969-1980
    console.log("Generación X");
  } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993) {
    // Millennials    1981-1993
    console.log("Millennials");
  } else if (anioNacimiento >= 1994 && anioNacimiento <= 2010) {
    //Generación Z    1994-2010
    console.log("Generación Z");
  } else {
    console.log("No tenes generación");
  }
}

obtenerGeneracion(1950);
obtenerGeneracion(1982);
obtenerGeneracion(1992);
obtenerGeneracion(1988);
obtenerGeneracion(2000);
obtenerGeneracion(2015);
obtenerGeneracion(1930);
obtenerGeneracion(2020);
obtenerGeneracion(1979);
