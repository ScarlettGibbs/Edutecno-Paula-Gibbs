// Autor: Paula Gibbs

// Ingreso de datos Alumno y su Carrera
var nombre = prompt("¿Cual es su nombre?")
var apellido = prompt("¿Cual es su apellido?")
var carrera = prompt("Indique su carrera, Ejemplo: Desarrollo Web, escribala en el recuadro")
// Ingreso Ramso con sus respectivas notas
//Ramo 1
var ramo1 = prompt("Ingrese su Primer Ramo (ejemplo: HTML)")
var r1Nota1 = prompt("Ramo: " + ramo1 + ", ingrese nota 1 (solo numeros)")
var r1Nota2 = prompt("Ramo: " + ramo1 + ", ingrese nota 2 (solo numeros)")
var r1Nota3 = prompt("Ramo: " + ramo1 + ", ingrese nota 3 (solo numeros)")
//Ramo 2
var ramo2 = prompt("Ingrese el Segundo Ramo (ejemplo:  CSS)")
var r2Nota1 = prompt("Ramo: " + ramo2 + ", ingrese nota 1 (solo numeros)")
var r2Nota2 = prompt("Ramo: " + ramo2 + ", ingrese nota 2 (solo numeros)")
var r2Nota3 = prompt("Ramo: " + ramo2 + ", ingrese nota 3 (solo numeros)")
//Ramo 3
var ramo3 = prompt("Ingrese el Tercer Ramo, (ejemplo JavaScript)")
var r3Nota1 = prompt("Ramo: " + ramo2 + ", ingrese nota 1 (solo numeros)")
var r3Nota2 = prompt("Ramo: " + ramo2 + ", ingrese nota 1 (solo numeros)")
var r3Nota3 = "-"// esta nota no se ingresa queda este caracter para rellenar la tabla

//Calculo promedio de los 3 ramos
var promRamo1 =  ((parseFloat(r1Nota1) + parseFloat(r1Nota2) + parseFloat(r1Nota3)) /3).toFixed(2)
var promRamo2 =  ((parseFloat(r2Nota1) + parseFloat(r2Nota2) + parseFloat(r2Nota3)) /3).toFixed(2)
var promRamo3 = (12 - (parseFloat(r3Nota1) + parseFloat(r3Nota2))).toFixed(2)

document.write("<div class='container  m-3'>")
document.write("<p> Nombre: " + nombre +" "+ apellido)
document.write("<br> Carrera: " + carrera + "<br><p>")

document.write("<table class='table'>")

document.write("<thead class='table-dark'>")
document.write("<tr>")
document.write("<th scope='col'>Ramos</th>")
document.write("<th scope='col'>Nota 1</th>")
document.write("<th scope='col'>Nota 2</th>")
document.write("<th scope='col'>Nota 3</th>")
document.write("<th scope='col'>Promedios</th>")
document.write("</tr>")
document.write("</thead>")

document.write("<tbody>")
document.write("<tr>")
document.write("<td>" + ramo1 + "</td>")
document.write("<td>" + r1Nota1 + "</td>")
document.write("<td>" + r1Nota2 +"</td>")
document.write("<td>" + r1Nota3 + "</td>") 
document.write("<td>" + promRamo1 + "</td>")
document.write("<tr>")
document.write("</tbody>")

document.write("<tbody>")
document.write("<tr>")
document.write("<td>" + ramo2 + "</td>")
document.write("<td>" + r2Nota1 + "</td>")
document.write("<td>" + r2Nota2 + "</td>")
document.write("<td>" + r2Nota3 + "</td>") 
document.write("<td>" + promRamo2 + "</td>")
document.write("<tr>")
document.write("</tbody>")

document.write("<tbody>")
document.write("<tr>")
document.write("<td>" + ramo3 + "</td>")
document.write("<td>" + r3Nota1 + "</td>")
document.write("<td>" + r3Nota2 + "</td>")
document.write("<td>" + r3Nota3 + "</td>")
document.write("<th scope='col'>-</th>")
document.write("<tr>")
document.write("</tbody>")

document.write("</table>")

document.write("<br><br> <p class='p-3'>Para Aprobar el Ramo " + ramo3 + " con nota 4, necesitas obtener un " + promRamo3 + " en la 3erq., Nota.<p>")

document.write("</div>")
