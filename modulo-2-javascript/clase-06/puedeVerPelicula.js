/* puedeVerPelicula(edad, tieneAutorizacion)
 Crear una función puedeVerPelicula que tome como argumentos
 un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres. */

function puedeVerPelicula(edad, tieneAutorizacion) {
  console.log("edad: ", edad, "| Tiene Autorizacion: ", tieneAutorizacion);
  // Si tieneAutorizacion es TRUE, O tiene 15 años o más, TRUE
  if (tieneAutorizacion == true || edad >= 15) {
    console.log("Puede ver la película");
  } else {
    // si es menor de 15 años y no tiene autorización, FALSE
    console.log("No puede ver la película");
  }
}

puedeVerPelicula(12, false); // false  es menor y no tiene autorizacion
puedeVerPelicula(12, true); // true es menor pero tiene autorizacion
puedeVerPelicula(16, false); // true es mayor y no tiene autorizacion
puedeVerPelicula(18, true); // true es mayor y tiene autorizacion

// TIPOS DE DATOS de JS
// Strings
// Numeros
// Booleanos
