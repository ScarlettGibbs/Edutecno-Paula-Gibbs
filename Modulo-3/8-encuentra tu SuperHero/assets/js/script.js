//Variables

const errorNroHeroe = "Tiene que ingresar un numero valido \n (Puede buscar 731 SuperHerios";
const cantHeros = 731; //cantidad de heroes en API
const urlHeroe = 'https://superheroapi.com/api.php/10161418912123747/';
var nroHero;

// Funciones
//Valida que ingreso un numero mayor a cero
/* queda fuera, lo valido en el input
esNro = (esteNro) => {
    do{
        if (isNaN(esteNro) || !esteNro || (esteNro < 1 && esteNro > (cantHero+1))) {
            esteNro = 0;
            alert(errorNro);
        }else{
            esteNro = parseInt(esteNro);
        }
    }while(nroEstd<1);
    return esteNro;
};

//Valida que el numero este en el rango de busqueda (1 a 731)
nroEstd = (esteNro) => {
    return (esteNro<(cantHero+1))? true: false; 
}
*/


// API Rest
$(document).ready(function () {

    $(".Boton__buscar").click(function(evento) {
        evento.preventDefault();
        nroHeroe = $('#busqueda_ID').val();
        console.log('Buscar SuperHeroe nro = ' + nroHeroe);
        if (!nroHeroe || nroHeroe > cantHeroes){
            alert(errorNroHeroe);
        }else{

        }
    });


});





