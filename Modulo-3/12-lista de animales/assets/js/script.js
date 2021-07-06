//@author Paula Gibbs
//@date 06-22-2021

// Creando las Clases

class Propietario {
  constructor(nombre, direccion, telefono) {
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }
  datosPropietario() {
    return `El nombre del propietario es ${this._nombre}. El domicilio es: ${this._direccion}, y el número telefónico de contacto es: ${this._telefono}.`;
  }
}

class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }

  get tipo() {
    return `El tipo de animal es un ${this._tipo}`;
  }
}

class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }

  get nombre() {
    return this._nombreMascota;
  }

  set nombre(nvo_nombre) {
    this._nombreMascota = nvo_nombre;
  }

  get enfermedad() {
    return this._enfermedad;
  }

  set enfermedad(nva_enfermedad) {
    this._enfermedad = nva_enfermedad;
  }
}

// Probando ... espero que funcione...

var laMascota = new Mascota(
  "Paula",
  "La Reina",
  "981801427",
  "Gato",
  "Pinky",
  "Constantemente tiene los ojos con lagañas"
);
console.log(laMascota.datosPropietario);
console.log(laMascota.nombre); // deberia mostar el nombre de la mascota
console.log(laMascota.tipo);

//Agregando una nva mascota

let agregar = document.querySelector("button");
agregar.addEventListener("click", function(evento) {
  evento.preventDefault();
  // verificando el boton
  console.log("Boton")
  //Para mostrara el resultado
  location.href = "#resultado";
  //Datos Propietario
  let propNombre = document.getElementById("propietario").value;
  let propTelefono = document.getElementById("telefono").value;
  let propDireccion = document.getElementById("direccion").value;
  //Datos Mascota
  const mascotaNombre = document.getElementById("nombreMascota").value;
  const enfermedad = document.getElementById("enfermedad").value;
  const tipo = document.getElementById("tipo").value;
  // Segun el tipo
  let mascotaTipo = new Mascota(propNombre, propDireccion, propTelefono, tipo, mascotaNombre, enfermedad);
  //Se muestra en el resultado
  document.getElementById("resultado").innerHTML = `<p>${mascotaTipo.datosPropietario()}<br>${mascotaTipo.tipo}, mientras que el nombre de la mascota es: ${mascotaTipo.nombre} y la enfermedad es: ${mascotaTipo.enfermedad}</p><br><br>`;

  /*
  if (tipo == "perro") {
    let perro = new Mascota(propNombre, propDireccion, propTelefono, tipo, mascotaNombre, enfermedad);
    document.getElementById("resultado").innerHTML = `<p>${perro.datosPropietario()}<br>${perro.tipo}, mientras que el nombre de la mascota es: ${perro.nombre} y la enfermedad es: ${perro.enfermedad}</p>`;
  } else if (tipo == "gato") {
    let gato = new Mascota(propNombre, propDireccion, propTelefono, tipo, mascotaNombre, enfermedad);
        document.getElementById("resultado").innerHTML = `<p>${gato.datosPropietario()}<br>${perro.tipo}, mientras que el nombre de la mascota es: ${gato.nombre} y la enfermedad es: ${gato.enfermedad}</p>`;
  } else if (tipo == "conejo") {
    let conejo = new Mascota(propNombre, propDireccion, propTelefono, tipo, mascotaNombre, enfermedad);;
    document.getElementById("resultado").innerHTML = `<p>${coenjo.datosPropietario()}<br>${conejo.tipo}, mientras que el nombre de la mascota es: ${conejo.nombre} y la enfermedad es: ${conejo.enfermedad}</p>`;
  }

  // o tambien con switch
  switch(tipo){
    case "perro":
      let perro = new Mascota(propNombre, propDireccion, propTelefono, tipo, mascotaNombre, enfermedad);
      document.getElementById("resultado").innerHTML = `<p>${perro.datosPropietario()}<br>${perro.tipo}, mientras que el nombre de la mascota es: ${perro.nombre} y la enfermedad es: ${perro.enfermedad}</p>`;
      break;
    case "gato":
      let gato = new Mascota(propNombre, propDireccion, propTelefono, tipo, mascotaNombre, enfermedad);
      document.getElementById("resultado").innerHTML = `<p>${gato.datosPropietario()}<br>${perro.tipo}, mientras que el nombre de la mascota es: ${gato.nombre} y la enfermedad es: ${gato.enfermedad}</p>`;
      break;
    case "conejo":
      let conejo = new Mascota(propNombre, propDireccion, propTelefono, tipo, mascotaNombre, enfermedad);;
      document.getElementById("resultado").innerHTML = `<p>${coenjo.datosPropietario()}<br>${conejo.tipo}, mientras que el nombre de la mascota es: ${conejo.nombre} y la enfermedad es: ${conejo.enfermedad}</p>`;
  }

  */
});
