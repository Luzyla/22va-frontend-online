/* 
    Crear una función tienenMismaLongitud que tome como argumentos dos strings a y b y devuelva true si tienen la misma longitud o false de lo contrario
*/

function tienenMismaLongitud(a, b) {

    let string_1 = a.length;
    let string_2 = b.length;

    // Versión con alambres
    // console.log(string_1 === string_2);

    // Versión condicional
    if(string_1 == string_2) {
        console.log(true)
    }
    
    if( string_1 != string_2){
        console.log(false)
    }
}

tienenMismaLongitud('javascript', 'java') // false
tienenMismaLongitud('manzana', 'cerveza') // true