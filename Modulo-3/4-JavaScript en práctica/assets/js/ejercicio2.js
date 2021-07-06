//Valiables
const boton1 = document.getElementById('btn-1');
const boton2 = document.getElementById('btn-2');
const boton3 = document.getElementById('btn-3');
const boton4 = document.getElementById('btn-4');
const boton5 = document.getElementById('btn-5');
const boton6 = document.getElementById('btn-6');
const caja = document.getElementById('caja');

//Verificando que se presiona un campo de color
boton1.addEventListener('click', (esteColor) => {
    caja.style.backgroundColor = '#e53e3e';
});

boton2.addEventListener('click', (esteColor) => {
    caja.style.backgroundColor = '#dd6b20';
});

boton3.addEventListener('click', (esteColor) => {
    caja.style.backgroundColor = '#faf089';
});

boton4.addEventListener('click', (esteColor) => {
    caja.style.backgroundColor = '#48bb78';
});


boton5.addEventListener('click', (esteColor) => {
    caja.style.backgroundColor = '#81e6d9';
});

boton6.addEventListener('click', (esteColor) => {
    caja.style.backgroundColor = '#d53f8c';
});