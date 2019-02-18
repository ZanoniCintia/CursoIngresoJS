var juego;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 juego=Math.floor((Math.random() * 3) + 1);

	console.log(juego);	



}//FIN DE LA FUNCIÓN
function piedra()
{
    //alert("piedra" + juego);
	if(juego == 1){ // PIEDRA = PIEDRA
	 	alert("EMPATO");
	 	ContadorDeEmpates = ContadorDeEmpates + 1;
	 	mostrarResultado();
	}else{
      	if (juego==2){ // PIEDRA = PAPEL
      		alert("PERDIO");
      		ContadorDePerdidas = ContadorDePerdidas +1;
      		mostrarResultado();

      	}else{
      		alert("GANO"); // PIEDRA = TIJERA
      		ContadorDeGanadas = ContadorDeGanadas +1;
      		mostrarResultado();
      	}
	}

}//FIN DE LA FUNCIÓN
	
function papel()
{
  if(juego == 2){ // PAPEL = PAPEL
        alert("EMPATO");
        ContadorDeEmpates = ContadorDeEmpates + 1;
        mostrarResultado();
    }else{ 
       	if(juego == 3){ // PAPEL = TIJERA
      	  	alert("PERDIO");
      	  	ContadorDePerdidas = ContadorDePerdidas +1;
      	  	mostrarResultado();
      	}else{ // PAPEL = PIEDRA
   	      alert("GANO");
   	      ContadorDeGanadas = ContadorDeGanadas +1;
   	      mostrarResultado();
        }
    }



}//FIN DE LA FUNCIÓN
function tijera()
{  
	if(juego==3){
		alert("EMPATO"); // TIJERA = TIJERA
		ContadorDeEmpates = ContadorDeEmpates + 1;
		mostrarResultado();
	}else{
	    if(juego==2){ // TIJERA = PAPEL
		    alert("GANO");
		    ContadorDeGanadas = ContadorDeGanadas +1;
		    mostrarResultado();
	    }else{
			alert("PERDIO");
			ContadorDePerdidas = ContadorDePerdidas +1; //TIJERA = PIEDRA
			mostrarResultado();
	    }
	}

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
      ganadas.value= ContadorDeGanadas;
      perdidas.value= ContadorDePerdidas;
      empatadas.value= ContadorDeEmpates;



}