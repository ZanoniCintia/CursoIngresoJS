function mostrar()
{
	var nota;
	var sexo;
	var promedio;
	var notaMasBaja;
	var sexoNotaMasBaja;
	var contador=0;
	var acumulador=0;
	var contadorVarones=0;
//nota=prompt("ingrese nota entre 1 y 10");
	while(contador < 5)
	{
		contador++;
		nota=prompt("ingrese nota entre 1 y 10");
		nota=parseInt(nota);

		while(nota <0 || nota >10)
		{
			alert("por favor ingrese una nota valida");
			nota=parseInt(nota);
		}

		sexo=prompt("ingrese sexo: f o m");
		
		while(sexo!=f || sexo!=m)
		{
			sexo=prompt("ingrese un sexo valido");
		}
	

if(contador ==1)
{
	notaMasBaja=nota;
	sexoNotaMasBaja=sexo;
}
else
{
	if(nota<notaMasBaja)
	{
		notaMasBaja=nota;
		sexoNotaMasBaja=sexo;
	}
}

if(sexo == "m" && nota>=6)
{
	contadorVarones=contadorVarones+1;
}

acumulador=acumulador+nota;

}

promedio=acumulador/5;

alert("el promedio de las notas en total es "+promedio);
alert("la nota mas baja es "+notaMasBaja+ "y el sexo es "+sexoNotaMasBaja);
alert("la cantidad de varones con nota mayor a seis es "+contadorVarones);

}
