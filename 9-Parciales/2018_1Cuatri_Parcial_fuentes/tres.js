function mostrar()
{
 	var precio = parseInt(prompt("Ingresa el precio")); 
 	var procentajeDeDescuento = parseInt(prompt("Ingresa el porcentaje de descuento")); 

 	var descuento = ( precio * procentajeDeDescuento ) / 100 ; 
 	var precioFinal= precio - descuento ; 

 	document.getElementById("elPrecioFinal").value = "$"+precioFinal;


 }
