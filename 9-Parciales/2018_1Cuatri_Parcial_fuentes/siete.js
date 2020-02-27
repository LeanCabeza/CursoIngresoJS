function mostrar()
{
	var nota ;
	var sexo ;
	var acumuladorNotas = 0  ;
	var notaMenor ;
	var flag = 0 ;
	var promedio = 0  ;
	var contadorVaronesMas6 = 0  ; 

		for (var i = 0; i < 5; i ++ ) {

			nota =parseInt(prompt("Ingrese una nota entre 0 y 10 "));

			  while(nota < 0 || nota > 10 || isNaN(nota) ){
		  		numero=parseInt(prompt("Nota invalida , ingrese una nota entre 0 y 10 "));
		  }

			 sexo = prompt("Ingrese el sexo ( f- m )"); 
			 	while (sexo != "f" && sexo!="m" ){
			 		sexo=prompt("Eso no es un sexo valido ");
			 	}

			 acumuladorNotas = acumuladorNotas + nota ; 		

			 if (nota < notamenor || flag == 0 ){
			 	notaMenor = nota ;
			 	sexoMenor = sexo ; 
			 	flag = 1 ;
			 }
			
			if (sexo == "m" && nota <= 6){
				contadorVaronesMas6++ ; 
			}
		}

}
