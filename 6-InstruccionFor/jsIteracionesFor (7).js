function mostrar()
{
	var numero = parseInt(prompt("Escribe un número"));
	var contadorDivisores = 0 ; 

	while(isNaN(numero)){
				 	numero=parseInt(prompt("Eso no es un numero ,Ingrese un numero "));
				 	}	

    for (var i=1; i <= numero ; i++) {
        if (numero % i == 0) {
            document.write(i," lo divide <br> ");
            contadorDivisores ++ ; 
        }
    }

    document.write("La cantidad de divisores es "+  contadorDivisores) ;

}//FIN DE LA FUNCIÓN