/* 
    Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar
*/

// Caso con function - if else
// function esParOImpar(numero) {
//     if(numero % 2 == 0) {
//         console.log("El número", numero , "es par")
//     } else {
//         console.log("El número", numero, "es impar")
//     }
// }

function esParOImpar(numero) {

    switch(numero % 2) {

        case 0 :
            console.log("El número", numero , "es par")
        break;

        default:
            console.log("El número", numero, "es impar")
    }
}

esParOImpar(3)  // 'impar'
esParOImpar(10) // 'par'


