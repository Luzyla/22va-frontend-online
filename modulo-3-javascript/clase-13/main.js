/* ASIGNACION por DESESTRUCTURACION */
const persona = {
    nombre: 'Miriam',
    edad: 30
};
const { nombre, edad } = persona;

//console.log(nombre);
//console.log(edad);
//console.log(persona);

/* CAMBIAR NOMBRE DE VARIABLES DESESTRUCTURADAS */
const { nombre: fullName, edad: age } = persona;
//console.log(fullName);
//console.log(age);

/* DESESTRUCTURACIÓN ANIDADA */
const otraPersona = {
    nombrecito: 'Meli',
    direccion: {
        calle: 'Calle 1',
        numero: 123
    }
};
const { nombrecito, direccion: { calle, numero } } = otraPersona;

//console.log(nombrecito);
//console.log(calle);
//console.log(numero);

/* OBJETOS COMO PARÁMETROS */
/* function saludar(alumna) {
    console.log(`Hola, ${alumna.nombre}!`)
}

const alumna = { nombre: 'Vivi'};
saludar(alumna); */

/* DESESTRUCTURAR PARAMETROS */
const alumna = { 
    nombre: 'Vivi',
    edad: 25,
    direccion: {
        calle: 'Calle 1',
        numero: 123
    },
    hobbies: 'leer, cantar, dormir, programar'
};

function saludar( { nombre, edad, hobbies } ) {
    console.log(`Hola, ${nombre}! Tienes ${edad} años. Tus hobbies son: ${hobbies}.`)
}

//saludar(alumna);
//saludar(alumna);

/* OPERADOR SPREAD */
/* Sintaxis ... */
// objetos
const unaAlumna = { 
    nombre: 'Mili', 
    edad: 20
};
const direccion = {
    calle: 'Av. Rivadavia',
    numero: 16000
}

const datosDeAlumna = { ...unaAlumna, ...direccion };
//console.log(datosDeAlumna);

const masDatos = { 
    apellido: 'Gauto',
    ...unaAlumna,
    mascotas: true
}
//console.log(masDatos);

// arrays
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

const numeros1y2 = [...numeros1, ...numeros2];
//console.log(numeros1y2);

/* OPERADOR REST */
/* Sintaxis ... */

/* 
const [primero, ...chihuahua] = array;
const [ , , tercera, ...variable ] = arrayBase;
const {propiedad1, ...resto} = objeto; 
*/

//arrays
const numerosEnteros = [1, 2, 3, 4, 5, 6];
const [primero, ...fulano] = numerosEnteros;
//console.log('PRIMEROs', primero);
//console.log('fulano', fulano);
//console.log('ARRAY ORIGINAL', numerosEnteros);

const frutas = ['banana', 'manzana', 'pera', 'tomate', 'kiwi'];
const [uno, ...masFrutas] = frutas;
//console.log(uno);
//console.log(masFrutas);

const mezcla = [...numerosEnteros, ...frutas];
//console.log(mezcla);

// sacar el ultimo elemento del array
const [ultimo, ...resto] = [...frutas].reverse();
//console.log(ultimo)
//console.log(resto)


// objetos
const marcas = {
    marca: 'Coca-cola',
    color: 'rojo',
    año: 2022
};
const { marca, color, ...dif } = marcas;
//console.log(marca, color)
//console.log(dif)

/* INMUTABILIDAD */
// usando el primer objeto de la clase de hoy!
persona.edad = 40;
console.log('PERSONA', persona); // cambia 

const copiaDePersona = { ...persona };
console.log('COPIA DE PERSONA',copiaDePersona); // cambia la copia

copiaDePersona.edad = 25;
console.log(persona.edad);
console.log(copiaDePersona.edad);

Object.freeze(copiaDePersona); // resguarda el objeto para que no se pueda modificar

copiaDePersona.nombre = 'Luli Pampin'
console.log(copiaDePersona)






