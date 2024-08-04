/* 
SETEAR INPUT VALUE CON FECHA DEL DÍA
*/

// variable para el elemento del DOM
const inputDate = document.getElementById('date');

// variable para guardar el objeto Date
let currentDate = new Date;

// setear el value del input, con el formato adecuado (AAAA-MM-DD)
inputDate.value = currentDate.toISOString().slice(0, 10);

/* console.log(currentDate, "=>", currentDate.toISOString().slice(0, 10)); */