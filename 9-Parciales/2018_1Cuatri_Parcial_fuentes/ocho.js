function mostrar()
{
	var letra;
	var numero;
	var contadorNumeroPositivo=0;
	var acumuladorNumeroPositivo=0;
	var acumuladorNumeroNegativo=0;
	var numeroPar=0;
	var numeroImpar=0;
	var numerosCero=0;
	var flag=false;
	var maximoLetra;
	var maximoNumero;
	var minimoLetra;
	var minimoNumero;
	var respuesta="si";

	while(respuesta=="si")
	{
		letra=prompt("ingrese una letra");

		numero=prompt("ingrese numero entre -100 y 100");
		numero=parseInt(numero);
		while(numero<-100 || numero>100)
		{
			numero=prompt("Error! ingrese numero entre -100 y 100");
		}

		if(numero%2 ==0)
		{
			numeroPar++;
		}
		else
		{
			numeroImpar++;
		}

		//c) La cantidad de ceros. 
		if(numero== 0)
		{
			numerosCero++;
		}
		//d) El promedio de todos los números positivos ingresados. 

		if(numero>0)
		{
			
			acumuladorNumeroPositivo=acumuladorNumeroPositivo+numero;
			contadorNumeroPositivo++;
			
		
		}
		else
		{
			acumuladorNumeroNegativo=acumuladorNumeroNegativo+numero;
			
		}
		//f) El número y la letra del máximo y el mínimo.
		if( flag ==false || numero>maximoNumero)
		{
			maximoNumero=numero;
			maximoLetra=letra;
		
		}
		if(flag==false || numero<minimoNumero)
		{
			minimoNumero=numero;
			minimoLetra=letra;
			flag==true;
		}
		
		

		


		promedio=acumuladorNumeroPositivo/contadorNumeroPositivo;
		respuesta=prompt("desea continuar? si / no");
	}
	document.write("promedio es "+promedio);
	document.write("suma negativos "+acumuladorNumeroNegativo);
	document.write(" numeros pares "+numeroPar+" numeros impares "+numeroImpar);
	document.write("minimo número es "+minimoNumero+" y la letra "+minimoLetra);
	document.write("maximo numero es "+maximoNumero+" y la letra "+maximoLetra);

}
