/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numerouno;
	var numerodos;
	var numerotres;
	var resultado;

	numerouno=PrecioUno.value;
	numerodos=PrecioDos.value;
	numerotres=PrecioTres.value;


	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);
	numerotres=parseInt(numerotres);
    
    resultado=numerouno+numerodos+numerotres; 

    alert("la suma es "+resultado);


}
function Promedio ()

{var numerouno;
var numerodos;
var numerotres;
var resultado;


numerouno=PrecioUno.value;
numerodos=PrecioDos.value;
numerotres=PrecioTres.value;

numerouno=parseInt(numerouno);
numerodos=parseInt(numerodos);
numerotres=parseInt(numerotres);

resultado=numerouno+numerodos+numerotres;

alert("el promedio es : "+resultado/3);
	
}
function PrecioFinal () 
{
	var numerouno;
	var numerodos;
	var numerotres;
	var suma;
	var porcentaje;
	var final;

	numerouno=PrecioUno.value;
	numerodos=PrecioDos.value;
	numerotres=PrecioTres.value;

	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);
	numerotres=parseInt(numerotres);

	suma=numerouno+numerodos+numerotres;
	porcentaje= suma*0.21;
	final=suma+porcentaje;

	alert("el precio final es : "+final);


}
