function mostrar()
{
	var nota ;
	var maximo = 10 ; 
	var minimo = 1 ;
	var mensaje = "Aprobo . Nota : "
	nota = Math.floor(Math.random()*((maximo+1)- minimo)+ minimo);

	if(nota>=9){
		alert("Excelente te sacaste un "+ nota)
	}else if (nota >=4){
		alert("Aprobo "+ nota)
	}else{
		alert("Vamos la proxima se puede con un "+ nota);
	}

}//FIN DE LA FUNCIÓN