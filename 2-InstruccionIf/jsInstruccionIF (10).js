function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroAleatorio = Math.random(1,10)*10;
	numeroAleatorio= Math.floor(numeroAleatorio);


	if (numeroAleatorio >= 9) {
		alert("Aprobo con un "+ numeroAleatorio);
	}else if(numeroAleatorio > 4){
		alert("Excelente con un "+ numeroAleatorio);
	}else if(numeroAleatorio <= 3) {
		alert("Vamos , la proxima se puede !! Te sacaste un " + numeroAleatorio);
	}

}//FIN DE LA FUNCIÓN