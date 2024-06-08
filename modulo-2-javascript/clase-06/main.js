// OPERADORES LÓGICOS
// AND (&&)
// OR (||)
// NOT (!)

// AND (&&) true si AMBAS son verdaderas
let tieneDinero = true;
let tieneTarjeta = true;

// Si tieneDinero Y tieneTarjeta, entonces se ejecuta el IF
if (tieneDinero && tieneTarjeta) {
  // dos niveles de boolean: el parentesis del if tiene que ser true para que el parentesis sea true
  console.log("Puedes comprar algo");
} else {
  console.log("No puedes comprar algo");
}

// OR (||)
let esVerano = true;
let esFiesta = false;

if (esVerano || esFiesta) {
  // al menos una de las dos condiciones es TRUE
  console.log("Puedes ir a la playa");
} else {
  console.log("No puedes ir a la playa");
}

// NOT (!)
let esAdmin = true;

// Si NO se cumple esAdmin (esAdmin = false)
if (!esAdmin) {
  console.log("No eres administrador");
} else {
  console.log("Eres administrador");
}

function puedeAvanzar(colorSemaforo) {
  if (colorSemaforo == "verde") {
    console.log(true);
  }

  if (colorSemaforo == "amarillo" || "rojo") {
    console.log(false);
  }

  if (colorSemaforo != "verde" || "amarillo" || "rojo") {
    console.log("Error: color de semáforo inválido");
  }
}

puedeAvanzar("lila");

// PRIORIDAD Y AGRUPACION
let a = true;
let b = false;
let c = true;

console.log((a && b) || c);
// (a && b) = false
// c = true
// (false) || c = true

console.log(a && (b || c));
// a = true
// (b || c) = (false || true ) = true
// a && () = true && (true) = true

let edad = 25;
let nacionalidad = "Argentina";

if (edad >= 18 && nacionalidad !== "Argentina") {
  console.log("Puede votar en Argentina");
} else {
  console.log("No puede votar en Argentina");
}

if (edad >= 18 && nacionalidad === "Argentina") {
  console.log("Puede votar en Argentina");
} else {
  console.log("No puede votar en Argentina");
}

/* CONDICIONALES */
// ELSE IF

/* if (condición1) {
  // código a ejecutar si condición1 es verdadera
} else if (condición2) {
  // código a ejecutar si condición2 es verdadera
} else if (condición3) {
  // código a ejecutar si condición3 es verdadera
} else {
  // código a ejecutar si todo lo anterior es falso
} */

let nota = 9;

if (nota >= 9) {
  // 9, 10
  console.log("Aprobado con honores");
} else if (nota >= 7) {
  // [7 a 9) incluye el 7, no incluye el 9
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

let rol = "administrador";

if (rol === "administrador") {
  console.log("Tiene acceso total");
} else if (rol === "moderador") {
  console.log("Tiene acceso moderado");
} else if (rol === "usuario") {
  console.log("Tiene acceso básico");
} else {
  console.log("No esta registrado");
}

/* OPERADOR TERNARIO */
// Estructura
// condición ? valor_si_verdadera : valor_si_falsa

let edad2 = 17;
let mensaje = edad2 >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
// if (condición) { verdadera }       else { falsa}
console.log(mensaje);

let tieneAutorizacion = true;
let mensaje2 = !tieneAutorizacion ? "Sí" : "No";
console.log("Tiene Autorización: ", mensaje2);

// !tieneAutorizacion --> el ! no me cambia el valor que viene en la variable, lo que hace es evaluar que, para que la condición del condicional se cumpla (de true), la variable tiene que ser false. Por eso si tieneAutorizacion = false, entonces la condición se verifica y da true (Sí, en el ejemplo).
