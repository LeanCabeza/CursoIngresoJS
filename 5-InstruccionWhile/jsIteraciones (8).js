function mostrar()
{
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';
	var flag ;

	 do{

	 	numero = parseInt(prompt("Ingrese un numero"));

	 	while(isNaN(numero)){
	 		numero=parseInt(prompt("Eso no es un numero ,Ingrese un numero "));
	 	}	

	 	if( numero >= 0 ){
	 		positivo = positivo + numero ; 

	 	}else {
	 		negativo = negativo * numero ;
	 		flag = 1 ; 
	 	}

	 	respuesta= prompt("Quiere contunuar ingresando numeros ?");

	 }while(respuesta== "si" );

	 if (flag == 0 ) {
	 	negativo = 0 ;
	 }


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN