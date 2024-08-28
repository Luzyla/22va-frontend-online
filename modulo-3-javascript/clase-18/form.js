const form = document.getElementById('login');
const btn = document.getElementById('login_btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    btn.setAttribute('disabled', true);
})



