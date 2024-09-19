const urlApi = "http://gateway.marvel.com";
const urlPersonajes = "/v1/public/characters";
const publicKey = "mypublickey";
const ts = "holamarvel";
const hash = "ts+privatekey+publickey";
const paramAutenticacion = `?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

fetch(urlApi + urlPersonajes + paramAutenticacion, {
  method: "GET",
  headers: {
    /* Authorization: `${publicKey}`, */
    "Content-type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

/* FUNCION FLECHA */
/* () => {} */

/* PARAMETROS */

/* 

https://gateway.marvel.com:443/v1/public/characters?name=Hulk&orderBy=name&limit=20&apikey=mypublickey

tenemos varios parametros, separados por el &, los parametros empiezan llamandose por ?
name
orderBy
limit
apikey

*/

/* HASH TimeStamp y Claves Marvel */

/* 
public key 
private key

Para la autenticación en Marvel API NECESITAN:
un ts (timestamp o un string largo)
la clave publica
y un hash

COMO ARMAR EL HASH
https://md5.cz/
Para generar el hash en md5 tienen que concatenar:
ts+claveprivada+clavepublica

generan el hash y lo guardan en variable
*/
