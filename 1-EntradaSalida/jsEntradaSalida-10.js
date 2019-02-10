/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarDescuento()

{  
 var ingreseimporte;
 var porcentaje;
 var descuento;


	ingreseimporte=importe.value;

	ingreseimporte= parseInt(ingreseimporte);

	porcentaje= ingreseimporte*0.25;
	descuento= ingreseimporte-porcentaje;

	document.getElementById('resultado').value=descuento;

	
}
