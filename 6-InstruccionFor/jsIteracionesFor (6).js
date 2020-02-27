function mostrar()
{

		/*al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado,
		 y mostrar la cantidad de numeros pares encontrados.*/

		var numero = parseInt(prompt("ingrese el número de repeticiones"));
		var contadorPares = 0 ;

		while(isNaN(numero)){
				 	numero=parseInt(prompt("Eso no es un numero ,Ingrese un numero "));
				 	}	

		for (var i = 1 ; i <= numero ; i++) {
				 
				if (i %2 == 0 ) {
					document.write(i + "<br>") ;
					contadorPares ++ ; 	
		}

 	}
 	document.write("LA CANTIDAD DE NUMEROS PARES ES "+ contadorPares) ; 



}//FIN DE LA FUNCIÓN