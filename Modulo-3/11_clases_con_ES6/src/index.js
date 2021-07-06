// @Author Paula Gibbs
// @Date 23JUN2021

//Importar las clase 
import Cliente from './cliente.js';
import Impuestos from './impuestos.js';

var redondeA2Digitos = (nro) =>
  nro % 2 === 0 ? Math.trunc(nro) : Math.round(nro * 100) / 100;

const limpiandoMensajesError = () => {
    document.querySelector("#impuesto_calculado").innerHTML = " ";
    document.querySelector(".errorNombre").innerHTML = " ";
    document.querySelector(".errorMonto").innerHTML = " ";
    document.querySelector(".errorDeducciones").innerHTML = " ";
};

//Funcion validar ingreso de texto y nros requeridos
const validar = (nombre, monto, deducciones) => {
    let estaValidacion, validaNombre, validaMonto, ValidaDeducciones = false;
    let valTexto = /[a-zA-Z]/gim;
    let valNro = /^[0-9]+$/;

  //Valida el ingreso del nombre
    if (valTexto.test(nombre) === false) {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido.";
        validaNombre = false;
    }else{
        validaNombre = true;
    }

  //valida ingreso de numeros
    if (valNro.test(monto) === false) {
        document.querySelector(".errorMonto").innerHTML = "El Monto Anual Bruto es requerido.";
        validaMonto = false;
    }else{
        validaMonto = true;
    }

    if (valNro.test(deducciones) === false) {
        document.querySelector(".errorDeducciones").innerHTML ="La Deduccion es requerido.";
        ValidaDeducciones = false;
    }else{
        ValidaDeducciones = true;
    }

    estaValidacion = (validaNombre && validaMonto && ValidaDeducciones)? true:false;
    return estaValidacion;
};

const actualizarLaPagina = () => {
    //window.location.reload();
    location.reload();
}

$(document).ready(function () {
    $("#btn_calcular").click(function (evento) {
        evento.preventDefault();

        //limpiando los mensajes de error
        limpiandoMensajesError();
        
        //recuperando datos del formulario
        let esteNombre = $("#nombre").val();
        let esteMontoAnualBruto = $("#monto_anual_bruto").val();
        let estasDeducciones = $("#deducciones").val();
        console.log(esteNombre, esteMontoAnualBruto, estasDeducciones);
        //Para Validar el ingreso de datos solicitados
        let esValido = validar(esteNombre, esteMontoAnualBruto, estasDeducciones);

        // se verifica que tenga datos ingresados
        if (esValido) {

            /**/
            let impuesto = new Impuestos(esteMontoAnualBruto, estasDeducciones);
            console.log("Impuestos -> " + impuesto.monto_bruto_anual, impuesto.deducciones);
            let cliente = new Cliente(esteNombre, impuesto);
            console.log(cliente.nombre);
            //calculo del impuesto a pagar
            //let aPagar = parseFloat(cliente.calcularImpuesto(impuesto.monto_bruto_anual, impuesto.deducciones));
            let aPagar = parseFloat(cliente.calcularImpuesto());
            //let aPagar = parseFloat(cliente.calcularImpuesto()).toFixed(2);
            console.log("calculo el monto a pagar " + aPagar);
            
            // Se redondea 2 decimales
            aPagar = redondeA2Digitos(aPagar);
            console.log("El Cliente " + cliente.nombre + ", tiene que pagar en impuestos $ " + aPagar);
            /**/ 
            //let aPagar = (esteMontoAnualBruto - estasDeducciones)*0.21;

            $("#impuesto_calculado").text(`$ ${aPagar}`);
            console.log(aPagar);
        } else {
            alert("Debe ingredar los datos requeridos");
            //Limpia los input
            $('input[type="text"]').val('');
            $('input[type="number" ]').val('');
            $("#impuesto_calculado").text(` `);
            //limpiandoMensajesError();
            //actualizarLaPagina();

        }
    });
});
