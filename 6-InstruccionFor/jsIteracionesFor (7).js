function mostrar()
{
	var numeroIngreso;
	var incremento=1;
	var divisor;

	numeroIngreso=prompt("ingrese un numero");
	numeroIngreso=parseInt(numeroIngreso);
	

	for(contador=0;incremento<=numeroIngreso;incremento++)
	{
		divisor=numeroIngreso%incremento;

		if(divisor==0)
		{
			alert(incremento);
			contador=contador+1;
		}
	}

	alert("la cantidad de numero divisores :"+contador);


}//FIN DE LA FUNCIÓN