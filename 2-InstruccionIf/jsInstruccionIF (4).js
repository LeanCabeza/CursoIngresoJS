function mostrar()
{
//tomo la edad  

edad=parseInt(document.getElementById("edad").value) ;
// condicional 

   if (edad >=13 && edad <= 17 ) {
		alert("Sos un adolecente entre 13 y 17 años") ;
	} 

	
	/*
		Esto seria por la negativa 


	if (!(edad<13 || edad>17 )){
		alert("es adolecente ") ; 
		
	}*/
}//FIN DE LA FUNCIÓN ||