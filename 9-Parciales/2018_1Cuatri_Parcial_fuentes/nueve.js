function mostrar()
{
	var marcaProducto ;
	var peso ; 
	var temperatura ;
	var temperaturasPares = 0 ;
	var flag = 0 ;
	var masPesado ;
	var masLiviano;
	var marcaPesado;
	var marcaLiviano ; 
	var bajoCero = 0 ; 
	var nroProductos = 0 ;
	var pesoTotal = 0 ;
	var promedioPeso = 0 ;


	 do{
		  	
		  	marcaProducto= prompt("Ingrese la marca del producto  ") ;

			peso = parseInt(prompt("Ingrese el peso (1 a 100): "));
        		while (peso < 1 || peso > 100 || isNaN(peso)) {
            		peso = parseInt(prompt("Peso Invalido . Ingrese un peso entre  (1 y 100): "));
        		}

		  	temperatura = parseInt(prompt("Ingrese temperatura (-30 a 30): "));
        		while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {
            		temperatura = parseInt(prompt("Temperatura Invalida . Ingrese una temperatura entre  (-30 y 30): "));
        		}


        	// aumento en 1 el contador de productos y incremento el peso total luego de haber realizado las validaciones ; 
		 	nroProductos ++ ;	
		 	pesoTotal = pesoTotal + peso ;


        	// temperaturas pares 
        		  if (temperatura %2 == 0 ) {
						temperaturasPares ++ ;	
					}

			// maximo y minimo 
				if (flag == 0 || peso > masPesado ){
			 	masPesado = peso ;
			 	marcaPesado = marcaProducto ;

			 	}

			 	if(flag == 0 || peso < masLiviano){
			 	masLiviano = peso ;
			 	marcaLiviano= marcaProducto ; 
			 	flag = 1 ;
		 	}

		 	// productos almacenados bajo cero
		 		if (temperatura > 0){
		 			bajoCero ++ ;
		 		}

		  	respuesta = prompt("Quieres seguir ingresando productos , pesos y temperaturas?") ;

		 }  while(respuesta== "si") ; 


		 // promedio del peso de todos los productos 

		 promedioPeso = pesoTotal / nroProductos ; 

		 // Datos a mostrar en pantalla
		 document.write(" La cantidad de temperaturas pares es : " + temperaturasPares + "<br>");
		 document.write(" La marca del producto mas pesado es : " + marcaPesado + "<br>");
		 document.write(" La cantidad de productos que se conservan Bajo cero es :  " + bajoCero + "<br>");
		 document.write(" El promedio del peso de todos los productos es  :  " + promedioPeso + "<br>");
		 document.write(" El peso maximo es :  " + masPesado + "<br>");
		 document.write(" El peso minimo es :  " + masLiviano + "<br>");
}
