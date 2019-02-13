
function mostrar()
{

  var ingreseNombre;
  var segundoNombre;
  var ingreseEdad;
  var ingreseEdadDos;
  var suma;
  

  ingreseNombre=prompt("ingrese su nombre");
  ingreseEdad=prompt("ingrese edad");
  segundoNombre=prompt("ingrese un segundo nombre");
  ingreseEdadDos=prompt("ingrese edad");

  ingreseEdad=parseInt(ingreseEdad);
  ingreseEdadDos=parseInt(ingreseEdadDos);

  suma=ingreseEdad+ingreseEdadDos;


  alert("Ustedes son "+ingreseNombre+ " y " +segundoNombre+ "sus edades son "
    +segundaEdad+ " y " +ingreseEdadDos+ " la suma de sus edades es "+suma);


  
}
