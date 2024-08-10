/* OBJETOS */
//const persona = {
    /* propiedad: 'valor' */
  //  nombre: 'Juan',
    //edad: 30,
    //direccion: 'Calle 25'
//};

//console.log(persona.nombre);
//console.log(persona['edad']); // útil para el for...in
//console.log(persona['direccion']);

/* AGREGAR PROPIEDAD Y VALOR */
//persona.telefono = '1122334422';
//console.log(persona.telefono);
//console.log(persona);

/* MODIFICAR VALOR */
//persona.edad = 29;
//console.log(persona.edad);
//persona.direccion = '';


/* ELIMINAR */
//delete persona.direccion;
//console.log(persona);

/* MÉTODOS PARA BUSCAR SI UNA PROPIEDAD EXISTE EN UN OBJETO */
/* IN */
//console.log('nombre' in persona);
//console.log('direccion' in persona);

/* hasOwnProperty() */
//console.log(persona.hasOwnProperty('nombre'));
//console.log(persona.hasOwnProperty('direccion'));

/* PROPIEDADES COMPUTADAS */
const nombre = 'Meli';
const edad = 40;
const otraPersona = {
    [nombre]: 'es otro nombre',
    ['edad-' + edad]: 'otro valor',
};
//console.log(otraPersona);

const persona = {
    nombre: 'Don Juan',
    edad: 30,
    direccion: {
        calle: 'Calle 25',
        ciudad: 'Buenos Aires',
    },
    hobbies: ['leer', 'viajar', 'cantar', 'programar'],
};

persona.telefono = '1122334422';
//console.log(persona);
const array = ['valor1', 'valor2', 'valor3'];

/* BUCLE for...in */
for (const propiedad in persona) {
    //console.log(propiedad + ': ' + persona[propiedad]);
}

/* BUCLE for...of */
for (const value of Object.values(persona)) {
    console.log(value);
}







