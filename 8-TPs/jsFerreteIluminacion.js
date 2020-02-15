function CalcularPrecio () 
{


 	// capto variables LAMPARAS , MARCA LAMPARAS 
 		var	nroLamparas = parseFloat( document.getElementById('Cantidad').value); 
 		var marcaLampara = document.getElementById('Marca').value ;
 		var precioUnitario = 35 ; // puse el precio de la lampara en una variable por si algun dia aumenta 


				switch (nroLamparas) {
					  case 6:
// 	Si compra 6 tiene un udescento del 50%. 

							 			var precioSinDescuento = nroLamparas * precioUnitario ; 
							 			var descuento50 = ( precioSinDescuento * 50 ) / 100 ; 
							 			var importeFinal = precioSinDescuento - descuento50 ; 
							 				
							 			// aca muestro el resultado en una cajita de la pagina 
							 			document.getElementById("precioDescuento").value  = "$ " + importeFinal ; 
					    break;
					  case 5:
// Si compra 5  lamparitas  marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.

					  				if(marcaLampara == "ArgentinaLuz"){
					  					var precioSinDescuento = nroLamparas * precioUnitario ; 
							 			var descuento40 = ( precioSinDescuento * 40 ) / 100 ; 
							 			var importeFinal = precioSinDescuento - descuento40 ; 
							 			// aca muestro el resultado en una cajita de la pagina 
							 			document.getElementById("precioDescuento").value  = "$ "+importeFinal ;
							 		}else {
							 			var precioSinDescuento = nroLamparas * precioUnitario ; 
							 			var descuento30 = ( precioSinDescuento * 30 ) / 100 ; 
							 			var importeFinal = precioSinDescuento - descuento30 ; 
							 			// aca muestro el resultado en una cajita de la pagina 
							 			document.getElementById("precioDescuento").value  = "$ " + importeFinal ;
							 		}
					    break;
					  case 4:
	//Si compra 4  lamparitas marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
					   				
					   				if(marcaLampara == "ArgentinaLuz" || marcaLampara =="FelipeLamparas" ){
					  					var precioSinDescuento = nroLamparas * precioUnitario ; 
							 			var descuento25 = ( precioSinDescuento * 25 ) / 100 ; 
							 			var importeFinal = precioSinDescuento - descuento25 ; 
							 			// aca muestro el resultado en una cajita de la pagina 
							 			document.getElementById("precioDescuento").value  = "$ " + importeFinal ;
							 		}else {
							 			var precioSinDescuento = nroLamparas * precioUnitario ; 
							 			var descuento20 = ( precioSinDescuento * 20 ) / 100 ; 
							 			var importeFinal = precioSinDescuento - descuento20 ; 
							 			// aca muestro el resultado en una cajita de la pagina 
							 			document.getElementById("precioDescuento").value  = "$ "+ importeFinal ;
							 		}
					    break;
					  case 3 : 
	//	Si compra 3  lamparas marca "ArgentinaLuz" el descuento es del 15%, si es  “FelipeLamparas”10 % y si es de otra marca un 5%.
					   				
					   				if(marcaLampara == "ArgentinaLuz"){
					  					var precioSinDescuento = nroLamparas * precioUnitario ; 
							 			var descuento15 = ( precioSinDescuento * 15 ) / 100 ; 
							 			var importeFinal = precioSinDescuento - descuento15 ; 
							 			// aca muestro el resultado en una cajita de la pagina 
							 			document.getElementById("precioDescuento").value  = "$ " + importeFinal ;
							 		}else if (marcaLampara == "FelipeLamparas"){
							 			var precioSinDescuento = nroLamparas * precioUnitario ; 
							 			var descuento10 = ( precioSinDescuento * 10 ) / 100 ; 
							 			var importeFinal = precioSinDescuento - descuento10 ; 
							 			// aca muestro el resultado en una cajita de la pagina 
							 			document.getElementById("precioDescuento").value  = "$ " + importeFinal ;
							 		}else {
							 				var precioSinDescuento = nroLamparas * precioUnitario ; 
							 				var descuento5 = ( precioSinDescuento * 5 ) / 100 ; 
							 				var importeFinal = precioSinDescuento - descuento5 ; 
							 				// aca muestro el resultado en una cajita de la pagina 
							 				document.getElementById("precioDescuento").value  = "$ "+ importeFinal ;
							 		}
					    break;
					  default:
					  // En caso de que sea mayor a 7 el numero de lamparas que compre , le descontara %50 , y por defecto no hace ningun descuento y pagas $ 35 c/lampara.
					   
					   	if (nroLamparas >= 7 ){
					   					var precioSinDescuento = nroLamparas * precioUnitario ; 
							 			var descuento50 = ( precioSinDescuento * 50 ) / 100 ; 
							 			var importeFinal = precioSinDescuento - descuento50 ; 
							 			// aca muestro el resultado en una cajita de la pagina 
							 			document.getElementById("precioDescuento").value  =  "$ " + importeFinal ; 
					   	}else { 
					  // aca estaria el valor por defecto si ocmpras menos de 4 lamparas.
					   		var importeFinal = nroLamparas * precioUnitario ;
					   		document.getElementById("precioDescuento").value  = "$ "+ importeFinal ;
					   	}
					}
	// VALIDACION FINAL , EN CASO DE QUE ALGUN RESULTADO HAYA DADO MAS DE 120 LE SUMARA INGRESOS BRUTOS , FUNCIONA PARA TODOS LOS CASOS DEBIDO A QUE ESTA FUERA DEL SWICH			

								if (importeFinal >120) {
							 					diezXciento = (importeFinal * 10 )/ 100 ; 
							 					importeFinalCon10xCiento = importeFinal + diezXciento ;
							 					document.getElementById("precioDescuento").value =("IIBB Usted pago $ "  + importeFinalCon10xCiento +  " siendo $ " + diezXciento + " el impuesto que se pagó") 
							 				}

 					}


 


