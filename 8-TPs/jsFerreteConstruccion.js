/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo = parseFloat(document.getElementById("Largo").value);  
	var	ancho = parseFloat(document.getElementById("Ancho").value); 
	var radio  =parseFloat(document.getElementById("Radio").value);

	perimetroRectangulo = (largo*2) + (ancho * 2) ;
	vueltasDeAlambre3 = perimetroRectangulo * 3 ;

	alert("se necesitan comprar  " + vueltasDeAlambre3 + " Metros de alambre" );
}
function Circulo () 
{
	var largo = parseFloat(document.getElementById("Largo").value);  
	var	ancho = parseFloat(document.getElementById("Ancho").value); 
	var radio  =parseFloat(document.getElementById("Radio").value);

	perimetroCirculo = radio * radio ; 
	vueltasDeAlambre3 = perimetroCirculo * 3 ; 

	alert(vueltasDeAlambre3) ; 
}
function Materiales () 
{
	var largo = parseFloat(document.getElementById("Largo").value);  
	var	ancho = parseFloat(document.getElementById("Ancho").value); 
	var radio  =parseFloat(document.getElementById("Radio").value);

	areaRectangulo = largo * ancho  ;

	nroBolsasDeCemento= areaRectangulo *2;
	nroBolsasDeCal= areaRectangulo * 3 ; 

	alert("Para la superficie que ingresaste necesitarias " + nroBolsasDeCemento + " Bolsas de Cemento y " + nroBolsasDeCal + " Bolsas de Cal");


	
}