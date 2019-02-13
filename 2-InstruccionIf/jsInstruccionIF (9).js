function mostrar()
	{   var boton;
		
		boton=FormIngreso.value;

		boton=Math.floor((Math.random() * 10) + 1);//Genero el número RANDOM entre 1 y 10 
		console.log(boton);

		alert(boton);

}//FIN DE LA FUNCIÓN