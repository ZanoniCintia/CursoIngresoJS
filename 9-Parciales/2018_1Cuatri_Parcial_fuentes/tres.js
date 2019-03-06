function mostrar()
{
	var precio;
	var porcentaje;
	var calculo;
	var descuento;

	precio=prompt("ingrese precio");
	porcentaje=prompt("ingrese porcentaje de descuento");

	calculo=(precio*porcentaje)/100;
	descuento=precio - calculo;

	document.getElementById('elPrecioFinal').value=descuento;

}
