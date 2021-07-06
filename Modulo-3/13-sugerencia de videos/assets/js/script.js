//@author Paula Gibbs
//@date 23JUN2021

// se agrega en el HTML para que puedan visualizar los videos:
// <iframe id="categoria" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// Seria una de estas tres categorias: musica, película, serie

//Variables que vamos a utilizar
srcUrlEjemplo = "https://www.youtube.com/embed/5PSNL1qE6VY"; // no ocupo

//los id iframe
const idMusica = document.getElementById("musica");
const idPeliculas = document.getElementById("peliculas");
const idSeries = document.getElementById("series");

//Las url para cada categoria (src)
//en musica tengo estas favoritas.... 
//<iframe width="560" height="315" src="https://www.youtube.com/embed/u5yyFrfR37I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<iframe width="560" height="315" src="https://www.youtube.com/embed/3oB2x5-44Zo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<iframe width="560" height="315" src="https://www.youtube.com/embed/WSvvwmFJnp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<iframe width="560" height="315" src="https://www.youtube.com/embed/JuFJ2e_4nF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<iframe width="560" height="315" src="https://www.youtube.com/embed/K5KAc5CoCuk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<iframe width="560" height="315" src="https://www.youtube.com/embed/2ZSXwlS6gu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<iframe width="560" height="315" src="https://www.youtube.com/embed/HglA72ogPCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//pero gano esta >>>> <iframe width="560" height="315" src="https://www.youtube.com/embed/TkFHYODzRTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
const urlMusica = "https://www.youtube.com/embed/TkFHYODzRTs";
//Ejemplo desafio --> <iframe width="560" height="315" src="https://www.youtube.com/embed/5PSNL1qE6VY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//aunque estuvo dificil decidir entre estas :
//<iframe width="560" height="315" src="https://www.youtube.com/embed/1d0Zf9sXlHk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<iframe width="560" height="315" src="https://www.youtube.com/embed/MVt32qoyhi0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<iframe width="560" height="315" src="https://www.youtube.com/embed/izmWT-22SBY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//Pero prefiero esta --><iframe width="560" height="315" src="https://www.youtube.com/embed/G4VmJcZR0Yg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
const urlPeliculas = "https://www.youtube.com/embed/G4VmJcZR0Yg"; //ejemplo
//<iframe width="560" height="315" src="https://www.youtube.com/embed/WBb3fojgW0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<iframe width="560" height="315" src="https://www.youtube.com/embed/PpKdAxc0pn4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<iframe width="560" height="315" src="https://www.youtube.com/embed/EjPAqY09fkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<iframe width="560" height="315" src="https://www.youtube.com/embed/n9xhJrPXop4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<iframe width="560" height="315" src="https://www.youtube.com/embed/mAHPVEC8Egk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
const urlSeries = "https://www.youtube.com/embed/mAHPVEC8Egk";


//1 . Funcion que muestra el video
const muestraVideo = () => {
    let privateFunction = (url, id) => {
        console.log("Dentro de la funcion privada");
        id.setAttribute("src", url);
    }
    return {
        publicFunction: (estaUrl, estaId) => {
            console.log("dentro de la funcion publica");
            privateFunction(estaUrl, estaId);
        }
    }
};


//2. Crando las Clases padre MUltimedia 
//Implementando Closures
class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
    }
    get url() {
        return this.getUrl();
    }
    setInicio() {
        console.log("Este es el setInicio de Multimedia");
        return `Este método es para realizar un cambio en la URL del video`;
    }
}

//3.Creando la clase hija Reproducir
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }
    //Método “playMultimedia”, llama a la función pública de la IIFE, enviando los atributos url y id.
    playMultimedia() {
        console.log("En la funcion playMultimedia");
        muestraVideo().publicFunction(this.url, this._id);
    }
    //Método “setInicio”, reciba y agregue el tiempo de inicio a la URL(etiqueta iframe). 
    //Con el método “setAttribute” modificar al final de la URL  “?start=${tiempo}”.
    setInicio(time) {
        console.log("Estoy en Reproductor >> setInicio");
        let urlTime = `${this.url}?start=${time}`;
        this._id.setAttribute("src", urlTime);
    }
}

// 4. Instanciar la clase hija pasando como argumento la url y el id para cada etiqueta iframe,
// crear tres instancias (música, película, serie)
let opMusica = new Reproductor(urlMusica, idMusica);
let opPeliculas = new Reproductor(urlPeliculas, idPeliculas);
let opSeries = new Reproductor(urlSeries, idSeries);

// 5. Invocar al método “playMultimedia” para cada instancia creada, 
opMusica.playMultimedia();
opPeliculas.playMultimedia();
opSeries.playMultimedia();

// 6. Utiliza el método “setInicio” para modificar el tiempo de inicio en alguna de las instancias creadas.
opSeries.setInicio(20);

