// Autor: Paula Gibbs

//funciones para desplegar los datos en tablas

let cabeceraTabla = () => {
  document.write("<thead class='table_head'>");
  document.write("<tr>");
  document.write("<th scope='col'>Horas</th>");
  document.write("<th scope='col'>Especialista</th>");
  document.write("<th scope='col'>Paciente</th>");
  document.write("<th scope='col'>R.U.T.</th>");
  document.write("<th scope='col'>Prevision</th>");
  document.write("</tr>");
  document.write("</thead>");
};

let filaTabla = (esto) => {
  document.write("<tbody>");
  document.write("<tr>");
  document.write("<td>" + esto.hora + "</td>");
  document.write("<td>" + esto.especialista + "</td>");
  document.write("<td>" + esto.paciente + "</td>");
  document.write("<td>" + esto.rut + "</td>");
  document.write("<td>" + esto.prevision + "</td>");
  document.write("<tr>");
  document.write("</tbody>");
};

// Ingreso de datos

var radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];

var traumatologia = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

var dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];

//despliege de la informacion  de consultas medicas

document.write("<h1>Estadisticas Centro Medico Ñuñoa</h1><br>");

document.write("<div class='container'>");
document.write("<h3> Ingreso de horas pacientes Radiologia </h3>");

document.write("<table class='table'>");

cabeceraTabla();

for (element of radiologia) {
  filaTabla(element);
}
document.write("</table>");
document.write("</div>"); // fin container de las tabla


//probando forEach  >>>> Funciona !!!! 

/*

document.write("<div class='container'>");
document.write("<h3> Ingreso de horas pacientes Radiologia </h3>");

document.write("<table class='table'>");

cabeceraTabla();

radiologia.forEach(function (element) {
    filaTabla(element);
});
document.write("</table>");

*/


document.write("<div class='container'>");
document.write("<h2>Ingreso de horas pacientes Traumatologia</h2>");

document.write("<table class='table'>");

cabeceraTabla();

for (element of traumatologia) {
  filaTabla(element);
  }

  document.write("</table>");
  document.write("</div>"); // fin container de las tabla

document.write("<div class='container'>");
document.write("<h2>Ingreso de horas pacientes Dental</h2>");

document.write("<table class='table'>");

cabeceraTabla();

for (element of dental) {
  filaTabla(element);
}
document.write("</table>");
document.write("</div>"); // fin container de las tabla

document.write("<div class='container'>");
document.write("<h2>Cantidad de Atenciones por Especialidad</h2>");

document.write("<p>Cantidad de atenciones para Radiología:   " + radiologia.length + "</p>");
document.write("<p>Cantidad de atenciones para Traumatología:   " + traumatologia.length + "</p>");
document.write("<p>Cantidad de atenciones para Dental:   " + dental.length + "</p>");


document.write("<br><h2>Primer y Ultima Atenciones por Especialidad</h2>");

document.write("<table class='table'>");
document.write("<thead class='table_head'>");
document.write("<tr>");
document.write("<th scope='col'>Especialidad</th>");
document.write("<th scope='col'>Primer Paciente - Prevision </th>");
document.write("<th scope='col'>Ultimo Paciente - Prevision </th>");
document.write("</tr>");
document.write("</thead>");

document.write("<tbody>");
document.write("<tr>");
document.write("<td> Radiologia </td>");
document.write("<td>" + radiologia[0].paciente + " - " + radiologia[0].prevision + "</td>");
document.write("<td>"  + radiologia[radiologia.length - 1].paciente + " - " + radiologia[radiologia.length - 1].prevision +  "</td>");
document.write("<tr>");
document.write("</tbody>");

document.write("<tbody>");
document.write("<tr>");
document.write("<td> Traumatologia </td>");
document.write("<td>" + traumatologia[0].paciente + " - " + traumatologia[0].prevision + "</td>");
document.write("<td>" + traumatologia[traumatologia.length - 1].paciente + " - " + traumatologia[traumatologia.length - 1].prevision + "</td>");
document.write("<tr>");
document.write("</tbody>");

document.write("<tbody>");
document.write("<tr>");
document.write("<td> Dental </td>");
document.write("<td>" + dental[0].paciente + " - " + dental[0].prevision + "</td>");
document.write("<td>" + dental[dental.length - 1].paciente + " - " + dental[dental.length - 1].prevision + "</td>");
document.write("<tr>");
document.write("</tbody>");
document.write("</table>");

document.write("<br><br></div>"); // fin container

