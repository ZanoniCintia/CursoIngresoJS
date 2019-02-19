function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje="";
switch(mesDelAño)
{
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case"Diciembre":
    mensaje="tiene 31 dias";
    break;

    case"Abril":
    case"Junio":
    case"Septiembre":
    case"Noviembre":
    mensaje="tiene 30 dias";
    break;  
    
    default:
    mensaje="tiene 28 dias";

}    
       if(mensaje!="")
    {  	alert(mensaje);
    }

          
//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN