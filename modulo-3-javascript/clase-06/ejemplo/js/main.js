// setTimeout(() => {
//     modal.classList.toggle('hidden');
// }, 5000)

const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const open_nav = document.getElementById('controls').children[0];
const close_nav = document.getElementById('controls').children[1];
const nav_list = document.getElementById('navbar').children[0];
const nav_links = document.querySelectorAll('#navbar > ul > li');

/**
 * Toggles the visibility of the navigation elements when the navigation is opened.
 *
 * @return {void} This function does not return anything.
 */
function handleToggleControls() {
    close_nav.classList.toggle('hidden');
    open_nav.classList.toggle('hidden');
    nav_list.classList.toggle('hidden');
}

function handleClickNavLink() {
    if (!nav_list.classList.contains('hidden')) {
        nav_list.classList.toggle('hidden');
    }
}

open_nav.addEventListener('click', () => handleToggleControls())
close_nav.addEventListener('click', () => handleToggleControls())
closeModal.addEventListener('click', () => { modal.classList.toggle('hidden'); })
nav_links.forEach(nav_link => { nav_link.addEventListener('click', () => handleClickNavLink()); })