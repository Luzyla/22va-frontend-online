/* 
    Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)
*/

function jugarPiedraPapelTijera(jugada_1, jugada_2) {
  if (jugada_1 == "piedra" && jugada_2 == "tijera") {
    console.log(`Gano el jugador 1 con la ${jugada_1}`);
  }

  if (jugada_1 == "papel" && jugada_2 == "piedra") {
    console.log(`Gano el jugador 1 con la ${jugada_1}`);
  }

  if (jugada_1 == "tijera" && jugada_2 == "papel") {
    console.log(`Gano el jugador 1 con la ${jugada_1}`);
  }

  if (jugada_2 == "piedra" && jugada_1 == "tijera") {
    console.log(`Gano el jugador 2 con la ${jugada_2}`);
  }

  if (jugada_2 == "papel" && jugada_1 == "piedra") {
    console.log(`Gano el jugador 2 con la ${jugada_2}`);
  }

  if (jugada_2 == "tijera" && jugada_1 == "papel") {
    console.log(`Gano el jugador 2 con la ${jugada_2}`);
  }

  if (jugada_1 == jugada_2) {
    console.log(`Empataron ${jugada_1} con ${jugada_2}`);
  }
}

jugarPiedraPapelTijera("tijera", "piedra"); // ¡Ganó piedra!
jugarPiedraPapelTijera("piedra", "tijera"); // ¡Ganó piedra!
jugarPiedraPapelTijera("papel", "piedra"); // ¡Ganó papel!
jugarPiedraPapelTijera("piedra", "papel"); // ¡Ganó papel!
jugarPiedraPapelTijera("papel", "tijera"); // ¡Ganó tijera!
jugarPiedraPapelTijera("tijera", "papel"); // ¡Ganó tijera!
jugarPiedraPapelTijera("piedra", "piedra"); // ¡Empate!
jugarPiedraPapelTijera("papel", "papel"); // ¡Empate!
jugarPiedraPapelTijera("tijera", "tijera"); // ¡Empate!
