/* 
    Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más.
*/

function puedeVerPelicula(edad, tieneAutorizacion) {
  // Si tiene autorización entonces puede ver la peli => edad >= 15

    if (tieneAutorizacion == true) {
        console.log("Esta habilitada para ver la peli", true);
    }

    if (edad >= 15) {
        console.log("Esta habilitada para ver la peli", true);
    } else {
        // Si no tiene autorización entonces no puede ver la peli
        console.log("No esta habilitada para ver la peli", false);
    }
}
puedeVerPelicula(14, true);