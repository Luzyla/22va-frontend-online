
let input = document.getElementById('texto');

console.log(input.value)

input.addEventListener('input', function (event) {
    console.log(event.target.value);
});




