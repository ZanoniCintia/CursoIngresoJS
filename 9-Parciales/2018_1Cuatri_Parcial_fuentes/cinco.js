function mostrar()
/*cada habitacion de un hotel tiene un precio;hay promociones segun el tipo de pago,
si es con tarjeta visa un 10%, si es por paypal un 15%, por mercado pago
un 10%, efectivo un 20%,cualquier otro medio un 5 %.
si compraste el paquete "todoIncluido" y pagas con paypal se te suma un 10% al descuento.
si pagas en efectivo, tenes varias opciones, el paquete "soloDesayunos" te suma
un 10% al descuento, si el paquete es " todoIncluido" te suma un 15% y para
el resto de los paquetes no tiene descuento adicional.*/
{
  var precio;
  var paquete;
  var medioDePago;
  var descuento;

  precio=prompt("ingrese precio");
  precio=parseInt(precio);

  medioDePago=prompt("ingrese medio de pago: visa, paypal, mercado pago, efectivo,otro");

switch(medioDePago)
{	
	case "visa":
	case "mercadopago":
	descuento=precio*0.90;
	alert("el precio es "+descuento);

	case"paypal":
	 
	 switch(paquete)
	 {
	 	
	 }


	


	


}

  













}
