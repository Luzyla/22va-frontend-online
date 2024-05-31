// * FUNCIONES - PARÁMETROS Y ARGUMENTOS
/* 
    Anteriormente, vimos que las funciones son bloques de código
    reutilizables en nuestro programa...
    
    Aun así, no estamos aprovechando al máximo todas las ventajas de
    trabajar con una función.

    ¿Cómo es entonces que podemos aprovecharla para que, dependiendo de 
    los datos que reciba, los procese y retorne un valor que esperamos?

    El mejor ejemplo que tenemos para analizar esto, el uso de una operación
    matemática... veamos.
*/

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Declaramos la funcion "dividir"
function dividir() {
  return console.log("El resultado es:", 2 / 1);
}
// Ejecucion
dividir();

// Si bien todo funciona correctamente, el problema es que para obtener otro resultado distinto tendríamos que constantemente modificar los números que escribimos en la línea 15. ¿Un poquito tedioso, no?

// Entonces acá es cuando aparece la magia de los "parámetros" y "argumentos" en una función.

// Un "parámetro", son los datos que recibe la función al ser ejecutada.

// Un "argumento", son los datos que se le pasan a una función al momento de ejecutarla.

// Aclaración: El orden en que se pasan los argumentos al ejecutar una función debe coincidir con el orden de los parámetros que fueron definidos al crear la función.

// Declaramos la función "restar", con 2 parámetros (numero_1, numero_2)
function restar(numero_1, numero_2) {
  return console.log("El resultado es:", numero_1 - numero_2);
}

// Ejecucion de la funcion, con 2 argumentos
restar(6, 3);
restar(3, 6);

// Entonces, ahora, podemos simplemente ejecutar funciones con diferentes argumentos, sin necesidad de modificar el código dentro de la función.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// * FUNCIONES - PARÁMETROS POR DEFECTO
/* 
    Con el fin de evitar errores de ejecución en el código, podemos definir
    valores predeterminados para los parámetros...

    Entonces, esto significa, que al momento de ejecutar la función, si no recibe ningún valor como argumento, va a tomar como valor el que está definido por defecto en el parámetro.

    Veamos el ejemplo...
*/

// Declaramos la función "saludarUsuario", con 1 parámetro, y le asignamos el valor por defecto
function saludarUsuario(nombre_usuario = "Usuario") {
  return console.log("Hola,", nombre_usuario);
}

// Ejecucion de la funcion, sin argumento
saludarUsuario();

// Ejecucion de la funcion, con argumento
saludarUsuario("Raika22");
