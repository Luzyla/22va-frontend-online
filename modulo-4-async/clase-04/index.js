const urlApi = "http://gateway.marvel.com/v1/public";
const urlPersonajes = "/characters";
const urlComics = "/comics";
const publicKey = "df980dd2c89683b6998c74dae0b8844a";
/* const ts = "holamarvel";
const hash = "ts+privatekey+publickey";
const paramAutenticacion = `?ts=${ts}&apikey=${publicKey}&hash=${hash}`; */
const paramAutenticacion = `?apikey=${publicKey}`;

fetch(urlApi + urlComics + paramAutenticacion, {
  method: "GET",
  headers: {
    /* Authorization: `${publicKey}`, */
    "Content-type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
