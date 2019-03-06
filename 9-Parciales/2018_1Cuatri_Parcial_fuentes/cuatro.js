function mostrar()
{
  var numeroUno;
  var numeroDos;

  numeroUno=prompt("ingrese un numero");
  numeroUno=parseInt(numeroUno);

  numeroDos=prompt("ingrese otro numero");
  numeroDos=parseInt(numeroDos);

  if(numeroUno == numeroDos)
  {
    alert(numeroUno+""+numeroDos);
  }
   else
   {
      if(numeroUno>numeroDos)
      {
        alert(numeroUno- numeroDos);
      }
      else
      {
        if(numeroUno<numeroDos)
        { 
          suma=numeroUno+numeroDos;
          alert(suma);
        }
      }
      if(suma>10)
      {
        alert("la suma es "+suma+" y supero el 10");
      }
   }



  









}