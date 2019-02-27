function mostrar()
{
  var primerNumero;
  var segundoNumero;

  primerNumero=prompt("ingrese un numero");
  segundoNumero=prompt("ingrese otro numero");

  if(primerNumero == segundoNumero)
  {
    alert(primerNumero+segundoNumero);
  }
  else
  { primerNumero=parseInt(primerNumero);
    segundoNumero=parseInt(segundoNumero);

    if(primerNumero > segundoNumero)
    {
      alert(primerNumero-segundoNumero);
    }else
      {
        if(primerNumero < segundoNumero)
        { 
          primerNumero=parseInt(primerNumero);
          segundoNumero=parseInt(segundoNumero);
          suma=primerNumero+segundoNumero;
          alert(suma);

        }
        if(suma>120)
        {
          alert("la suma es "+suma+" y es mayor a 120");
        }
      }

  }











}