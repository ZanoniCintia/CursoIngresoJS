function mostrar()
{
	var nota;
	var sexo;
	var contadorNotaBaja=0;
	var contadorSexoNotaBaja=0;
	var contadorMasculino=0;
	var acumulador=0;
	var contador=0;

	while(contador<5)
	{
		contador=contador+1;

		nota=prompt("ingrese nota entre 1 y 10");
		nota=parseInt(nota);
		while(nota<0 || nota>10)
		{
			nota=prompt("ingrese nota valida");
		}

		sexo=prompt("ingrese sexo");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ingrese sexo valido");
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

		if(sexo=="M" && nota>=6)
		{
			contadorMasculino=contadorMasculino+1;
		}

		acumulador=acumulador+nota;

	}
	promedio=acumulador/5;


alert("la nota mas baja y el sexo es "+contadorNotaBaja+contadorSexoNotaBaja);
alert("cantidad de masculinos con nota mayor a 6 es "+contadorMasculino);
alert("promedio es "+promedio);

















}

