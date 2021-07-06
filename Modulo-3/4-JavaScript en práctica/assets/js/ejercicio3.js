// Variables

var nro1 = 0;
var nro2 = 0;
var key;

//Funciones

var setResultado = (value) =>
  (document.getElementById("resultado").innerHTML = value);

var getResultado = () => document.getElementById("resultado").innerHTML;

var clickea = (key) => {
  let esNro = getResultado();
  esNro != "0" || isNaN(key) ? setResultado(esNro + key) : setResultado(key);
};

var calcular = () => {
  nro2 = parseInt(resultado.textContent);
  operaciones(key);
};

var operador = (key) => {
  nro1 = parseInt(resultado.textContent);
  this.key = key;
  clear();
};

function operaciones(key) {
  let total,
    nro = 0;
  if (nro2 == nro && key == "/") {
    alert("No se puede dividor por cero");
    borrar();
  } else {
    switch (key) {
      case "+":
        total = nro1 + nro2;
        break;
      case "-":
        let resta = nro1 - nro2;
        //si el resultado de la resta es nevativo, total = 0
        total = (resta<nro)? nro: resta;
        break;
      case "*":
        total = nro1 * nro2;
        break;
      case "/":
        total = estaDiv(nro1 / nro2);
      //total = (parseInt(nro1) / parseInt(nro2)).toFixed(2);
    }
    clear();
    resultado.textContent = total;
    //resultado.textContent = nro1 + key + nro2 + "=" + total;

  }
}

var estaDiv = (nro) => (nro % 2 === 0 ? Math.trunc(nro) : nro.toFixed(2));

var clear = () => (resultado.textContent = "");

var borrar = () => {
  resultado.textContent = "";
  nro1 = nro2 = 0;
};
