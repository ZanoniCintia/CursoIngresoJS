function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var numero;
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=pompt("ingrese numero");
		if(contador==0)
		{
			maximo=numero;
			minimo=numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
		}
		if(numero>maximo)
		{
			maximo=numero;
		}
		if(numero<minimo)
		{
			minimo=numero;
		}
		contador=contador+1;
	}



respuesta=prompt("desea ingresar otro numero?");
minimo.value=minimo;
maximo.value=maximo;



}//FIN DE LA FUNCIÓN