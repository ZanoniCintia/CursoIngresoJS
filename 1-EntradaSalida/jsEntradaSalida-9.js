/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{ 
 var ingresesueldo;
 var porcentaje;
 var aumento;

 ingresesueldo= sueldo.value;
 
 
 

 ingresesueldo=parseInt(ingresesueldo);

 porcentaje= ingresesueldo*0.1;
 aumento= ingresesueldo+porcentaje;


 resultado.value=aumento; 

 



 




    






	
}
