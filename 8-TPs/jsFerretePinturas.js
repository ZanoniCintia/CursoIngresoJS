/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{   var ingresetemperatura;
	var conversor;

	ingresetemperatura=Temperatura.value;
    ingresetemperatura=parseInt(ingresetemperatura);

    conversor=ingresetemperatura/32;

    alert(+ingresetemperatura+" Fahrenheit equivalen a "+conversor+" grados centigrados ");


}

function CentigradosFahrenheit () 
{
	var ingresetemperatura;
	var conversor;

	ingresetemperatura=Temperatura.value;
	ingresetemperatura=parseInt(ingresetemperatura);

	conversor=ingresetemperatura*32;

	alert(+ingresetemperatura+" centigrados equivalen a "+conversor+" grados Fahrenheit");
}
