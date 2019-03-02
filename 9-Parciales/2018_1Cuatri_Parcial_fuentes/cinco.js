function mostrar()
/*cada habitacion de un hotel tiene un precio;hay promociones segun el tipo de pago,
si es con tarjeta visa un 10%, si es por paypal un 15%, por mercado pago
un 10%, efectivo un 20%,cualquier otro medio un 5 %.
si compraste el paquete "todoIncluido" y pagas con paypal se te suma un 10% al descuento.
si pagas en efectivo, tenes varias opciones, el paquete "soloDesayunos" te suma
un 10% al descuento, si el paquete es " todoIncluido" te suma un 15% y para
el resto de los paquetes no tiene descuento adicional.*/
{
	var planetas;
	var mensaje="";

	planetas=prompt("ingrese un planeta");

	switch(planetas)
	{
		case "tierra":
		mensaje="aca vivimos";
		break;

		case "mercurio":
		case "venus":
		mensaje="aca hace mas calor";
		break;

		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "pluton":
		mensaje="aca hace mas frio";
		break;

		default:
		mensaje="no es un planeta valido";


		
	
	}
	if(mensaje!="")
	{
		alert(mensaje);
	}
	
	


}

  














