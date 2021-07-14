<template>
  <div id="app" class="container">
    <h1 class="text-center">Tabla de Usuarios</h1>
    <table class="table table-striped table-bordered mt-4">
      <thead class="thead-dark">
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>RUN</th>
          <th>nacimiento</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        <!-- Carga de datos de las personas -->
        <tr v-for="(persona, index) in personas" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ persona.nombre }}</td>
          <td>{{ persona.apellido }}</td>
          <td>{{ persona.run }}</td>
          <td>{{ persona.nacimiento }}</td>
          <td>{{ persona.edad }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personas: [
        {
          id: 1,
          nombre: "Carlos 1",
          apellido: "Gibbs",
          run: "18.223.444-1",
          nacimiento: "17-01-1989",
          edad: 32,
        },
        {
          id: 2,
          nombre: "Marcela",
          apellido: "RetamalL",
          run: "11.123.425-6",
          nacimiento: "10-03-1979",
          edad: 42,
        },
        {
          id: 3,
          nombre: "Scarlett",
          apellido: "Witting",
          run: "7.998.789-5",
          nacimiento: "23-5-1967",
          edad: 54,
        },
        {
          id: 4,
          nombre: "Karin",
          apellido: "Fernandez",
          run: "18.887.662-K",
          nacimiento: "4-11-1989",
          edad: 32,
        },
        {
          id: 5,
          nombre: "Ana",
          apellido: "Sepulveda",
          run: "14.441.281-0",
          nacimiento: "12-8-1992",
          edad: 29,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  color: darkslateblue;
  margin-top: 60px;
}

body {
  font-family: "Roboto", sans-serif;
  color: darkslateblue;
}

div {
  margin: 50px 20px;
}

.container {
  width: 100vw;
  margin-bottom: 20px;
  padding: 40px 10%;
}
</style>
