const info = document.getElementById('info');
const btn_info = document.getElementById('show-info');

btn_info.addEventListener('click', () => {
    info.classList.toggle('hidden');

    if(btn_info.textContent == 'Cerrar') {
        btn_info.innerText = 'Ver Mas';
    } else {
        btn_info.innerText = 'Cerrar';
    }
})