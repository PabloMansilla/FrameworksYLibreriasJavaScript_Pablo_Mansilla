function inicioTitulo() {
  $("#titulo1").switchClass("main-titulo","estilo-titulo",1000,"easeInOutBounce");
};
function finTitulo() {
  $("#titulo1").switchClass("estilo-titulo","main-titulo",1000,"easeInOutBounce");
};


function finJuego() {


  $("#tablaMarcadores").switchClass("panel-score","panel-2-score",1000,"easeInOutBounce");
  $("#tablero").switchClass("panel-tablero","panel-2-tablero",1000,"easeInOutBounce");
  $("#time2").switchClass("time","tiempo2",1000,"easeOutBounce");

  //jQuery('h1').prependTo('#tablaMarcadores').attr("id","finish").addclass("termin");

  $( "#tablaMarcadores").prepend('<h1 id="finish" class="termin">Juego Terminado</h1>');

  //$("#finish").append("Juego Terminado");

};

$(document).ready(function () {

  var myVar = setInterval(function() {inicioTitulo(), finTitulo() }, 1000);


  $("#boton1").click(function () {

  $('.timer').startTimer({
  onComplete: function () {
    finJuego();
  }
});

  });
});
