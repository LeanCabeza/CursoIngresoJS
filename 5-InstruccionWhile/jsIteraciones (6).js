function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;


// contador incremente en valores fijos ej ;  +1 , +2 , etc  . 
// ACUMULADOR incrementa en valores VARIABLES EJ ;  numero  + variable.
		  while (contador < 5 ){
		  	numero = parseInt(prompt("ingrese un número "));
		  	acumulador = acumulador + numero ; 
		  	contador++ ; 
		  }


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN