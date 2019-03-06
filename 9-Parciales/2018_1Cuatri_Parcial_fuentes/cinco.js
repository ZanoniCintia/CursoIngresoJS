function mostrar()

{
	var planeta;
	var mensaje="";

	planeta=prompt("ingrese un planeta");
	
	switch(planeta)
	{
		case "tierra":
		mensaje="aca vivimos";
		break;

		case "venus":
		case "mercurio":
		mensaje="aca hace mas calor";
		break;

		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "pluton":
		case "neptuno":
		mensaje="aca hace mas frio";
		break;

		default:
		mensaje="no es un planeta valido";
		break;
	}

	if(mensaje!="")
	{
		alert(mensaje);
	}
	

}

  














