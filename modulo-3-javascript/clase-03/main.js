/* BUCLES */

/* for
es uno de los más comunes
Sintaxis:
for (inicializacion; condición; incremento) {
//código a ejecutar
}

inicializacion: inicia la variable a utilizar en el bucle
condición: si es verdadera, ejecuta codigo, sino se detiene
incremento: siempre es al final de la ejecución
*/

const frutas = ['manzana', 'naranja', 'durazno'];
//console.log(frutas.length)
//for (let i = 0; i < frutas.length; )
/* if (index < frutas.lenght) {
    //codigo
} */
                   3 < 3 
for (let i = 0; i < frutas.length; i++) {
   // console.log(`Fruta ${i}: ${frutas[i]}`);
}

//console.table(frutas)

// 1ra ... >>> let i = 0+1 = 1
// 2da ... >>> let i = 1+1 = 2
// 3ra ... >>> let i = 2+1 = 3

/* WHILE
while (condición) {
    //código a ejecutar
    //incremento
}
*/

let i = 0

while (i < 5) {
    //console.log(`Iteración ${i}`);
    i++;
}

/* WARNING IMPORTANTE: Ojo con las condiciones que NUNCA se hacen falsas, pues caen en un LOOP INFINITO */

/* do...while
Sintaxis:
do {
//codigo
} while (condición);
ejecuta una vez y si es verdadera, vuelve a ejecutar hasta que sea falsa
*/

let respuesta;

/* do {
//    console.log("¿Quieres jugar? (s/n)");
    respuesta = prompt('Respuesta: ');
} while (respuesta.toLowerCase() === 's'); */ // normalizarla a minúscula

/* CONDICIONES DE SALIDA EN BUCLES */
/* CONDICIÓN FALSA*/

let j = 5;

while (j < 5) {
    //console.log(`Iteración ${j}`);
    j++;
}

/* BREAK */
let k = 0;

while (k < 6) {
    //console.log(`Iteración ${k}`);
    if (k === 3) {
        break; // salir del bucle
    }
    k++;
}

/* RETURN */
function encontrarNumero(numero) {
    let i = 0;

    while (i < 5) {
        if (i === numero) {
            return `Encontré el número ${numero}`; // salir del bucle y dar un valor
        }
        i++
    }
    return `No encontré el número ${numero}`;
}

/* console.log(encontrarNumero(2));
console.log(encontrarNumero(6)); */

/* CONTINUE
salta a la siguiente iteración del bucle, omitiendo el código dentro del bucle
*/

let l = 0;

while (l < 5) {
    if(l === 2) {
        l++;
        continue; // saltar a la siguiente iteración
    }
    //console.log(`Iteración ${l}`);
    l++
}

/* EXCEPCIONES
Salir del bucle de manera inmediata. 
throw
*/

let m = 0;
 while (m < 5) {
    if (m === 3) {
        throw new Error(`Error: salir del bucle, m es igual a ${m}`);
    }
    //console.log(`Iteración ${m}`);
    m++;
 }


