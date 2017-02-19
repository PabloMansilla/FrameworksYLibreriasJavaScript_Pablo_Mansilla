function inicioTitulo() {
  $("#titulo1").switchClass("main-titulo","estilo-titulo",1000,"easeInOutBounce");
};
function finTitulo() {
  $("#titulo1").switchClass("estilo-titulo","main-titulo",1000,"easeInOutBounce");
};
function animacionImagen() {

}
function agregarImagen() {
for (var i = 0; i < 7; i++) {
  var caramelo = (Math.random()*10)
  switch (caramelo) {
    case (caramelo == 1):
     var  imagen = '<img src="image/1.png">';
    break;
    case (caramelo == 2):
      var  imagen = '<img src="image/2.png">';
    break;
    case (caramelo == 3):
      var imagen = '<img src="image/3.png">';
      break;
    case (caramelo == 4):
      var imagen = '<img src="image/4.png">';
      break;
      case (caramelo == 5):
       var  imagen = '<img src="image/1.png">';
      break;
      case (caramelo == 6):
       var  imagen = '<img src="image/1.png">';
      break;
      case (caramelo == 7):
       var  imagen = '<img src="image/1.png">';
      break;
      case (caramelo == 8):
       var  imagen = '<img src="image/1.png">';
      break;
    case (caramelo == 9):
      var imagen = '<img src="image/1.png">';
      break;
      case (caramelo == 10):
       var  imagen = '<img src="image/1.png">';
      break;
    default:
  }
  var fil1= {};
   fil1[i]=$("#fila1").prepend(imagen);

};
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
    agregarImagen();

  });

});
