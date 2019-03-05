function mostrar()
{
	var nota;
	var sexo;
	var contadorNotaBaja=0;
	var contadorSexoNotaBaja=0;
	var contadorNotaMasculinos=0;
	var contador=0;
	var acumulador=0;

	while(contador<5)
	{
		
		contador=contador+1;
		nota=prompt("ingrese nota entre 1 y 10");
		nota=parseInt(nota);
		while(nota<1 || nota>10)
		{
			nota=prompt("ERROR, ingrese nota entre 1 y 10");
			nota=parseInt(nota);
		}

		sexo=prompt("ingrese sexo f/m");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ERROR,ingrese sexo f o m");
		}

		if(contador==1)
		{
			contadorNotaBaja=nota;
			contadorSexoNotaBaja=sexo;
		}
		else
		{
			if(nota<contadorNotaBaja)
			{
				contadorNotaBaja=nota;
				contadorSexoNotaBaja=sexo;
			}
		}
		if(sexo=="m" && nota>=6)
		{
			contadorNotaMasculinos=contadorNotaMasculinos+1;
		}





		acumulador=acumulador+nota;
		
	}
		
		promedio=acumulador/5;
		

		alert("el promedio es "+promedio);
		alert("nota mas baja es "+contadorNotaBaja+" y el sexo "+contadorSexoNotaBaja);
		alert("los masculinos con nota mayor a 6 son "+contadorNotaMasculinos);
}
