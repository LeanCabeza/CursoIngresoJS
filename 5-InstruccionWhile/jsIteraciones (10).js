function mostrar()
{

	var respuesta;
	var numero ;
	var sumaNegativos = 0 ;
	var contadorNegativos= 0 ;
	var sumaPositivos = 0   ; 
	var contadorPositivos = 0; 
	var contadorDeCeros = 0 ;

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

		document.write("La sumade los negativos es " + sumaNegativos + "<br>" );
		document.write("La sumade los positovs es " + sumaPositivos + "<br>" );
		document.write("La cantidad de nros negativos ingresados es " + contadorNegativos + "<br>" );
		document.write("La cantidad de nros positivos ingresados es " + contadorPositivos + "<br>" );
		document.write("La cantidad de Ceros es " + contadorDeCeros + "<br>" );




}//FIN DE LA FUNCIÓN