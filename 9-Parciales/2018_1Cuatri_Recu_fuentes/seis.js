function mostrar()
{	 
	var nota;
	var sexo;
	var contador=0;

	while(contador<5)
	{
		contador=contador+1;
		
		nota=parseInt(nota);
		nota=prompt("ingrese nota entre 1 y 10");
		while(nota<1 || nota>10)
		{
			nota=prompt("Error! ingrese nota entre 1 y 10");
		}

		sexo=("ingrese sexo f / m");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Error! ingrese sexo f / m");
		}


	}



}
