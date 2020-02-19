function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";

		/*while (respuesta == "si"){
		  	numero = parseInt(prompt("ingrese un número "));
		  	acumulador = acumulador + numero ; 
		  	respuesta = prompt("Quieres seguir sumando ?") ; 
		  	contador ++ ; 
		  }
			*/

		  do{
		  	numero = parseInt(prompt("ingrese un número "));
		  	acumulador = acumulador + numero ; 
		  	respuesta = prompt("Quieres seguir sumando ?") ; 
		  	contador ++ ;
		  	 
		  }while(respuesta== "si") ; 

		 /*

		 do {
				alert("hola");
				seguir = prompt("Quiere que lo salude de nuevo ?");
		 }while (seguir == " s ")


		 */

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN