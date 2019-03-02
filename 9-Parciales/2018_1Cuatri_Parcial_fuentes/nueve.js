function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var contadorTemperaturaPar=0;
	var maxpeso;
	var minPeso;
	var flagmaxpeso=false;
	var maxmarca;
	var contadorTemperaturaMenosCero=0;
	var promedioPeso;
	var contadorPeso=0;
	var acumuladorPeso=0;
	var respuesta="s";

	while(respuesta == "s")
	{ 
		marca=prompt("ingrese marca");
		peso=prompt("ingrese peso");
		/*validacion:*/ 
		while(peso<1 || peso>100)
		{
			peso=prompt("reingrese peso");
		}

		temperatura=prompt("ingrese temperatura");
		/*validacion*/
		while(temperatura <-30 || temperatura>30)
		{
			temperatura=prompt("reingrese temperatura");

		}
		//puntoA:
		if(temperatura%2 ==0)//si la temperatura es par
		{
			contadorTemperaturaPar++;
		}
		//punto B:
		if(flagmaxpeso== false || peso>maxpeso)
		{
			maxmarca=marca;
			maxpeso=peso;
			
		}
		if(flagmaxpeso== false || peso<minPeso)//calcular minimo
		{
			maxmarca=marca;
			maxpeso=peso;
			flagmaxpeso=true;
		}
		//punto c:cantidad de productos menos a 0 grado
		if(temperatura<0)
		{
			contadorTemperaturaMenosCero++
		}
		contadorPeso++;
		acumuladorPeso=acumuladorPeso+peso;



		respuesta=prompt("desea ingresar otro producto?s/n");
	}
	promedio=acumuladorPeso/contadorPeso;
	document.write(contadorTemperaturaPar);
	document.write(+maxmarca);
	document.write()
	

	
















}
