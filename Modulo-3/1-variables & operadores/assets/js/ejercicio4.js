document.write("<div class='titulos'>");
document.write("<h3>Ejercicio 4 - Calculo Años, meses, semanas y dias</h3>");
document.write("</div>");

//para redondear nros a 2 digitos
var redondea2digitos = (nro) => (nro%2===0)? 0: Math.round(nro * 100)/100;
var redondea3digitos = (nro) => (nro%2===0)? 0: Math.round(nro * 1000)/1000;


//Solicitus ingreso dias para calcular
document.write("<div class='operaciones'>");
var nroDias = parseInt(prompt("Favor ingrese cantidad de dias: "));

//Calculo de los dias en años, meses, dias
var anio = redondea2digitos(nroDias/365);
var mes = redondea2digitos(nroDias/30);
var semana = redondea2digitos(nroDias/7);
var dias = nroDias;

document.write( "Con la cantidad de dias: " + nroDias +", se calcula: ");
document.write("<ul>");
document.write("<li> " + anio + "  año(s)</li>");
document.write("<li> " + mes + "  mes(es)</li>");
document.write("<li> " + semana + "  semana(s)</li>");
document.write("<li> " + dias + "  dia(s)</li>");
document.write("</ul>");
document.write("</div>");
