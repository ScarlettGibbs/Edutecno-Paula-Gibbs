// declaracion de variables a utilizar
var op1,
  cantjugadas,
  op1,
  jugada,
  gana,
  persona,
  maquina,
  playMachine,
  playUser,
  partida,
  jugaron;
const piedra = 1;
const papel = 2;
const tijera = 3;
const errorNro = "Tiene que ingresar un numero valido";

// INICIO DE LAS FUNCIONES

//Valida que ingreso un numero mayor a cero
esNro = (esteNro) => {
  if (isNaN(esteNro) || !esteNro || esteNro < 1) {
      esteNro = 0;
  }else{
      esteNro = parseInt(esteNro);
  }
return esteNro;
};

// Escoje entre Piedra - Papel - Tijera
esOpcion = () => {
  let opcion = false;
  let nro;
  do {
    nro = esNro(prompt("¿Cual escojes? \n [1] Piedra \n [2] Papel \n [3] Tijeta ")
    );
    if(nro < 1) {
      alert(errorNro);
      opcion = false;
    }else if(nro < 1 && nro > 4) {
        alert(errorNro + " entre 1,2 o 3");
        opcion = false;
    }else {
        opcion = true;
    }
  } while (opcion === false);
  return nro;
}




// Optiene la cantidad de partidas
function esJugadas() {
  let opcion = false;
  do {
    var nro = esNro(prompt("¿Cuantas veces quieres jugar?"));
    if (nro < 1) {
      alert(errorNro);
      opcion = false;
    } else {
      opcion = true;
    }
  } while (opcion === false);
  return nro;
}



// Para tener en texto la opcion de jugada
escojen = (nro) => {
  let esta;
  if (nro===1){
    esta = "Piedra";
  }else if(nro===2){
    esta = "Papel";
  }else if(nro===3){
    esta = "Tijera";
  }
  return esta;
}

//compara jugadas Maquina=uno, Persona=dos
function compara(uno, dos) {
    let estado;
    let piedraPapel = "Papel le gana a piedra";
    let piedraTijera = "Piedra le gana a tijera";
    let tijeraPapel = "Tijera le gana a papel";
  if (uno === dos) {
    estado = "EMPATE";
    jugaron = "Empate, ";
      if(uno===1){
        jugaron = jugaron + "Pieda VS Piedra";
      }else if(uno===2){
        jugaron = jugaron + "Papel VS Papel";
      }else if(uno===3){
        jugaron = jugaron + "Tijera VS Tijera";
      }
  } else if (uno === 1) { // maquina -> piedra
    if (dos == 2) { //jugador -> papel
      estado = "TU";
      jugaron = piedraPapel;
    } else if (dos === 3) { //jugador -> tijera
      estado =  "YO";
      jugaron = piedraTijera;
    }
  } else if (uno === 2) { //  maquina -> papel
    if (dos == 1) { // jugador -> piedra
      estado =  "YO";
      jugaron = piedraPapel;
    } else if (dos === 3) { //jugador -> tijera
      estado =  "TU";
      jugaron = tijeraPapel;
    }
  } else if (uno === 3) { // maquina -> tijera
    if (dos === 1) { // jugador -> piedra
      estado =  "TU";
      jugaron = piedraTijera;
    } else if (dos === 2) { //jugador -> papel
      estado =  "YO";
      jugaron = tijeraPapel;
    }
  }
  return estado;
}

//Devuelve el ganador de la partida
function ganador(persona, maquina) {
  let gana = compara(maquina,persona);
  return gana;

}

//----------------------------------
document.write("<h1>Desafio - Cachupin vs Maquina </h1>");
//inicio del juego Piedra, papel, tijeras
  alert("Vamos a jugar Piedra papel o tijeras");
  // llama funcion que valida la cantidad de jugadas sea nro
  cantjugadas = esJugadas();
  alert("Que bien!! \n Vamos a jugar " + cantjugadas + " partidas  !!");

  //inicia ciclo de partidas
  for (var i = 1; i < cantjugadas + 1; i++) {
    alert(i + "º Partida");

    // funcion que valida lo que elije la persona sea nro entre 1,2,3
    persona = esOpcion();

    // literalmente la opcion escojuda
    playUser = escojen(persona);

    // aleatoriamnete la opcion de la maquina
    maquina = Math.round(Math.random() * (3 - 1) + 1);
    // literalmente la opcion resultante
    playMachine = escojen(maquina);

    //las jugadas escojudas por la persona y resultante maquina 
    alert("Escojistes " + playUser + "\n Yo escoji " + playMachine);
    
    //Se despliega la jugada en la pagina web
    document.write("<div class='container'>");
    document.write("<br> <h1>" + i + "ª Partida</h1><br>");
    document.write("<br><p>Que buena jugada, escojistes  " + playUser + "</p>");
    document.write("<p> Yo escojo " + playMachine + "</p>");
    document.write("<p>Esta " + i + "ª partida es " + playUser + " VS " + playMachine + "</p><br>");
    jugada = ganador(persona, maquina);

    if(jugada==='EMPATE'){
        mensaje = "Pucha!!!  EMPATAMOS";
    }else if(jugada==='TU'){
        mensaje = "Me ganaste, buena jugada";
    }else if(jugada==='YO'){
        mensaje = "Te gane, ¡Soy el mejor!! ";
    }

    document.write("<p>" + mensaje + "</p>");
    document.write("<p>" + jugaron + "</p>");
    
    alert(mensaje + "\n" + jugaron);
    
    if (i === cantjugadas) {
      alert("Adios");
      document.write("<br><h3>Partidas Finalizadas </n3><br>");
    } else {
      alert("Otra partida!!!");
      document.write("<br><hr>");
    }
    document.write("</div>");
  }



