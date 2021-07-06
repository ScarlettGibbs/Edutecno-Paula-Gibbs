$(document).ready(function () {

  $(".carousel").carousel({
    interval: 3000,
    //pause: false,
  });

  //Esconde/muestra el texto
  $("p").dblclick(function () {
    $(this).hide("slow");
  });

  //muestra el parrafo
  $("p").dblclick(function () {
    $(this).show("slow");
  });

  // Muestra en los iconoes la descripcion al pasar el mouse por encima
  $('[data-toggle="popover"]').popover();

});
