function mostrar()
{
//tomo la edad  
edad=parseInt(document.getElementById("edad").value) ;
// condicional 

// Esta es la forma en la que no hay que hacerlo
if (edad >=13 && edad <= 17 ) {
		// en este caso no haria nada 
	}else{
		alert("No sos adolecente");
	}


	/*			
		Otra forma de acerlo por la negativa 

		if (edad < 13 || edad < 17 ) {
		alert("No sos adolecente");

	*/
}//FIN DE LA FUNCIÓN