
function mostrar()
{

  var ancho;
  var largo;
  var lados;
  var perimetro;
  

  ancho=prompt("ingrese ancho");
  largo=prompt("ingrese largo");

  ancho= parseInt(ancho);
  largo= parseInt(largo);

  lados=ancho+largo;
  perimetro=lados*2;

  alert("perimetro: "+perimetro);


  
}
