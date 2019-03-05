function mostrar()
{
  var primerNumero;
  var segundoNumero;
  var suma;

  primerNumero=prompt("ingrese un numero");
  segundoNumero=prompt("ingrese otro numero");

  primerNumero=parseInt(primerNumero);
  segundoNumero=parseInt(segundoNumero);

  if(primerNumero==segundoNumero)
  {
    alert(primerNumero+""+segundoNumero);
  }
  else
  { 
    if(primerNumero>segundoNumero)
    {
       alert(primerNumero- segundoNumero);

    }
    else
    if(primerNumero<segundoNumero)
    {
      suma=primerNumero+segundoNumero;
      alert(suma);
    }
  }
  if(suma>10)
  {
    alert("la suma es "+suma+" y es mayor a diez");
  }



  









}