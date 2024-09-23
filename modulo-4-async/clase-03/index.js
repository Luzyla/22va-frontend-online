const public_key = '';
const private_key = '';
const hash = '';
const ts = '';

const urlApi = "http://gateway.marvel.com";
const urlPersonajes = "/v1/public/characters/1009368";
const paramAutenticacion = `?ts=${ts}&apikey=${public_key}&hash=${hash}`;

let data_personaje = '';

fetch(urlApi + urlPersonajes + paramAutenticacion, {
    method: "GET",
    headers: {
        "Content-type": "application/json",
    },
})
.then((response) => response.json())
.then((info) => {
    data_personaje = info.data.results
    return infoPersonaje(data_personaje);
})
.catch((error) => console.error(error));

function infoPersonaje(data_personaje) {

    let data = data_personaje[0];

    body.innerHTML += `
<div class="flex flex-col md:flex-row gap-5 bg-white rounded-lg shadow-lg p-5 mb-5" id="${data.id}">
    <figure class="w-full">
        <img 
            class="w-full md:w-[400px] h-[400px] object-cover rounded-lg"
            src="${data.thumbnail.path}.${data.thumbnail.extension}" 
            alt="${data.name}"
        >
    </figure>
    <div class="w-full">
        <h3 class="text-xl font-bold mb-3">${data.name}</h3>

        <p class="text-gray-600 text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab cum numquam quod, dolorum animi non deserunt cumque? Cum optio modi tempora quod laboriosam expedita ratione!
        </p>
    </div>
</div>
<div class="flex flex-col gap-5 bg-white rounded-lg shadow-lg p-5">
    <h2 class="text-xl font-bold mt-5">Comics de ${data.name}</h2>

    <ul class="flex flex-col gap-5">
        <li class="bg-gray-100 rounded-lg p-4">
            <h3>${data.comics.items[0].name}</h3>
        </li>
    </ul>
</div>`
}

function infoComic(comic_id) {
    fetch(`http://gateway.marvel.com/v1/public/comics/${comic_id}?ts=IronMan&apikey=8ee98a11040bfc2d1f1afb84440bd188&hash=fec794b59ea963cc0cb95c1cfeedf477`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((info) => {
        console.log(info.data.results)
    })
    .catch((error) => console.error(error));
}

let btn = document.getElementById('43495')
    btn.addEventListener('click', () =>infoComic('43495') );