/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var juego;

function comenzar()
{  //var juego;
   
   //var juego;
	juego=Math.floor((Math.random() * 3) + 1);

	console.log(juego + " (1-PIEDRA, 2-PAPEL, 3-TIJERA)");	//juego=Math.floor((Math.random() * 3) + 1);
	//console.log(juego);


}//FIN DE LA FUNCIÓN

function piedra()
{
    //alert("piedra" + juego);
	if(juego == 1){ // PIEDRA = PIEDRA
	 	alert("EMPATO");
	}else{
      	if (juego==2){ // PIEDRA = PAPEL
      		alert("PERDIO");
      	}else{
      		alert("GANO"); // PIEDRA = TIJERA
      	}
	}

}//FIN DE LA FUNCIÓN
function papel()
{   
	if(juego == 2){ // PAPEL = PAPEL
        alert("EMPATO");
    }else{ 
       	if(juego == 3){ // PAPEL = TIJERA
      	  	alert("PERDIO");
      	}else{ // PAPEL = PIEDRA
   	      alert("GANO");
        }
    }
}//FIN DE LA FUNCIÓN
function tijera()
{
	if(juego==3){
		alert("EMPATO"); // TIJERA = TIJERA
	}else{
	    if(juego==2){ // TIJERA = PAPEL
		    alert("GANO");
	    }else{
			alert("PERDIO"); //TIJERA = PIEDRA
	    }
	}
}//FIN DE LA FUNCIÓN