function mostrar()
{	
	var numero1 = parseInt(prompt("Ingrese un numero ")); 
	var numero2  = parseInt(prompt("Ingrese nuevamente un numero ")); 


		if(numero1 == numero2){
			alert("Como los numero son iguales los concatene" + numero1 +" "+numero2);
		}else if (numero1 > numero2){
			var resta = numero1-numero2 ;
			alert("Como el primero es mayor los reste y dio "+resta);
		}else{
			suma = numero1 + numero2 ;
			alert("Como el segundo es mayor los Sume"+suma);
		} ;

		if (suma >10 ){
			alert("la suma es "+suma + " y supero el 10");
		}
}
