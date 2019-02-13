/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{var largo;
var ancho;
var suma;
var alambre;

largo=Largo.value;
ancho=Ancho.value;

largo=parseInt(largo);
ancho=parseInt(ancho);

suma=largo+ancho;
alambre=suma*3;

alert("necesita : " +alambre+ " metros de alambre");

}
function Circulo () 
{ var ingreseRadio;
var radio;
var circunferencia;
var alambre;

ingreseRadio=Radio.value;

radio=ingreseRadio*2;
circunferencia= radio * 3.14;
alambre= circunferencia*3;

alert("necesita de alambre : "+alambre);
	
}
function Materiales () 
{
	var cemento;
	var cal;
	var cantidadCemento;
	var cantidadCal;

	cemento=Largo.value;
	cal=Ancho.value;

	cantidadCemento=cemento*2;
	cantidadCal=cal*3;

	alert("se necesita: " +cantidadCemento+ " bolsas de cemento y " +cantidadCal+ " bolsas de cal");
		
	
}