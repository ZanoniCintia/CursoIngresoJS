function mostrar()
{
 var primernumero;
 var segundonumero;

 primernumero= prompt("ingrese primer numero");
 segundonumero= prompt("ingrese segundo numero");

 if (primernumero==segundonumero) 
	{
	    alert(primernumero+segundonumero);
	}
	else{
		primernumero = parseInt(primernumero);
		segundonumero = parseInt(segundonumero);


	    if(primernumero > segundonumero)
	    {
	      	alert(primernumero-segundonumero);
	    }
	    else{
	    	alert(primernumero+segundonumero);
	    	if(primernumero+segundonumero >=10)
		    {
		    	alert("la suma es " +(primernumero+segundonumero)+" y supero el 10");
		    }
	    }	
	}







}
