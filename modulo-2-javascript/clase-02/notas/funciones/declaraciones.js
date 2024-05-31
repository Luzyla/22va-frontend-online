// * FUNCIONES
/* 
    Una "function" es un bloque de código reutilizable en nuestro programa que nos retorna un valor.

    La ventaja que nos brinda una "function" es que nos permite no repetir código constantemente a lo largo del script.
*/

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Existen 3 formas de declarar funciones:

// Declarativa 
function saludarDeclarativa() {
    return console.log('Welcome User!')
}

// Como variable 
const saludarVariable = function() {
    return console.log('Welcome User!')
}

// Flecha ( Arrow )
const saludarFlecha = () => {
    return console.log('Welcome User!')
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Tenemos un detalle mas... ¿Porque no sucede nada?
// Para que una función cumpla su "funcionamiento", tenemos que ejecutarla.
// ¿Cómo es entonces que ejecutamos una función?
// Simplemente basta con escribir el nombre de la función, y agregar ().

saludarDeclarativa();
saludarVariable();
saludarFlecha();
