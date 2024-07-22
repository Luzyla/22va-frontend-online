// Los bucles nos permiten recorrer los indices de un array, para obtener los valores almaenados en cada uno de ellos.


// Bucle for
// Sintaxis
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }

// Bucle for in
// Sintaxis
for (let index in array) {
    console.log(index, array[index]);
}

// Bucle for of
// Sintaxis
for (let elemento of array) {
    console.log(elemento);
}

let pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Senna', 'Piquet'];

// Ejemplo for
for (let index = 0; index < pilotos.length; index++) {
    console.log(pilotos[index]);
}

// Ejemplo for in
for (let index in pilotos) {
    console.log(index, pilotos[index]);
}

// Bucle for of
// Sintaxis
for (let piloto of pilotos) {
    console.log(piloto);
}


