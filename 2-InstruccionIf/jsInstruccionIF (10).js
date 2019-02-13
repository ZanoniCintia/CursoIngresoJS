function mostrar()
//Genero el número RANDOM entre 1 y 10 
		{ var boton;
		boton=FormIngreso.value;

		boton=Math.floor((Math.random() * 10) + 1);
		console.log(boton);

		if(boton>8)	
			{ alert("EXCELENTE");
	     }
	else
		{if(boton>4 )
			alert("aprobo");}
	
	if(boton<=4)
	{alert("vamos,la proxima se puede");}		


	}//FIN DE LA FUNCIÓN