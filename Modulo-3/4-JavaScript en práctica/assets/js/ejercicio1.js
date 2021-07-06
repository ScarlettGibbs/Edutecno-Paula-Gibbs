//Variables
let formulario = document.getElementById("formulario");

//Funciones
const limpiandoMensajesError = () => {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
};

const validar = (nombre, asunto, mensaje) => {
    let estaValidacion = true;
    let valTexto = /[a-zA-Z]/gim;

    if (valTexto.test(nombre) === false) {
    document.querySelector(".errorNombre").innerHTML = "El nombre es requerido.";
    estaValidacion = false;
    }

    if (valTexto.test(asunto) === false) {
    document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido.";
    estaValidacion = false;
    }

    if (valTexto.test(mensaje) === false) {
    document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido.";
    estaValidacion = false;
    }
    return estaValidacion;
};

//Segun el evento se despliegan los mensajes de error o el mensaje de exito
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    limpiandoMensajesError();
    //Se recupera el texto de los campos del formulario
    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
    let esValido = validar(nombre, asunto, mensaje);
    if (esValido === true) {
        document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito !!!";
    }
});
