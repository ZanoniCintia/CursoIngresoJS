function mostrar()
{
var precio;
var porcentaje;
var descuento;
var resultado;

precio=prompt("ingrese precio");
porcentaje=prompt("ingrese porcentaje");

porcentaje=precio*porcentaje/100;
descuento=precio-porcentaje;

document.getElementById('elPrecioFinal').value=descuento;

}
