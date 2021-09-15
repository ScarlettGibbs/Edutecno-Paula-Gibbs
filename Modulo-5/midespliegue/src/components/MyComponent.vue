<template>
  <div>
    <h2>Ingrese su Pelicula favorita</h2>
    <label for="pelicula">Pelicula Favorita</label>
    <input type="text" v-model="pelicula">
    <button @click="agregarPelicula"> Agregar </button>
    <br><hr><br>
    <ul>
        <li v-for="(pelicula, index) in peliculas" :key="index">
            {{(index+1)}} - {{pelicula}}
        </li>
    </ul>
    <br>
  </div>
</template>

<script>
export default {
    name: 'MyComponent',
    data(){
        return{
            // inicializando las variables utilizadas
            peliculas:[],
            pelicula:""
        }
    },
    methods: {
        //agregando la pelicula a la lista de peliculas
        agregarPelicula(){
            this.peliculas.push(this.pelicula)
        }
    }
};
</script>

<style scoped>
div{
    margin: 20%, 10%;
    color: cadetblue;
    text-align: center;
    font-size: medium;
}
h2{
    margin: 10px;
}
button{
    margin: 10px;
    background-color: darkslategray;
    color: lemonchiffon;
}
</style>
