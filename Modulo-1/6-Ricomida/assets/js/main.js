$(document).ready(function () {
  // Activa Carousel
  //$("#myCarousel").carousel();

  // intervalo de T° muestra cada grupo de imagenes
  $(".carousel").carousel({
    interval: 2000,
    pause: false,
  });


  // desaparece/aparecel los elementos de las card
  //al hacer click en los titulos
  $(".card-title").click(function () {
    $(".card-img-top").toggle("slow");
    $(".card-text").toggle("slow");
  });

// cambiar el texto de color
  $("h2").dblclick(function () {
    $(this).css({
      color: "red",
    });
  });

  // mensaje al presionar enviar email
  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente");
  });

  //para desplegar leyenda en los botones
  $('[data-toggle="tooltip"]').tooltip();
});
