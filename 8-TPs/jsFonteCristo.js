/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{   
 	var numero;
 	var contador=1;
 	var TipoDeNumero;
 	numero=document.getElementById('numero').value;
 	numero=parseInt(numero);

 }


 	
function NumerosPares()
{
	

}


function NumerosImpares()
{
	alert("yahooo");

}
function NumerosDivisibles()
{
	alert("yes");

}
function VerificarPrimo()
{
alert("yes");
}
function NumerosPrimos()
{
   var NumeroIngresado;
   var numeroAnterior;
 
	NumeroIngresado=prompt("ingrese numero"); 
   	NumeroIngresado=parseInt(NumeroIngresado); 

   for(recorrido=NumeroIngresado-1;recorrido>1;recorrido--)
   {
   	 	for(numeroAnterior=recorrido-1;numeroAnterior>1;numeroAnterior--)
   	 	{

   	 	if(recorrido % numeroAnterior == 0)
   		{
   	 		break;
   	 	}
   		
   		}
   		
   	if(numeroAnterior == 1)
 	{
 		console.log("es primo"+recorrido);
 	}

	
 		 






}