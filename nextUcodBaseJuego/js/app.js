function animacion() {
  function efecto1Titulo() {
    $("#titulo1").animate({color:"red"}, 1000, "linear", efecto2Titulo);
  };
  function efecto2Titulo() {
    $("#titulo1").animate({color:"white"}, 1000, "linear", efecto1Titulo);
  };

}

$(document).ready(function () {

  animacion();

});
