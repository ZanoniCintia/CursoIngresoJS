/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{	 	
	 	var cantidad;
	 	var marca;
	 	var PrecioDescuento;
	 	var Precio;
	 	var Porcentaje;
	 	var Descuento;
	 	var impuesto;
	 	

	 	cantidad=Cantidad.value;
	 	marca = Marca.value;
	 	Precio = parseInt(Precio);
	 	cantidad=parseInt(cantidad);
	 	Porcentaje=0;
	 	Precio = 35;
	 	//PrecioDescuento=precioDescuento.value;
		PrecioDescuento=parseInt(PrecioDescuento);
	 	//alert("Hola");

	 	

	 	if(cantidad>=6){
	      	Porcentaje = 0.5;
	 	}else{
	 	   	if(cantidad==5){ 
	 			if(marca=="ArgentinaLuz"){
	      			Porcentaje = 0.4;
	 			}
	    	}else{
	      		Porcentaje = 0.3;
	      	}
	       	if(cantidad==4){
	    		if(marca== "ArgentinaLuz" || marca== "FelipeLamparas"){         		
	    			Porcentaje = 0.25; 
	    		}else{
	 				Porcentaje = 0.2;
	    		}
	    	}
	 		if(cantidad== 3){
 				if(marca=="ArgentinaLuz"){
	 				Porcentaje = 0.15;
	 			}else{
	 				if(marca=="FelipeLamparas"){
	 					Porcentaje = 0.1;
	 				}else{
	 					Porcentaje = 0.05;
	 				}
	 			}
	 		}
	 	}
	

	Descuento = Precio * Porcentaje;
	PrecioDescuento = (Precio - Descuento) * cantidad;
    //alert("PrecioDescuento=" + PrecioDescuento);


	if(PrecioDescuento>120){
		impuesto = PrecioDescuento * 0.1;
		PrecioDescuento = PrecioDescuento + impuesto;
		alert("IIBB Usted pago " + impuesto);
	}

	precioDescuento.value = PrecioDescuento;

}