function mostrar()
{

	var planeta = prompt("Ingresa un planeta del sistema solar");

	switch (planeta) {
		  case 'Tierra':
		    alert('Aca vivimos');
		    break;
		  case 'Mercurio':
		  case 'Venus':
		  case 'Marte':
		  case 'Jupiter':
		    alert('Aca hace mas calor');
		    break;
		  case 'Saturno':
		  case 'Urano':
		  case 'Neptuno':
		  case 'Pluton':
		    alert('Aca hace mas frio');
		    break;
		  default:
		    alert('Lo lamentamos, el planeta ingresado *' + planeta + '* no es un planeta valido del sistema solar');
		}


}
