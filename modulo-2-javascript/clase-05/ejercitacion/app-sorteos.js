const multiplicador = 10;
const numero_ganador = 7;

function generarNumero() {
  // El usuario va a ejecutar la funcion y se va a encargar de crear un numero al azar y compararlo con un numero ganador.
  let numero_random = Math.random() * multiplicador;
      numero_random = Math.round(numero_random);

  if(numero_random == numero_ganador) {
    alert("Ganaste un 0 Km!!!")
  } else {
    alert("Segui Participando")
  }
}
