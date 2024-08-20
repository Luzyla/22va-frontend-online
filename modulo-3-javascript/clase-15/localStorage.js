/* LOCAL STORAGE REPASO */
// setItem
// getItem
// removeItem

// Almacenar info en localStorage

const userInput = "El patito hace cuac";
localStorage.setItem("patitoMessage", userInput);

//console.log(userInput)
//console.log(localStorage.getItem('patitoMessage'));

// Recuperar info desde localStorage
const storedMessage = localStorage.getItem("patitoMessage");
console.log(storedMessage);

// Eliminar la informacion de localStorage
localStorage.removeItem("patitoMessage");
console.log(localStorage);

// el localStorage sólo admite STRINGS

// JSON.stringify() toma un objeto y devuelve un string con notación JSON.
const objeto = {
  nombre: "Patito",
  edad: 3,
};
const objetoStringifyed = JSON.stringify(objeto);
console.log("JSON.stringify", objetoStringifyed); // recibe objeto, devuelve string

localStorage.setItem("dataObjeto", objetoStringifyed);

// JSON.parse() toma un string y devuelve un objeto con notación de objeto de JS.

const storedData = localStorage.getItem("dataObjeto");
const dataParsed = JSON.parse(storedData);

console.log("JSON.parse", dataParsed); // recibe string, devuelve objeto
