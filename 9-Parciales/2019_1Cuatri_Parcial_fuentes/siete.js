function mostrar()
{

	var altura = 0 ;
	var sexo ;
	var respuesta ;
	flag = 0 ;
	var alturaMinima ;
	var sexoMinimo ;
	var mujeresAltas = 0 ;
	var sumaAlturas = 0 ;

	
	for (var i = 0; i < 5; i++) {
		
		altura = parseInt(prompt("Ingrese la altura del jugadxr de basket entre 0 y 250 cm") ) ;
		while (altura < 0 || altura > 250 || isNaN(altura)){
			altura = parseInt(prompt("Altura no valida .Volve a ingresar la entre 0 y 250 cm") ) ;
		} 


		sexo = prompt("Ingrese sexo (f-m): ");
        while (sexo != 'f' && sexo != 'm') {
            sexo = prompt("Sexo invalido. Ingrese sexo (f-m): ");
        }

        // Voy sumando Alturas en cada iteracion

        sumaAlturas = sumaAlturas + altura ; 

        // altura mas baja 

        if (alturaMinima > altura || flag == 0 ){
        	alturaMinima = altura ;
        	sexoMinimo = sexo ;
        	flag = 1 ;
        }

        if (sexo == 'f' && altura > 190) {
            mujeresAltas++;
        }

		
	}

	   //Alturas totales 
	   		promedioAlturas = sumaAlturas / 5 ;

	   		alert("Promedio Alturas: " + promedioAlturas + "\nAltura mas Baja: " + alturaMinima + "\nSexo altura mas baja: " + sexoMinimo + "\nContador Mujeres altura  mayor a 190 cm: " + mujeresAltas);

}	