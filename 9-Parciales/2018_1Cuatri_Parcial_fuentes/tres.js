function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;
	var resultado;

	precio= prompt("ingrese precio");
	porcentaje= prompt("ingrese porcentaje");

	descuento= (precio*porcentaje)/100;
	resultado= precio-descuento;


	document.getElementById('elPrecioFinal').value=(resultado);

}
