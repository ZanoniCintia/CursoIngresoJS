
function mostrar()
{
  var ancho;
  var largo;
  var perimetro;
  var resultado;

  ancho=prompt("ingrese ancho");
  largo=prompt("ingrese largo");

  ancho=parseInt(ancho);
  largo=parseInt(largo);

  perimetro=ancho+largo;
  resultado=perimetro*2;

  alert("el perimetro es "+resultado);

}
