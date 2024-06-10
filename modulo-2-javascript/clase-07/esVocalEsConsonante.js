/* 
esVocal(letra)
Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.

esVocal('a') // true
esVocal('n') // false
*/

function esVocal(letra) {
  const letraNormalizada = letra.toLowerCase();
  if (letraNormalizada == ("a" || "e" || "i" || "o" || "u")) {
    console.log(true);
  } else {
    console.log(false);
  }
}

/* esVocal("a"); // true
esVocal("n"); // false
esVocal("z"); // false
esVocal("A"); // false */

/* esConsonante(letra)
Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es

esVocal('a') // false
esVocal('n') // true */

function esConsonante(letra) {
  const letraNormalizada = letra.toLowerCase();
  if (letraNormalizada !== ("a" || "e" || "i" || "o" || "u")) {
    console.log(true);
  } else {
    console.log(false);
  }
}

/*
esConsonante("a"); // false
esConsonante("n"); // true */

function esConsonante(letra) {
  const letraNormalizada = letra.toLowerCase();
  if (letraNormalizada == ("a" || "e" || "i" || "o" || "u")) {
    console.log(false);
  } else {
    console.log(true);
  }
}

esConsonante("a"); // false
esConsonante("n"); // true
esConsonante("N"); // true
esConsonante("A"); // false
