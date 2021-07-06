document.write("<div class='titulos'>");
document.write("<h3>Ejercicio 3 - Transformacion Grados Celsius a Kelvin y Fahrenheit</h3>");
document.write("</div>");

//para redondear nros a 2 digitos
var redondea2digitos=(nro) => (nro%2===0)? 0: Math.round(nro * 100)/100;

// Transformacion Temperatura de Celsius a Kelvin y Fahrenheit.

// Ingreso de variable °C } 
var gradoC = redondea2digitos(parseFloat(prompt("Ingresa temperatura en °C: "))); 

//transformacion °C a °K o °F
var gradoK = redondea2digitos(gradoC + 273.15);
var gradoF = redondea2digitos((gradoC  * 9/5) + 32);
//impresion del resultado de la conversion de Celsius a Kelvin y Fahrenheit. 
document.write("<div class='operaciones'>");
document.write("<br><p> Transformacion " + gradoC + "°C a: </p>");
document.write("<ul>");
document.write("<li>" + gradoK + "°K (grados Kelvin)</li>");
document.write("<li>" + gradoF + "°F (grados gradoF)</li>");
document.write("</ul>");
document.write("</div>");