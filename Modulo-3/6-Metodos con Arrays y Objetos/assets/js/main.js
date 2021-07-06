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
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

var traumatologia = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

var dental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

//despliege de la informacion  de consultas medicas

document.write("<h1>Estadisticas Centro Medico Ñuñoa</h1><br>");

//Agregar código para el desafio 2 aquí

// copia de los Arrays para no modificar los origuinales
var cTrauma = traumatologia;
var cRadio = radiologia;
var cDental = dental;

document.write("<div class='container'>");
document.write("<h3>1. Agregar las siguientes horas al arreglo de Traumatología:</h3>");

var elTrau = cTrauma.length;
// se utiliza una copia para no modificar el Array original
//Se agregan las nuevas horas a al final de array Traumatologia
cTrauma.push({
  hora: "9:00",
  especialista: "RENÉ POBLETE",
  paciente: "ANA GELLONA",
  rut: "13123329-7",
  prevision: "ISAPRE",
});
cTrauma.push({
  hora: "9:30",
  especialista: "MARIA SOLAR",
  paciente: "RAMIRO ANDRADE",
  rut: "12221451-K",
  prevision: "FONASA",
});
cTrauma.push({
  hora: "10:00",
  especialista: "RAUL LOYOLA",
  paciente: "CARMEN ISLA",
  rut: "10112348-3",
  prevision: "ISAPRE",
});
cTrauma.push({
  hora: "10:30",
  especialista: "ANTONIO LARENAS",
  paciente: "PABLO LOAYZA",
  rut: "13453234-1",
  prevision: "ISAPRE",
});
cTrauma.push({
  hora: "12:00",
  especialista: "MATIAS ARAVENA",
  paciente: "SUSANA POBLETE",
  rut: "14345656-6",
  prevision: "FONASA",
});

// se lista los pacientes agregados en Traumatologia
var indice = elTrau + 5;
var nro = 0;
document.write("<p> Hora - Especialista - Paciente  -  R.U.T. - Prevision\n</p>");
for (i = elTrau; i < indice; i++) {
  let elmo = [
    cTrauma[i].hora,
    cTrauma[i].especialista,
    cTrauma[i].paciente,
    cTrauma[i].rut,
    cTrauma[i].prevision,
  ];
  document.write(`<p>${elmo.join(" - ")}</p>`);
}

document.write("</div>"); // fin container 

document.write("<div class='container'>");

document.write("<h3>Ingreso de horas pacientes Traumatologia Actualizado</h3>");

document.write("<table class='table'>");
cabeceraTabla();

for (elm of cTrauma) {
  filaTabla(elm);
}
document.write("</table>");
document.write("</div>"); // fin container de las tabla

document.write("<div class='container'>");
document.write("<br><h3>2. Eliminar el primer y último elemento del arreglo de Radiología.</h3>");

//el indice del ultimo paciente
var iRad = cRadio.length - 1;

//Los pacientes que se eliminaran
document.write("<p>Se eliminara el primer Paciente: " + cRadio[0].paciente + "</p>");
document.write("<p>Se eliminara el ultimo Paciente: " + cRadio[iRad].paciente + "</p>");

// se utiliza una copia para no modificar el Array origina
cRadio.pop(); // se elimina el primer registro de el array cRadio
cRadio.shift(); // se elimina el ultimi registro de el array cRadio

document.write("</div>"); // fin container 

document.write("<div class='container'>");
document.write("<h3> Ingreso de horas pacientes Radiologia Actualizado</h3>");

document.write("<table class='table'>");
cabeceraTabla();

for (elm of cRadio) {
  filaTabla(elm);
}
document.write("</table>");
document.write("</div>"); // fin container de las tabla

document.write("<div class='container'>");
document.write("<br><h3> 3. Se imprime consultas médicas Especialidad Dental,<br> separadas por un guion y con salto de pagina</h3>");

document.write("<h4>Ingreso de horas pacientes Dental</h4>");

document.write("<p> Hora - Especialista - Paciente  -  R.U.T. - Prevision\n</p>");
cDental.forEach(function (elm) {
  let elmo = [elm.hora, elm.especialista,  elm.paciente, elm.rut, elm.prevision];
  document.write(`<p>${elmo.join(" - ")}</p>`);
});


document.write("</div>"); // fin container

document.write("<div class='container'>");
document.write('<br><h3>4. Listado de todos los pacientes que se atendieron en el centro médico.</h3>');
document.write('<p>Unir todos los nombres de pacientes e imprimir uno por cada párrafo.</p>');

// Creacion de nuevo array concatenando los array de las 3 especialidades (pocias)
var especialidades = cTrauma.concat(cRadio.concat(cDental));
console.log(especialidades);

//Listado de nos nombre de los pacientes
document.write('<h3">Listado de Pacientes </h3>');
    var contar = 0;
    especialidades.forEach(esteDato => {
        contar += 1;
        document.write('<p>'+contar + ' - ' + esteDato.paciente + '</p>');
    });
document.write("</div>"); // fin container


document.write("<div class='container'>");
document.write('<br><h3>5. Listado Consulta Madidica Dental - Pacientes Prevision ISAPRE</h3>');

// nuevo arreglo Consulta Dental, filtrando prevision = ISAPRE
var dentalIsapre = cDental.filter(cliente=> cliente.prevision==='ISAPRE');
console.log(dentalIsapre);

document.write("<table class='table'>");

cabeceraTabla();

for (elm of dentalIsapre) {
  filaTabla(elm);
}
document.write("</table>");
document.write("</div>"); // fin container de las tabla

document.write("<div class='container'>");
document.write('<br><h3>6. Listado Consulta Madidica Traumatologia - Pacientes Prevision FONASA</h3>');

// nuevo arreglo Consulta Traumatologia, filtrando prevision = FONASA
var traumatologiaFonasa = cTrauma.filter(cliente=> cliente.prevision==='FONASA');
console.log(traumatologiaFonasa);

document.write("<table class='table'>");
cabeceraTabla();

for (elm of traumatologiaFonasa) {
  filaTabla(elm);
}
document.write("</table>");
document.write("</div>"); // fin container

document.write("<div class='container'>");
document.write("<h3>Cantidad de Atenciones por Especialidad</h3>");

document.write("<p>Cantidad de atenciones para Radiología:   " + radiologia.length + "</p>");
document.write("<p>Cantidad de atenciones para Traumatología:   " + traumatologia.length + "</p>");
document.write("<p>Cantidad de atenciones para Dental:   " + dental.length + "</p>");

document.write("<br><h3>Primer y Ultima Atenciones por Especialidad</h3>");

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
document.write("<td>" + cRadio[0].paciente + " - " + cRadio[0].prevision + "</td>");
document.write("<td>" +  cRadio[cRadio.length - 1].paciente + " - " + cRadio[cRadio.length - 1].prevision + "</td>");
document.write("<tr>");
document.write("</tbody>");

document.write("<tbody>");
document.write("<tr>");
document.write("<td> Traumatologia </td>");
document.write("<td>" + cTrauma[0].paciente + " - " + cTrauma[0].prevision + "</td>");
document.write("<td>" + cTrauma[cTrauma.length - 1].paciente + " - " + cTrauma[cTrauma.length - 1].prevision + "</td>");
document.write("<tr>");
document.write("</tbody>");

document.write("<tbody>");
document.write("<tr>");
document.write("<td> Dental </td>");
document.write("<td>" + cDental[0].paciente + " - " + cDental[0].prevision + "</td>");
document.write("<td>" + cDental[cDental.length - 1].paciente + " - " + cDental[cDental.length - 1].prevision + "</td>");
document.write("<tr>");
document.write("</tbody>");
document.write("</table>");

document.write("</div><br>"); // fin container


let headerTable = ()=>{
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

let datosTable = (esto) =>{
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
document.write("</table>");

document.write("<br><br></div>"); // fin container
