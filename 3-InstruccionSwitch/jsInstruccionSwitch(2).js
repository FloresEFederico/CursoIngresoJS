function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	alert (mesDelAño);

	switch(mesDelAño)
	{
		case 5:

			case"Julio":
			case"Agosto":
			alert("abrigate que hace frio");
				break;


		case 4:

			case"Enero":
			case"Febrero":
			case"Marzo":
			case"Abril":
			case"Mayo":
			case"Junio":

			alert("Falta para el invierno");
				break;
			default:

			alert("ya pasamos el frio, ahora calor");
					break;

	}			




}//FIN DE LA FUNCIÓN