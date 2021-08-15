$(document).ready(function () {
  console.log("El documento esta listo");

  /*
    $("#parrafo2").hide();
    
    $("#parrafoEventoClick").click(function(){
        $(this).hide();

    });

    $('.cambiarcolores').click(function(){
        $(this).css('color','blue');
        $(this).css('background-color','pink');
        $(this).css('font-size','40px');
    });
    */

  $("#botonIndicadores").click(function () {
    $("tasaDesempleo").text(".... CARGANDO");
    $.ajax({
      type: "GET",
      url: "https://mindicador.cl/api",

      dataType: "JSON",
      success: function (data) {
        console.log("Consumiendo la API");
        console.log(data);
        // sacando la fecha de los indicadores a Mostrar
        let estaFecha = data.fecha.slice(0, 10);
        estaFecha = estaFecha.slice(9,10) + " - " + estaFecha.slice(6,7) + " - " + estaFecha.slice(0,4)
        //Los Indicadores para mostrar
        let valorTasaDesempleo = data.tasa_desempleo.nombre + " :  "  + data.tasa_desempleo.valor  + "%    -- " + data.tasa_desempleo.fecha.slice(0, 10);
        let valorDolar = data.dolar.nombre + " :  $ " + data.dolar.valor   + "  --  " + data.dolar.fecha.slice(0,10);
        let valorEuro = data.euro.nombre + "  :  $ " + data.euro.valor   + " -- " + data.euro.fecha.slice(0,10);
        let valorCobreLibra = data.libra_cobre.nombre +" en USD  :  $ " + data.libra_cobre.valor + "  -- " + data.libra_cobre.fecha.slice(0,10);
        
        console.log(estaFecha);
        console.log(valorTasaDesempleo);
        console.log(valorDolar);
        console.log(valorEuro);
        console.log(valorCobreLibra);

        $('p').css('color','blue');
        $('p').css('font-size','24px');


        $("#estaFecha").text("Fecha indicadores :  " + estaFecha);
        $("#tasaDesempleo").text( valorTasaDesempleo);
        $(".dolar").text(valorDolar);
        $(".euro").text(valorEuro);
        $(".cobre").text(valorCobreLibra);
      }, //FIN de la funcion
      error: function () {
        alert("ERROR AL CONSUMIR API");
      },
    });
  });
}); //fun document.ready

