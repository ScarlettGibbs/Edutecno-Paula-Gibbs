document.write("<div class='titulos'>");
document.write("<h3>Ejercicio 2 - Operaciones con dos números</h3>");
document.write("</div>");

//buscar para ingresar formularios

//para redondear nros a 2 digitos
var redondea2digitos=(nro) => (nro%2===0)? 0: Math.round(nro * 100)/100;

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

// Solicitar de las variables num1 y num2
// Transformación de caracter a número entero
var nro_1 = esNro(1);
var nro_2 = esNro(2);

document.write("<div class='operaciones'>");
document.write("<p>Numeros ingresados: </p>");
document.write("<ul>");
document.write("<li> Primer numero = " + nro_1 + "</li>");
document.write("<li> Segundo numero = " + nro_2 + "</li>");
document.write("</ul>");

//Operaciones Aritmeticas
document.write("<h4>Operaciones Aritmeticas</h4><br>");
document.write("<ul>");
document.write("<li>- SUMA: " + nro_1 + " + " + nro_2 + " = " + (nro_1 + nro_2 ) + "</li>");
document.write("<li>- Resta: " + nro_1 + " - " + nro_2 + " = " + (nro_1 - nro_2 ) + "</li>");
document.write("<li>- División: " + nro_1 + " / " + nro_2 + " = " + redondea2digitos(nro_1 / nro_2 ) + "</li>");
document.write("<li>- Multiplicación: " + nro_1 + " X " + nro_2 + " = " + (nro_1 * nro_2 ) + "</li>");
document.write("<li>- Módulo (resto de la division) : " + (nro_1 % nro_2 ) + "</li>");
document.write("</ul>");
document.write("</div>");



