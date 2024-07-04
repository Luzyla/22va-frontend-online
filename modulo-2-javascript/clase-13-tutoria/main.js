const lightMode = document.getElementById('light-mode');
const darkMode = document.getElementById('dark-mode');
const body = document.getElementById('body');

function lightModeOn () {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    lightMode.classList.add('hidden');
    darkMode.classList.remove('hidden');
}

lightMode.addEventListener('click', lightModeOn);

function darkModeOn () {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    lightMode.classList.remove('hidden');
    darkMode.classList.add('hidden');
}

darkMode.addEventListener('click', darkModeOn);
