function mostrar()
{
	var letra;
	var numero;
	var contadorPares=0;
	var contadorImpares=0;
	var contadorCeros=0;
	var contadorPositivos=0;
	var acumuladorPositivos=0;
	var acumuladorNegativos=0;
	var promedio;
	var flag=false;
	var maximoNumero=0;
	var maximoNumeroLetra=0;
	var minimoNumero=0;
	var minimoNumeroLetra=0;
	var respuesta="si";

	while(respuesta =="si")
	{
		letra=prompt("ingrese letra");

		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		while(numero<-100 || numero>100)
		{
			numero=prompt("ERROR! ingrese numero entre -100 y 100");
		}

		if(numero%2==0)
		{
			contadorPares=contadorPares+1;
		}
		else
		{
			contadorImpares=contadorImpares+1;
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
		if(flag==false || numero>maximoNumero)
		{
			maximoNumero=numero;
			maximoNumeroLetra=letra;
		}
		if(flag==false || numero<minimoNumero)
		{
			minimoNumero=numero;
			minimoNumeroLetra=letra;
			flag=true;
		}

		respuesta=prompt("desea continuar? si/no")
	}	

		promedio=acumuladorPositivos/contadorPositivos;


		document.write("la cantidad de numeros pares es "+contadorPares+"<br>");
		document.write("la cantidad de numeros impares es "+contadorImpares+"<br>");
		document.write("la cantidad de ceros ingresados es "+contadorCeros+"<br>");
		document.write("el promedio de todos los numeros es "+promedio+"<br>");
		document.write("la suma de todos los numeros negativos es "+acumuladorNegativos+"<br>");
		document.write("el maximo ingresado es "+maximoNumero+maximoNumeroLetra+"<br>");
		document.write("el minimo ingresado es "+minimoNumero+minimoNumeroLetra+"<br>");



}
