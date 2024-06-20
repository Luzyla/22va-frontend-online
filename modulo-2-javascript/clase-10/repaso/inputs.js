let box = document.getElementById('box');
let input = document.getElementById('desenfoque');

input.addEventListener('input', function(event) {
    // console.log(e.target.value);
    // Decir event o decir e, es lo mismo
    let blur_value = event.target.value
    box.style.filter = `blur(${blur_value}px)`
})