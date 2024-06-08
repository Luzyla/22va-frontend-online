// puede avanzar

function puedeAvanzar(colorSemaforo) {
  if (colorSemaforo == "verde") {
    console.log(true);
  } else if (colorSemaforo == "amarillo" || "rojo") {
    console.log(false);
  } else {
    console.log("Error: color de semáforo inválido");
  }
}

puedeAvanzar("verde"); // true
puedeAvanzar("amarillo"); // false
puedeAvanzar("rojo"); // false
puedeAvanzar("lila"); // 'Error: color de semáforo inválido'
