function mostrar()
{
	var letra;
	var numero;
	var contadorNumerosPar=0;
	var contadorNumerosImpar=0;
	var contadorCeros=0;
	var acumuladorPositivos=0;
	var contadorPositivos=0;
	var numeroMayor=0;
	var letraNumeroMayor=0;
	var acumuladorNegativos=0;
	var promedio;
	var respuesta="si";

	while(respuesta=="si")
	{
		letra=prompt("ingrese una letra");

		numero=prompt("ingrese un numero entre-100 y 100");
		numero=parseInt(numero);
		while(numero<-100 || numero>100)
		{
			numero=prompt("ingrese numero valido, entre -100 y 100");
		}

		if(numero%2==0)
		{
			contadorNumerosPar=contadorNumerosPar+1;
		}
		else
		{
			contadorNumerosImpar=contadorNumerosImpar+1;
		}

		if(numero==0)
		{
			contadorCeros=contadorCeros+1;
		}

		if(numero>0 && numero<=100)
		{
			contadorPositivos=contadorPositivos+1;
			acumuladorPositivos=acumuladorPositivos+numero;
		}
		else
		{   
			acumuladorNegativos=acumuladorNegativos+numero;

		}

		
		if(letra==1 && numero==1)
		{
			letraNumeroMayor=letra;
			numeroMayor=numero;
		}
		else
		{
			if(numero>numeroMayor)
			{
				letraNumeroMayor=letra;
				numeroMayor=numero;
			}
		}

		respuesta=prompt("desea continuar? si/no");
	}
promedio=acumuladorPositivos/contadorPositivos;

document.write("numeros par "+contadorNumerosPar );
document.write("numeros impar "+contadorNumerosImpar);
document.write("la cantidad de ceros es "+contadorCeros);
document.write("letra y numero mas alto "+letraNumeroMayor+numeroMayor);
document.write("el promedio de positivos es "+promedio);
document.write("la suma de numeros negativos es "+acumuladorNegativos);
}
