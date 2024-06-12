/* 
    Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar
*/

function esParOImpar(numero) {

    // Si es par => El numero es par
    if(numero % 2 == 0) {
        console.log(`El número ${numero} es par`)
    } else {
        // Si no es par ( impar ) => El numero es impar
        console.log(`El número ${numero} es impar`)
    }
}

esParOImpar(3)  // 'impar'
esParOImpar(10) // 'par'

