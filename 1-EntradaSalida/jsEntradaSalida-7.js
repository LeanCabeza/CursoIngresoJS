/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1 ; 
	var num2 ;
	var resultado ; 

	var num1 = document.getElementById("numeroUno").value;
	var num2 = document.getElementById("numeroDos").value;

	var num1 = parseInt(num1);
	var num2 = parseInt(num2);

	var resultado = num1 + num2 ; 

	alert("El resultado de la suma es "+ resultado);

}

function restar()
{
	var num1 ; 
	var num2 ;
	var resultado ; 

	var num1 = document.getElementById("numeroUno").value;
	var num2 = document.getElementById("numeroDos").value;

	var num1 = parseInt(num1);
	var num2 = parseInt(num2);

	var resultado = num1 - num2 ; 

	alert("El resultado de la resta es "+ resultado);

}

function multiplicar()
{ 
	var num1 ; 
	var num2 ;
	var resultado ; 

	var num1 = document.getElementById("numeroUno").value;
	var num2 = document.getElementById("numeroDos").value;

	var num1 = parseInt(num1);
	var num2 = parseInt(num2);

	var resultado = num1 * num2 ; 

	alert("El resultado de la multiplicacion es "+ resultado);
}

function dividir()
{
	var num1 ; 
	var num2 ;
	var resultado ; 

	var num1 = document.getElementById("numeroUno").value;
	var num2 = document.getElementById("numeroDos").value;

	var num1 = parseInt(num1);
	var num2 = parseInt(num2);

	var resultado = num1 / num2 ;

	alert("El resultado de la division es "+ resultado);	
}

