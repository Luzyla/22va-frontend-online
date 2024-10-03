console.log(MARVEL_API_KEY);
console.log(MARVEL_TIMESTAMP);
console.log(MARVEL_API_HASH);

const paramAuth = `ts=${MARVEL_TIMESTAMP}&apikey=${MARVEL_API_KEY}&hash=${MARVEL_API_HASH}`;

console.log(paramAuth);

/* PROMESAS */
/*
Sintaxis:
const promise = new Promise((resolve, reject) => {
    // código a ejecutar
    })

    promise.then((result) => {
    console.log(result)
});
*/

//resolve
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operación completada con éxito");
  }, 2000);
});

promise.then((result) => {
  // console.log(result);
});

// reject
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error: operación falló!");
  }, 4000);
});

promise2
  .then((result) => {
    //console.log(result);
  })
  .catch((error) => {
    //console.error(error);
  });

//console.log("sincrónico");

/* async/await */
/*
Sintaxis 
async function nombreFuncion() {
    try {
        const resultado = await expresion;
        // codigo que se ejecuta despues de obtener el resultado
    } catch (error) {
        // codigo que se ejecuta si error
    }
}
*/
const datosDiv = document.getElementById("datos");
let paramDatos = "";

function usarDatos(datos) {
  datosDiv.innerHTML = `<p>${datos}</p>`;
}

async function obtenerDatos() {
  try {
    const respuesta = await fetch("https://api.escuelajs.co/api/v1/products");
    const datos = await respuesta.json();
    console.log(datos);
    console.log(datos[0].category.image);
    paramDatos = datos[0].description;
    console.log(paramDatos);
    usarDatos(paramDatos);
    /* usarDatos(datos[0].description); */
  } catch (error) {
    console.error(error);
  }
}

obtenerDatos();
