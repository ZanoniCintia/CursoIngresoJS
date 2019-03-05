function mostrar()
{
	var animal;
	var peso;
	var temperatura;
	var contadorTemperaturasPar=0;
	var contadorNombrePesado=0;
	var contadorPesoMasPesado=0;
	var contadorTemperaturaPesado=0;
	var acumuladorPeso=0;
	var contadorPeso=0;
	var promedioPeso;
	var contadorTempBajoCero=0;
	var contadorPesoMaxBajoCero=0;
	var contadorPesoMinBajoCero=0;
	var respuesta="si";

	while(respuesta=="si")
	{
		animal=prompt("ingrese un animal");

		peso=prompt("ingrese peso entre 1 y 1000kg");
		peso=parseInt(peso);
		while(peso<1 || peso>1000)
		{
			peso=prompt("ERROR! ingrese un peso entre 1 y 100kg");
		}

		temperatura=prompt("ingrese temperatura entre -30° y 30°")
		temperatura=parseInt(temperatura);
		while(temperatura<-30 || temperatura>30)
		{
			temperatura=prompt("ERROR! ingrese temperatura entre-30° y 30°");

		}
		//a) La cantidad de temperaturas pares.
		if(temperatura%2==0)
		{
			contadorTemperaturasPar=contadorTemperaturasPar+1;
		}
		//b) El nombre y temperatura del animal más pesado
		if(animal==1 && peso==1 && temperatura==1)
		{
			contadorNombrePesado=animal;
			contadorPesoMasPesado=peso;
			contadorTemperaturaPesado=temperatura;
		} 
		else
		{
			if(peso>contadorPesoMasPesado)
			{
				contadorNombrePesado=animal;
				contadorPesoMasPesado=peso;
				contadorTemperaturaPesado=temperatura;
			}
		}
		
		
		
		//f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero
		if(temperatura<0 && peso==1)
		{ 
			contadorPesoMaxBajoCero=peso;

		}
		else
		{
			if(peso>contadorPesoMaxBajoCero)
			{
				contadorPesoMaxBajoCero=peso;
			}
			else
			{
				contadorPesoMinBajoCero=peso;
				if(peso<contadorPesoMinBajoCero)
				{
					contadorPesoMinBajoCero=peso;
				}
			}

			contadorPeso=contadorPeso+1;
			acumuladorPeso=acumuladorPeso+peso;

		}

		respuesta=prompt("desea continuar ingresando? si/no");
	}
	promedioPeso=acumuladorPeso/contadorPeso;
	document.write("temperaturas par "+contadorTemperaturasPar);
	document.write("nombre y temperatura del mas pesado "+contadorNombrePesado+contadorTemperaturaPesado);	
	document.write("el promedio de los pesos ingresados es "+promedioPeso);
	document.write("el peso maximo bajo cero es "+contadorPesoMaxBajoCero+" el minimo "+contadorPesoMinBajoCero);
}
