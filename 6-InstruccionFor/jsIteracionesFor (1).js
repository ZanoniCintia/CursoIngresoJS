function mostrar()
{	
	var contador;
	var contador=0;
	var numeroRandom;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var contador10=0;


	for(;contador<1000;)
	{ 
		numeroRandom=Math.floor((Math.random() * 10) + 1);
		//console.log(numeroRandom);
		contador++;

		switch(numeroRandom)
		{
			case 1:
			contador1++;
			break;

			case 2:
			contador2++;
			break;

			case 3:
			contador3++;
			break;

			case 4:
			contador4++;
			break;

			case 5:
			contador5++;
			break;

			case 6:
			contador6++;
			break;

			case 7:
			porc=contador7/contador*100
			if(porc>6)
			{
				continue;
				contador--;
			}
			contador7++;
			break;

			case 8:
			contador8++;
			break;

			case 9:
			contador9++;
			break;

			case 10:
			contador10++;
			break;
		}


		
	}
		console.log("el numero uno  salio "+contador1+" y "+contador1/contador*100+"%");
		console.log("el numero dos salio "+contador2 +" y "+contador2/contador*100+"%" );
		console.log("el numero tres salio "+contador3+" y "+contador3/contador*100+"%");
		console.log("el numero cuatro salio "+contador4+ " y "+contador4/contador*100+"%");
		console.log("el numero cinco salio "+contador5 +" y "+contador5/contador*100+"%");
		console.log("el numero seis salio "+contador6 +" y "+contador6/contador*100+"%");
		console.log("el numero siete salio "+contador7 +" y "+contador7/contador*100+"%");
		console.log("el numero ocho salio "+contador8+" y "+contador8/contador*100+"%");
		console.log("el numero nueve salio "+contador9+" y "+contador9/contador*100+"%");
		console.log("el numero diez salio "+contador10 +" y "+contador10/contador*100+"%");

}








/* var contador;

 for(variable;condicion;)

 for(contador=0;contador<10;contador++)
 {
	console.log(contador);

 }
 */