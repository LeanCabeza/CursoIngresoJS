function mostrar()
{
	var numero = 0 ; 
	var letra ; 
	var nrosPares = 0 ;
	var nrosImpares = 0 ;
	var contadorCeros = 0 ;	
	var contadorPositivos = 0 ;
	var sumaPositivos = 0 ;
	var promedioPositivos = 0 ; 
	var sumaNegativos = 0 ;
	var maximo = 0 ;
	var minimo =0 ; 
	var flag = 0 ;


    do{
		  	numero = parseInt(prompt("Ingrese nota (-100 a 100): "));
        		while (numero < -100 || numero > 100 || isNaN(numero)) {
            		numero = parseInt(prompt("Numero Invalido . Ingrese un numero entre  (-100 y 100): "));
        		}

		  	letra= prompt("Ingrese una letra de A - Z") ;

		  	respuesta = prompt("Quieres seguir ingresando numeros y letras ?") ;

		  	// Cantidad de numeros Pares e Impares 

				  if (numero %2 == 0 ) {
						nrosPares ++ ;	
					}else{
					nrosImpares ++ ;
					}

			// Contador de Ceros
				if (numero == 0){
				contadorCeros ++ ;
				}

				if (numero >0 ){
					sumaPositivos= sumaPositivos + numero ; 
					contadorPositivos ++ ; 
			}else{
				sumaNegativos = sumaNegativos + numero ; 
			}
			// maximo y minimo 
				if (flag == 0 || numero > maximo ){
			 	maximo = numero ;
			 	letraMaximo = letra ; 
			 	}

			 	if(flag == 0 || numero < minimo){
			 	minimo = numero ;
			 	letraMinimo = letra ; 
			 	flag = 1 ;
		 }

		  	 
		  }while(respuesta== "si") ; 


			promedioPositivos = sumaPositivos / contadorPositivos ; 

			// DOCUMENTS WRITE QUE SE MUESTRAN EN PANTALLA 

			document.write(" La cantidad de nros pares es " + nrosPares + "<br>");
			document.write(" La cantidad de nros Impares es " + nrosImpares + "<br>");
			document.write(" La cantidad de ceros es " + contadorCeros+ "<br>");
			document.write(" El promedio de los numeros Positivos es " + promedioPositivos + "<br>");
			document.write(" El numero minimo es  " + minimo + " y la letra es " + letraMinimo + "<br>");
			document.write(" El numero Maximo  " + maximo + " y la letra es " + letraMaximo+ "<br>");







	
		
}
