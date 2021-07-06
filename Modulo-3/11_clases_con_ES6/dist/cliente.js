"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Clase Cliente
var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuestos) {
    _classCallCheck(this, Cliente);

    this._nombre = nombre;
    this._impuestos = impuestos || [];
  }

  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nvo_nombre) {
      this._nombre = nvo_nombre;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      var esteImpuesto = this._impuestos;
      return (esteImpuesto.monto_bruto_anual - esteImpuesto.deducciones) * 0.21;
    }
    /*
    get impuestos(){
        return this._impuestos;
    }
      calcularImpuesto(monto_bruto_anual, deducciones){
        return (monto_bruto_anual - deducciones)*0.21;
    }
    */

  }]);

  return Cliente;
}();

exports["default"] = Cliente;