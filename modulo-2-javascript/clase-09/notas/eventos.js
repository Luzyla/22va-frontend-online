const inputName = document.getElementById('name');
const inputLastName = document.getElementById('lastname');
const btn = document.getElementById('btn');

// Eventos 
/* 
    Cuando queremos escuchar eventos en javascript, recurrimos al metodo del DOM addEventListener. Este metodo recibe 2 parámetros, el primer parametro es el evento que queremos escuchar y el segundo es una función que se va a ejecutar cuando se produzca el evento.

    * Sintaxis {

        addEventListener('evento', function() { 
            Código a ejecutar 
        });
    
    } 
*/

// Callbacks
/* 
    Callbacks son funciones que se pasan como parámetro a otras funciones.
    En este caso, el segundo parámetro de la función addEventListener es una función callback que se va a ejecutar cuando se produzca el evento.
*/

// Objeto Event
/* 
    El objeto Event se puede utilizar para obtener información sobre el evento que se produjo. 
    Es el parameto que recibe la función que se envia como segundo parámetro de la función addEventListener.

    * Sintaxis {

        addEventListener('evento', function(event) { 
            Código a ejecutar 
        });
    
    } 
*/

btn.addEventListener('click', function() {
    console.log('Enviaste el formulario');
});

inputName.addEventListener('input', (event) => {
    console.log(event.target.value);
});
