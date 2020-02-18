function mostrar()
{

var sexo = prompt("ingrese f ó m .").toLowerCase();

	while(sexo!="f" && sexo != "m" ){
		  		alert("el sexo que ingresaste es INCORRECTO");
		  		sexo=prompt("Volve a ingresar un sexo , f femenino y m para masculino ").toLowerCase();
		  }
		alert("Sexo ingresado CORRECTO");

document.getElementById('Sexo').value=sexo;
	
}//FIN DE LA FUNCIÓN
