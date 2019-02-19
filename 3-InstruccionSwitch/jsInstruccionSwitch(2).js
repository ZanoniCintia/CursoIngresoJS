function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje=""

switch(mesDelAño)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "junio":
        mensaje="Falta para el invierno.";
        break;

        case "julio":
        case "Agosto":
        mensaje="Abrigate que hace frio.";
        break;
        default:
        mensaje="Ya pasamos el frio, ahora calor!!!"
    }
	
	{   if(mensaje!="")
		alert(mensaje);
	}




}//FIN DE LA FUNCIÓN