function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var contadorTempPar=0;
	var MarcaMaximo=0;
	var PesoMaximo=0;
	var PesoMinimo=0;
	var flag=false;
	var contadorTempBajoCero=0;
	var contador=0;
	var acumulador=0;
	var promedio;
	var respuesta="si";

	while(respuesta=="si")
	{
		marca=prompt("ingrese un marca");

		peso=prompt("ingrese peso entre 1 y 100kg");
		peso=parseInt(peso);
		while(peso<1 || peso>100)
		{
			peso=prompt("ERROR! ingrese peso entre 1 y 100kg");
		}

		temperatura=prompt("ingrese temperatura entre -30° y 30°");
		while(temperatura<-30 || temperatura>30)
		{
			temperatura=prompt("ERROR! ingrese temperatura entre 30° y -30°");
		}

		if(temperatura%2==0)
		{
			contadorTempPar=contadorTempPar+1;
		}

		if(flag==false || peso>PesoMaximo)
		{	
			MarcaMaximo=marca;
			PesoMaximo=peso;
		}
		if(flag==false || peso<PesoMinimo)
		{
			PesoMinimo=peso;
			flag=true;
		}
		if(temperatura<0)
		{
			contadorTempBajoCero=contadorTempBajoCero+1;
		}


		contador=contador+1;
		acumulador=acumulador+peso;
		





		respuesta=prompt("desea continuar? si/no");

	}

promedio=acumulador/contador;
document.write("temperaturas pares "+contadorTempPar+"<br>");
document.write(" marca del producto mas pesado "+MarcaMaximo+"<br>");
document.write("peso minimo es "+PesoMinimo+"<br>");
document.write("cantidad de productos bajo cero "+contadorTempBajoCero+"<br>");
document.write("el promedio de los pesos es "+promedio+"<br>")










}
