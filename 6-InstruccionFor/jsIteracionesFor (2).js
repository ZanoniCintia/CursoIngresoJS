function mostrar()
{
   var NumeroIngresado;
   var numeroAnterior;
   var acumulador;

	NumeroIngresado=prompt("ingrese numero"); 
   	NumeroIngresado=parseInt(NumeroIngresado); 

   for(recorrido=NumeroIngresado-1;recorrido>1;recorrido--)
   {
   	 	for(numeroAnterior=recorrido-1;numeroAnterior>0;numeroAnterior--)
   	 	{

   	 		if(NumeroIngresado % numeroAnterior == 0)
   			{
   	 			acumulador=acumulador+numeroAnterior;
   	 		}
   		
   		}
   		
   	if(acumulador== NumeroIngresado)
 	{
 		console.log(NumeroIngresado+"numero perfecto");
 	}

	
 		 

	}
 	


























  /* NumeroIngresado=prompt("ingrese numero"); 
   NumeroIngresado=parseInt(NumeroIngresado); 

   for(numeroAnterior=NumeroIngresado-1;numeroAnterior>1;numeroAnterior--)
   {
   	 
   	 if(NumeroIngresado % numeroAnterior == 0)
   	 {
   	 	break;
   	 }
   }
 	




 	if(numeroAnterior == 1)
 	{
 		console.log("es primo");
 	}else
 	{
 		console.log("no es primo");
 	}*/
}