function mostrar()
{

	var nota;
	var sexo;
	var contador=0;
	var promedio;
	var acumulador=0;
	var notaMasBaja;
	var notaBajaSexo;
	var contadorMasculino=0;

	

	while(contador<5)
	{
		contador++;
		
		nota=prompt("ingrese nota entre 0 y 10");
		nota=parseInt(nota);

		while( nota<0 || nota>10)
		{
			nota=prompt("ERROR, ingrese una nota valida");
			nota=parseInt(nota);			
		}

		sexo=prompt("ingrese sexo : f o m");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ERROR, ingrese un sexo valido (f o m)");
		}

	



		if(contador==1)
		{
			notaMasBaja=nota;
			notaBajaSexo=sexo;
		}
		else
		{
		 	if(nota<notaMasBaja)
			{ 
		 		notaMasBaja=nota;
		 		notaBajaSexo=sexo;
		 	}
		}


		if(sexo == "m" && nota>=6)
		{
		contadorMasculino=contadorMasculino+1;
		}

		acumulador=acumulador+nota;
	
	}

	

	promedio=acumulador/5;

	alert("La nota mas baja es "+notaMasBaja+" y el sexo es "+sexo);
	alert("el promedio es "+promedio);

}
