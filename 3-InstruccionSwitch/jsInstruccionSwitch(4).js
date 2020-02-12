function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mes){
  		case "Febrero" : 
  			alert("Este mes tiene 28 dias");
    break;
    	case  "Julio":
    	case  "Agosto":
  			alert("Este mes tiene 29 dias ");
    	break;

    	default:
    		alert("Ya pasamos el frio ahora calor");
}



}//FIN DE LA FUNCIÓN