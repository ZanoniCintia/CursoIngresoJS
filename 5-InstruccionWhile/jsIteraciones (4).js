function mostrar()
{

	var Numero = prompt("ingrese un número entre 0 y 9 inclusive");


	while(Numero<0 || Numero>9)

		{ 
			Numero=prompt("ingrese otro numero entre o y 9");
			
		}
    document.getElementById('Numero').value=Numero;

}//FIN DE LA FUNCIÓN