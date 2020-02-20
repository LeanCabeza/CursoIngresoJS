function mostrar()
{

	var flag=0;
	var respuesta ;
	var numero ; 
	var maximo ;
	var minimo ; 

	do
	{
		numero = parseInt(prompt("Ingrese un Numero")); 

		while(isNaN(numero)){
		 		numero=parseInt(prompt("Eso no es un numero ,Ingrese un numero "));
		 	}	

		 // FORMA ACOTADA

		 if (flag == 0 || numero > maximo ){
		 	maximo = numero ;
		 }

		 if (flag == 0 || numero < minimo){
		 	minimo = numero ;
		 	flag = 1 ;
		 }


		/*  FORMA CLASICA 

		if (flag == 0) {
		 		maximo = numero ;
		 		minimo = numero ; 
		 		flag = 1 ;
		 	}else{
					if ( numero > maximo  ){
						maximo = numero ; 
					}

						else if ( numero < minimo ){
						minimo = numero ;
					} */
					

		respuesta= prompt("Quiere contunuar ingresando numeros ?");

	}while(respuesta == "si"); 

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;



}//FIN DE LA FUNCIÓN