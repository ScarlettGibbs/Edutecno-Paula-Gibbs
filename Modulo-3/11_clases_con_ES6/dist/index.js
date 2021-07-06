"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Paula Gibbs - 23JUN2021
//Importar las clase 
var redondeA2Digitos = function redondeA2Digitos(nro) {
  return nro % 2 === 0 ? Math.trunc(nro) : Math.round(nro * 100) / 100;
};

var limpiandoMensajesError = function limpiandoMensajesError() {
  document.querySelector("#impuesto_calculado").innerHTML = " ";
  document.querySelector(".errorNombre").innerHTML = " ";
  document.querySelector(".errorMonto").innerHTML = " ";
  document.querySelector(".errorDeducciones").innerHTML = " ";
}; //Funcion validar ingreso de texto y nros requeridos


var validar = function validar(nombre, monto, deducciones) {
  var estaValidacion,
      validaNombre,
      validaMonto,
      ValidaDeducciones = false;
  var valTexto = /[a-zA-Z]/gim;
  var valNro = /^[0-9]+$/; //Valida el ingreso del nombre

  if (valTexto.test(nombre) === false) {
    document.querySelector(".errorNombre").innerHTML = "El nombre es requerido.";
    validaNombre = false;
  } else {
    validaNombre = true;
  } //valida ingreso de numeros


  if (valNro.test(monto) === false) {
    document.querySelector(".errorMonto").innerHTML = "El Monto Anual Bruto es requerido.";
    validaMonto = false;
  } else {
    validaMonto = true;
  }

  if (valNro.test(deducciones) === false) {
    document.querySelector(".errorDeducciones").innerHTML = "La Deduccion es requerido.";
    ValidaDeducciones = false;
  } else {
    ValidaDeducciones = true;
  }

  estaValidacion = validaNombre && validaMonto && ValidaDeducciones ? true : false;
  return estaValidacion;
};

var actualizarLaPagina = function actualizarLaPagina() {
  //window.location.reload();
  location.reload();
};

$(document).ready(function () {
  $("#btn_calcular").click(function (evento) {
    evento.preventDefault(); //limpiando los mensajes de error

    limpiandoMensajesError(); //recuperando datos del formulario

    var esteNombre = $("#nombre").val();
    var esteMontoAnualBruto = $("#monto_anual_bruto").val();
    var estasDeducciones = $("#deducciones").val();
    console.log(esteNombre, esteMontoAnualBruto, estasDeducciones); //Para Validar el ingreso de datos solicitados

    var esValido = validar(esteNombre, esteMontoAnualBruto, estasDeducciones); // se verifica que tenga datos ingresados

    if (esValido) {
      /* */
      var impuesto = new _impuestos["default"](esteMontoAnualBruto, estasDeducciones);
      console.log("Impuestos -> " + impuesto.monto_bruto_anual, impuesto.deducciones);
      var cliente = new _cliente["default"](esteNombre, [impuesto]);
      console.log(cliente.nombre); //calculo del impuesto a pagar
      //let aPagar = parseFloat(cliente.calcularImpuesto(impuesto.monto_bruto_anual, impuesto.deducciones));

      var aPagar = parseFloat(cliente.calcularImpuesto());
      console.log("calculo el monto a pagar " + aPagar); // Se redondea 2 decimales

      aPagar = redondeA2Digitos(aPagar);
      console.log("El Cliente " + cliente.nombre + ", tiene que pagar en impuestos $ " + aPagar);
      /* */
      //let aPagar = (esteMontoAnualBruto - estasDeducciones)*0.21;

      $("#impuesto_calculado").text(" ".concat(aPagar));
      console.log(aPagar);
    } else {
      alert("Debe ingredar los datos requeridos"); //Limpia los input

      $('input[type="text"]').val('');
      $('input[type="number" ]').val('');
      $("#impuesto_calculado").text(" ");
      limpiandoMensajesError(); //actualizarLaPagina();
    }
  });
});