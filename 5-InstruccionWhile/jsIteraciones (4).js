function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 1 y 9."));

		  while(numero > 9 || numero < 0 || isNaN(numero) ){
		  		alert("el numero es INCORRECTO");
		  		numero=parseInt(prompt("Volve a ingresar UN numero entre 1 y 9 "));
		  }
		alert("Numero CORRECTO");

}//FIN DE LA FUNCIÓN