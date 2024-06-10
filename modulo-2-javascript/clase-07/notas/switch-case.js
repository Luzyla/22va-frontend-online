// Condicional - SwitchCase
// Sirve para ejecutar un bloque de código dependiendo del valor de una variable, utilizando los breaks para controlar la ejecucion del codigo y el default para controlar el caso en el que no se cumpla ninguna condiciónes anteriores.

// Sintaxis
switch (variable) {
  case valor_1:
    // Código a ejecutar si la condición 1 se cumple
    break; // Corto la ejecución del switch-case
  case valor_2:
    // Código a ejecutar si la condición 2 se cumple
    break; // Corto la ejecución del switch-case
  default:
    // Código a ejecutar si ninguna de las condiciones anteriores se cumple
}

// Pobremos convertir esta estructura de if-else (que conocemos) en un switch-case
let departamento = "1A";

if (departamento == "1A") {
        console.log("Sono en el timbre en el", departamento);
    } else if (departamento == "1B") {
        console.log("Sono en el timbre en el", departamento);
    } else if (departamento == "2A") {
        console.log("Sono en el timbre en el", departamento);
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
