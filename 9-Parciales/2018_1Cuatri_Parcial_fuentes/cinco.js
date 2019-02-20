function mostrar()
{
var planeta;
	var mensaje="";
	
	planeta=prompt("Ingrese un planeta del sistema solar");
    
	switch(planeta)
{	
	case"tierra":
	mensaje="aca vivimos";
	break;
	

	case"mercurio":
	case"venus":
	case"marte":
	case"jupiter":
	mensaje="aca hace mas calor";
	break;


	case"saturno":
	case"urano":
	case"neptuno":
	case"pluton":
	mensaje="aca hace mas frio";
	break;
	default:
	mensaje="no es un planeta";

}  
	 if(mensaje!="")
	{
		alert(mensaje);
	}














}
