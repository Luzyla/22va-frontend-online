const users = [
    {
        "id": 1,
        "name": "Patricio",
        "surname": "Ramírez",
        "email": "pr@test.com"
    },
    {
        "id": 2,
        "name": "Patricia",
        "surname": "Lopez",
        "email": "pl@test.com"
    },
    {
        "id": 3,
        "name": "Jonh",
        "surname": "Doe",
        "email": "jhd@test.com"
    },
    {
        "id": 4,
        "name": "Jane",
        "surname": "Doe",
        "email": "jnd@test.com"
    },
    {
        "id": 5,
        "name": "Ada",
        "surname": "Lovelace",
        "email": "al@test.com"
    }
]

const ul = document.getElementById('users');

function processData(user_data) { 
    
    for(let user of user_data) { 
        // console.log(user.name, user.surname, user.email);

        let li = document.createElement('li');
            li.classList = 'flex flex-wrap rounded-lg shadow-lg bg-sky-200 p-4';
            ul.append(li);

        let h3 = document.createElement('h3');
            h3.classList = 'text-xl pb-2 w-3/4';
            h3.innerHTML = `${user.name} ${user.surname}`;
            li.append(h3);

        let span = document.createElement('span');
            span.classList = 'text-lg pb-2 w-1/4 text-right';
            span.innerHTML = user.id;
            li.append(span);

        let p = document.createElement('p');
            p.classList = 'text-lg pb-2 w-2/3';
            p.innerHTML = user.email;
            li.append(p);
        
        let buttons = document.createElement('div');
            buttons.classList = 'flex items-center gap-4 w-1/3 justify-end';
            li.append(buttons)

        let edit_btn = document.createElement('a');
            edit_btn.classList = 'text-sm p-2 rounded-lg bg-sky-400 hover:bg-sky-600 transition'
            edit_btn.innerHTML = 'Editar'
            edit_btn.href = "#"
            buttons.append(edit_btn)

        let delete_btn = document.createElement('a');
            delete_btn.classList = 'text-sm p-2 rounded-lg bg-red-400 hover:bg-red-600 transition'
            delete_btn.innerHTML = 'Eliminar'
            delete_btn.href = "#"
            buttons.append(delete_btn)

    }
}
//processData(users);

// LocalStorage almacena informacion en forma de STRINGS

// Settear un valor en el local storage
// localStorage.setItem('item', 'Clase de JSON');

// Obtener un valor en el local storage
// localStorage.getItem('item');

// Remover un valor en el local storage
// localStorage.removeItem('it')
//localStorage.clear()

// localStorage.setItem('users', JSON.stringify(user));

// let dataUsers = localStorage.getItem('users');

// let parsedDataUsers = JSON.parse(dataUsers);


if(localStorage.getItem('users') === null) {
    localStorage.setItem('users', JSON.stringify(users));
}
    let dataUsers = localStorage.getItem('users');
    parsedDataUsers = JSON.parse(dataUsers);
    processData(parsedDataUsers);

