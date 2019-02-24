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
	var Marca;
	var Cantidad=0;
	var precio=0;
	var brutoApagar;
	var porcentaje;
	var total;
	
	var IIBB;

	Cantidad=document.getElementById('Cantidad').value;
	Marca=document.getElementById('Marca').value;
	Cantidad=parseInt(Cantidad);
	precio=parseInt(precio);
	total=parseInt(total);
	porcentaje=parseInt(porcentaje);
	
	
	precio=Cantidad*35;

	switch(Cantidad)
	{
		case 5:
		if(Marca=="ArgentinaLuz")
		{
			porcentaje=0.60;
		}
		else
		{
			porcentaje=0.70;
		}
		break;

		case 4:
		if(Marca=="ArgentinaLuz" || Marca=="FelipeLamparas")
		{
			porcentaje=0.75;
		}
		else
		{
			porcentaje=0.80;
		}
		break;

		case 3:
		if (Marca=="ArgentinaLuz") 
		{
			porcentaje=0.85;
		}
		else
		{
			if(Marca=="FelipeLamparas")
			{
				porcentaje=0.90;
			}
			else
			{
				porcentaje=0.95;
			}	
		}

		break;
		
		default:
		if(Cantidad>=6)
		{
			porcentaje=1.90;
		}

		break;

	}

		

	total=precio*porcentaje;
	
	
	
	//IIBB=parseInt(IIBB);
	
	
	/*if(total>120)
	{
		IIBB=total*0.10;
        alert("”IIBB Usted pago :"+IIBB);
	}*/
	
	document.getElementById('precioDescuento').value=total;

	



}