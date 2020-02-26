function mostrar()
{

	var respuesta;
	var numero ;
	var sumaNegativos = 0 ;
	var contadorNegativos= 0 ;
	var sumaPositivos = 0   ; 
	var contadorPositivos = 0; 
	var contadorDeCeros = 0 ;
	var nrosPares = 0 ;
	var promedioPositivos = 0 ;
	var promedioNegativos = 0 ;
	var diferenciaEntreNegativosYPositivos = 0 ;


	do{
		numero = parseInt(prompt("Ingrese un Numero")); 

		while(isNaN(numero)){
		 		numero=parseInt(prompt("Eso no es un numero ,Ingrese un numero "));
		 	}


		 	if (numero < 0  ){
		 		sumaNegativos =  sumaNegativos + numero ;
		 		contadorNegativos ++ ;
		 	}else if (numero > 0) {
		 		sumaPositivos = sumaPositivos + numero ; 
		 		contadorPositivos ++ ;
		 	}else{
		 		contadorDeCeros ++ ;
		 	}


		respuesta= prompt("Quiere contunuar ingresando numeros ?");
	
	}while(respuesta == "si");



		//  IF (nroPares %2 == 0 ) , esto sifgnifica si el esto da 0 , ES PAR.
		if (numero %2 == 0 ) {
				nrosPares ++ ;	
		}

		//	promedio Positivos 
			var promedioPositivos = sumaPositivos / contadorPositivos ; 	

		// promedio Negativos 

			var promedioNegativos = sumaNegativos / contadorNegativos ; 

		// diferencia entre nros Negativos y nros Positivos 

			var diferenciaEntreNegativosYPositivos = promedioPositivos - promedioNegativos ; 


			document.write("La suma de los negativos es " + sumaNegativos + "<br>" );
			document.write("La suma de los positivos es " + sumaPositivos + "<br>" );
			document.write("La cantidad de nros negativos ingresados es " + contadorNegativos + "<br>" );
			document.write("La cantidad de nros positivos ingresados es " + contadorPositivos + "<br>" );
			document.write("La cantidad de Ceros es " + contadorDeCeros + "<br>" );
			document.write("La cantidad de nros pares es " + nrosPares + "<br>" );
			document.write("El promedio de los positivos es " + promedioPositivos + "<br>" );
			document.write("El promedio de los negativos es " + promedioNegativos + "<br>" );
			document.write("La diferencia entre positivos y negativos es " + diferenciaEntreNegativosYPositivos + "<br>" );




}//FIN DE LA FUNCIÓN