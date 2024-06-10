/* CONDICIONALES
   SWITCH */

/* Caso con frutas */
let fruta = "naranja";

switch (fruta) {
  case "naranja":
    console.log("SWITCH", "La fruta es naranja");
    break;
  case "manzana":
    console.log("La fruta es manzana");
    break;
  case "banana":
    console.log("La fruta es banana");
    break;
  default:
    console.log("No conozco esa fruta");
}

if (fruta == "naranja") {
  console.log("IF", "La fruta es naranja");
} else if (fruta == "manzana") {
  console.log("La fruta es manzana");
} else if (fruta == "banana") {
  console.log("La fruta es banana");
} else {
  console.log("No conozco esa fruta");
}

/* Caso con departamentos */
let departamento = "2A";

if (departamento == "1A") {
  console.log("Sono en el timbre en el", departamento);
} else if (departamento == "1B") {
  console.log("Sono en el timbre en el", departamento);
} else if (departamento == "2A") {
  console.log("Sono en el timbre en el", departamento); //`Sono el timbre en el ${departamento}`
} else if (departamento == "2B") {
  console.log("Sono en el timbre en el", departamento);
} else {
  console.log("Sono en el timbre en", "PB");
}

switch (departamento) {
  case "1A":
    console.log("Sono en el timbre en el", departamento);
    break;
  case "1B":
    console.log("Sono en el timbre en el", departamento);
    break;
  case "2A":
    console.log("Sono en el timbre en el", departamento);
    break;
  case "2B":
    console.log("Sono en el timbre en el", departamento);
    break;
  default:
    console.log("Sono en el timbre en", "PB");
}
