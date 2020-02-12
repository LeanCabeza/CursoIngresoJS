/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1 = parseFloat(document.getElementById("PrecioUno").value);  
	var	precio2 = parseFloat(document.getElementById("PrecioDos").value); 
	var precio3 =parseFloat(document.getElementById("PrecioTres").value);

	suma = precio1 + precio2 + precio3 ; 
	alert("El precio de la suma de los tres precios es "+ suma) ; 
}
function Promedio () 
{
	var precio1 = parseFloat(document.getElementById("PrecioUno").value);  
	var	precio2 = parseFloat(document.getElementById("PrecioDos").value); 
	var precio3 =parseFloat(document.getElementById("PrecioTres").value);

	suma = precio1 + precio2 + precio3 ; 
	promedio = suma / 3 ; 
	alert("El precio de la suma de los tres precios es "+ promedio) ; 

}
function PrecioFinal () 
{
	var precio1 = parseFloat(document.getElementById("PrecioUno").value);  
	var	precio2 = parseFloat(document.getElementById("PrecioDos").value); 
	var precio3 =parseFloat(document.getElementById("PrecioTres").value);

	suma = precio1 + precio2 + precio3 ; 
	iva = ( suma * 21 )/100 ; 
	resultado = suma + iva ; 

	alert(resultado) ; 
}