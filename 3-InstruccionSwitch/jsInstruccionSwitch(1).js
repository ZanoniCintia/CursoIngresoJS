function mostrar()
{
	//tomo la mesDelAño  
	var mesDelAño = document.getElementById('mes').value;
	var mensaje="";
	switch(mesDelAño)
	{
		case "Enero":	      
		      mensaje="que comiences bien el año";
		      break;	       
		case "Marzo":	      
		      mensaje="que comiences bien el año";
		      break;
		case "Julio":	      
		      mensaje="que comiences bien el año";
		      break;
		case "Diciembre":	      
		      mensaje="que comiences bien el año";
		      break;  

	}
	if(mensaje!="")
	{
		alert(mensaje);
	}
	

 }//FIN DE LA FUNCIÓN