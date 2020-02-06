function mostrar()
{
//tomo la edad  

edad=parseInt(document.getElementById("edad").value) ;
// condicional 

	if (edad >=	18  ) { 
		alert("Sos mayor de edad");
	}else if(edad <=17 && edad >=13) {
		alert("Sos un adolecente");
	}else if(edad <=12) {
		alert("Sos un niño");
	}


}//FIN DE LA FUNCIÓN¨Ç¨