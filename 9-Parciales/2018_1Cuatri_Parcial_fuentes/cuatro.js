function mostrar()
{
  var numero1;
  var numero2;
  var numero3;
  var numero4;
  var total;
  var porcentaje;
  var descuento;
  var aumento;
  var precioFinal;

  numero1=parseInt(numero1);
  numero2=parseInt(numero2);
  numero3=parseInt(numero3);
  numero4=parseInt(numero4);

  numero1=prompt("ingrese primer numero");
  numero2=prompt("ingrese segundo numero ");
  numero3=prompt("ingrese tercer numero");
  numero4=prompt("ingrese cuarto numero");

  total=numero1+numero2+numero3+numero4;

  if(total>100)
  {
  	porcentaje=0.10
  }
  else{
  
 	 if(total>50)
  		{
      		porcentaje=0.05;
  		}
  	 }
    else
    {  
 	if(total<50)
  		{
  		porcentaje=0.15;
  		alert("la suma es "+suma+ "el aumento del 15 % es "+aumento);
  		}
  	  }
  

   	precioFinal=total*porcentaje;
   	descuento=total-precioFinal;
   	aumento=total+precioFinal;
 

 	
    alert("la suma es "+suma+ "el descuento es "+descuento);













}