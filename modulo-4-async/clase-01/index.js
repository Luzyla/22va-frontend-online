const apiUrl = "https://api.escuelajs.co/api/v1";
//console.log(apiUrl);
const url = apiUrl + "/products";
//console.log(url);

/* FETCH */
fetch(url + "/168")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

/* La estructura del HTTP */
/* 
Métodos HTTP 
GET: obtener recurso
POST: crear y enviar recurso
PUT: actualiza recurso
DELETE: elimino recurso
*/

/*
CODIGOS DE STATUS
200: OK solicitud exitosa
404: Error not found (no encontró el recurso)
500: Internal Server Error
*/

/* CORS (Cross-Origin Resource Sharing) */
fetch(url, {
  method: "GET",
  headers: {
    "Content-type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

/* METODOS DE AUTENTICACION */
const apiKey = "mykey";
fetch(url + "/168", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
