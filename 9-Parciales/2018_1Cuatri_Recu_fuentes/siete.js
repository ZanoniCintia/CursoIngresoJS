function mostrar()
{ 
	var nota;
	var sexo;
	var contador=0;
	var acumulador=0;
	var promedio;
	var flag=false;
	var notaMasBaja=0;
	var sexoNotaMasBaja=0;
	var contadorMasculino=0;

	while(contador<5)
	{	
		contador=contador+1;

		nota=prompt("ingrese nota entre 1 y 10");
		nota=parseInt(nota);
		while(nota<1 || nota>10)
		{
			nota=prompt("ERROR! ingrese nota entre 1 y 10");
		}

		sexo=prompt("ingrese sexo f/m");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ERROR! ingrese sexo f/m");
		}

		if(flag==false || nota<notaMasBaja)
		{
			notaMasBaja=nota;
			sexoNotaMasBaja=sexo;
			flag=true;
		}
		

		if(sexo=="m" && nota>=6)
		{
			contadorMasculino=contadorMasculino+1;
		}



		acumulador=acumulador+nota;
	}


	promedio=acumulador/contador;

alert(promedio);
alert(notaMasBaja+sexoNotaMasBaja);
alert(contadorMasculino);









}

