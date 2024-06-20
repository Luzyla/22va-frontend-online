// let body = document.querySelector('body');
let about = document.getElementById('about') 

let h1 = document.createElement('h1');
    h1.innerText = 'Soy el Titulo';

    // Agregar clases al elemento
    // h1.style.color = 'crimson';
    // h1.style.fontSize = '2em';

    h1.classList.add('colorTitulo', 'centerText');
    // about.append(h1);

let h2 = document.querySelector('h2');
    // Remover una clase 
    h2.classList.remove('clase-desde-html');

// - - - - - - - - - - - - - - - - - - - - - -
let buttonPurple = document.getElementById('change-purple');
let buttonCrimson = document.getElementById('change-crimson');

let box = document.getElementById('box');
    box.classList.add('box-1');
    // box.classList.replace('box-1', 'box-2');

const cambiarColorPurple = function() {
    // console.log('Cambiar a Purple');

    // 1) Metodo add-remove
    // box.classList.remove('box-2');
    // box.classList.add('box-1');

    // 2) Metodo replace
    box.classList.replace('box-2', 'box-1')

}
const cambiarColorCrimson = function() {
    // console.log('Cambiar a Crimson');

    // 1) Metodo add-remove
    // box.classList.remove('box-1');
    // box.classList.add('box-2');

    // 2) Metodo replace
    box.classList.replace('box-1', 'box-2')
}
// 3) Evaluación Condicional
const cambiarColor = function() {
    if( box.classList.contains('box-1') ) {
        box.classList.replace('box-1', 'box-2')
    } else {
        box.classList.replace('box-2', 'box-1')
    }
}

let buttonColor = document.getElementById('change-color');
buttonPurple.addEventListener('click', cambiarColorPurple);
buttonCrimson.addEventListener('click', cambiarColorCrimson);
buttonColor.addEventListener('click', cambiarColor);
