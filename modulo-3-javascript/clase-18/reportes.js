const reportes = [
    {
        id: 1,
        name: 'Gasto 1',
        price: 200
    },
    {
        id: 2,
        name: 'Gasto 2',
        price: 300
    }
]

const generar = document.getElementById('generar');
const resultado = document.getElementById('reportes');

function generarReporte(reportes) {
    console.log('ejecuto')
    resultado.innerHTML = '';
    console.log('borro')

    if(reportes.length == 0) {
        let msg = document.createElement('h2')
            msg.innerHTML = 'No hay datos para reportar'
            resultado.append(msg);
    } else {
        let msg = document.createElement('div')
            msg.innerHTML = JSON.stringify(reportes);
            resultado.append(msg)
    }
}

generar.addEventListener('click', () => {
    generarReporte(reportes);
})