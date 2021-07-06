document.write("<div class='titulos'>");
document.write("<h3>Ejercicio 5 - Calculo Suma y promedio de 5 numeros</h3>");
document.write("</div>");

//para redondear nros a 2 digitos
var redondea2digitos = (nro) =>
  nro % 2 === 0 ? 0 : Math.round(nro * 100) / 100;

//Valida que ingreso un numero mayor a cero
esNro = (item) => {
    let esteNro;
    do{
        esteNro = prompt("Ingrese el " + item + "º número:");
        if (isNaN(esteNro) || !esteNro || esteNro < 1) {
            esteNro = "NO";
            alert("Ingrese un numero valido");
        }else{
            esteNro = parseInt(esteNro);
        }
    }while(esteNro === "NO");
    return esteNro;
};

//Solicitud ingreso de 5  numero y se verifica que sea nro
document.write("<div class='operaciones'>");
document.write("<p>Ingreso de nros:</p>")
document.write("<ul>");
var nro_1 = esNro(1);
document.write("<li> 1º numero = " + nro_1 + "</li>");
var nro_2 = esNro(2);
document.write("<li> 2º numero = " + nro_2 + "</li>");
var nro_3 = esNro(3);
document.write("<li> 3º numero = " + nro_3 + "</li>");
var nro_4 = esNro(4);
document.write("<li> 4º numero = " + nro_4 + "</li>");
var nro_5 = esNro(5);
document.write("<li> 5º numero = " + nro_5 + "</li>");
document.write("</ul>");

//Sumatoria y promedio de los numeros ingresados
var suma = nro_1 + nro_2 + nro_3 + nro_4 + nro_5;
var sumaTexto = "La sumatoria de : " + nro_1 + " + " + nro_2 + " + " + nro_3 + " + " + nro_4 + " + " + nro_5;
var promNros = redondea2digitos(suma/5);

//Impresion de los resultados de los calculos
document.write("<p>" + sumaTexto + " = " + suma + "</p>");
document.write("<p> El promedio es: " + promNros + "<p/>");
document.write("</div>");
