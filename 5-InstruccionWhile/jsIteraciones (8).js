function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';


	while(respuesta=="si")
	{

		numero=prompt("ingrese numero");
		contador=contador+1;
		numero=parseInt(numero);
		if(numero<0)
		{
			negativo=numero*negativo;

		}else
		{
			positivo=numero+positivo;
		}
		respuesta=prompt("ingrese si para continuar");
	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN