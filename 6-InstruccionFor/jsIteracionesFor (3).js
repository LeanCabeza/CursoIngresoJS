function mostrar()
{

var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));
	
while(isNaN(repeticiones)){
		 	repeticiones=parseInt(prompt("Eso no es un numero ,Ingrese un numero "));
		 	}	

for (var contador = 0 ; contador < repeticiones ; contador++) {
		document.write("HOLA UTN FRA :D <br>") ; 
	}


}//FIN DE LA FUNCIÓN