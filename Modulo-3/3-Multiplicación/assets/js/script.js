// declaracion de variables a utilizar
var nro;
const errorNro = "Número fuera del rango";

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

multiplicando = (esteNro) =>{
    document.write("La Multiplicación del numero = " + esteNro + "</h3>");
    console.log("\n La Multiplicación del numero = " + esteNro + "\n");
    for (let i=1; i<=esteNro; i++){
        let resulMult = i*esteNro;
        let texto = i + " x " + esteNro + " = " + resulMult
        document.write("<p>" + texto + "</p>"); 
        console.log(texto);
    }
};

factorales = (esteNro) =>{
    document.write("<h3> Los Factoriales del numero " + esteNro + "</h3>");
    console.log("\n Los Factoriales del numero " + esteNro + "\n");
    // for anidades para calcular los factoriales de esteNro
    for (let i=1; i<=esteNro; i++) {
        let resulFact = 1
        //Calculo del factorial del numero i
        for (let j = 1; j <= i; j++){
            resulFact *= j             
        }
        let textoFactorial = "El factorial de  "+ i + "  es  " + resulFact
        document.write("<p>" + textoFactorial + "</p>"); 
        console.log(textoFactorial);
    }
}

//----------------------------------
//INICIO
document.write("<h1>Desafío - Multiplicación</h1>");

document.write("<div class='container'>");

//se solicita numero y se valida que este dentro del rango
let opcion = false;
do {
    nro = esNro(prompt("Ingresa un nurmero \n (mayor que 1, y menor que 20)"));
    if (nro < 1 || nro >20) {
        alert(errorNro);
        opcion = false;
    } else {
        opcion = true;
    }
} while (opcion === false);
console.log("Numero ingresado: " + nro);

//inicio de los calculos
// MULTIPLICACIÓN 
document.write("<div class='container'>");
multiplicando(nro);
document.write("</div>");

// FACTORIALES
document.write("<div class='container'>");
factorales(nro);
document.write("</div>");
