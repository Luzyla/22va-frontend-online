/* Funciones Nativas - STRINGS */
let text = "Hola JavaScript";

// Length
// La propiedad length, nos permite obtener la longitud de nuestra cadena de texto
console.log("La longitud del string es:", text.length);

// toUpperCase
// El método toUpperCase, nos permite convertir a mayusculas TODO el string.
console.log(text, text.toUpperCase());

// toLowerCase
// El método toLowerCase, nos permite convertir a minusculas TODO el string.
console.log(text, text.toLowerCase());

// slice ( inicio, final )
// El método slice, nos permite cortar por partes el string.
// Javascript siempre comienza a contar las posiciones desde 0, entonces el primer caracter de nuestro string es igual a la posicion 0.
console.log("Primera letra del string:", text.slice(0, 1));
console.log("Ultima letra del string:", text.slice(14));

// includes ( string )
// El método includes, nos permite buscar una palabra especifica o caracter en nuestro string. Nos devuelve un "true", si existe, "false" si no existe.
// Es importarte recordar que es case sensitive, es por eso que se recomienda utilizar un lowerCase antes de aplicar el método.
console.log("¿Incluye la palabra Hola?", text.includes("Hola"));
console.log("¿Incluye la palabra Hola?", text.includes("HOLA"));

// indexOf()
// El método indexOf, nos permite buscar el comienzo de una palabra o caracter en nuestro string. Nos devuelve un número con su posición si existe, -1 si no existe.
// Es importarte recordar que es case sensitive, es por eso que se recomienda utilizar un lowerCase antes de aplicar el método.
console.log("Posicion de la palabra Hola:", text.indexOf("Hola"));
console.log("Posicion de la palabra HOLA:", text.indexOf("HOLA"));

// replace(string, otroString)
// El método replace, nos permite reemplazar una palabra por otra.
// Es importarte recordar que es case sensitive, es por eso que se recomienda utilizar un lowerCase antes de aplicar el método.
console.log("Reemplazo:", text.replace("HOLA", "hola"));
console.log("Reemplazo:", text.replace("HOLA", "hola"));

// toString()
// El método toString, nos permite convertir a string un valor.
let num = 456;
let num_to_string = num.toString();
console.log(num, typeof num);
console.log(num_to_string, typeof num_to_string);
