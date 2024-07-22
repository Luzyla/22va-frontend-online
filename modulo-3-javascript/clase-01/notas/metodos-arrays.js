// array.pop()
// Elimina el último elemento del array
// Retorna el elemento eliminado
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.pop();
console.log(array);

// array.push(elemento)
// Agrega un elemento al final del array
// Recibe como parámetro el elemento a agregar
// Retorna la longitud del array
array.push(11);
console.log(array);

// array.shift()
// Elimina el primer elemento del array
// Retorna el elemento eliminado
array.shift();
console.log(array);

// array.unshift(elemento)
// Agrega un elemento al principio del array
// Recibe como parámetro el elemento a agregar
// Retorna la longitud del array
array.unshift(0);
console.log(array);

// array.splice(indice_inicial, indice_final)
// Elimina un elemento del array en el rango de indices indicado
// Retorna un array con los elementos eliminados
array.splice(0, 3);
console.log(array);

// array.slice(indice_inicial, indice_final)
// Retorna una copia del array original en el rango de indices indicado
// Cuano no se le pasa ningun parámetro, crea un copia entera
// NO MODIFICA EL ARRAY ORIGINAL    
array.slice(0, 3);
console.log(array);

// array.sort()
// Ordena el array
// Retorna el array ordenado
array.sort()
console.log(array);

