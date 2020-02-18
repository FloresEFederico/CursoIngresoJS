function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	alert (mesDelAño);

	switch(mesDelAño)
	{
		case"Julio":
		case"Agosto":
		alert("abrigate que hace frio");
			break;

		case"Septiembre":
		case"Octubre":
		case"Noviembre":
		case"Diciembre":
		alert("ya pasamos el frio, ahora calor");
			break;
		default:
		alert("falta para el invierno");
			break;

	}

}//FIN DE LA FUNCIÓN