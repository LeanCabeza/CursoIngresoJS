function mostrar()
{
	var numero ;
	var letra ; 
	var respuesta ; 
	var esPar = 0 ;
	var esImpar = 0 ;
	var totalPositivos = 0 ;
	var contadorPositivos = 0 ;
	var contadorCeros = 0 ;
	var totalNegativos= 0  ;
	var flag = 0 ;
	var maximo; 
	var letraMaximo ;
	var minimo  ;
	var letraMinimo ;
	var promedioPositivos = 0 ;


	do{
		letra = prompt("Ingrese una letra por favor ") ;	

		numero = parseInt(prompt("Ingrese un numero entre -100 y 100 ")) ;	
		while(numero < -100 || numero > 100 || isNaN(numero)){
			numero = parseInt(prompt("Numero INVALIDO ,Ingrese un numero entre -100 y 100 ")) ;	
		}

		// contador ceros 

		if (numero == 0 ){
			contadorCeros ++ ;
		}

		// nros pares e impares

		if (numero %2 == 0 ){
			esPar++ ; 
		}else{
			esImpar++ ;
		}
		//contador de positivos y total de positivos .. ADEMAS CONTARA EL TOTAL DE negativos

		if (numero >0 ){
			totalPositivos= totalPositivos + numero;
			contadorPositivos++ ;
		}else {
			totalNegativos= totalNegativos + numero ;
		}

		// MINIMO Y MAXIMO
		if(numero > maximo || flag==0){
			maximo = numero ;
				 = letra ; 
		}

		if (numero < minimo || flag==0){
			minimo = numero ;
			letraMinimo = letra ;
			flag = 1 ;
		}

		respuesta = prompt("Quieres seguir ingresando numeros y letras ?") ;


	}while(respuesta=="si") ;

	promedioPositivos = totalPositivos / contadorPositivos;

	document.write("La cantidad de nros pares es :" + esPar +"</br>" ) ;
	document.write("La cantidad de nros impares es :" + esImpar+"</br>" ) ;
	document.write("La cantidad de ceros es :" + contadorCeros +"</br>") ;
	document.write("El promedio de todos los numeros positivos es :" + promedioPositivos +"</br>") ;
	document.write("La suma de todos los numeros negativos es :" + totalNegativos+"</br>" ) ;
	document.write("El numero del Maximo es :" + maximo + "la letra es " + letraMaximo +"</br>");
	document.write("El numero del Minimo es :" + minimo + "la letra es " + letraMinimo+"</br>"	);
}
