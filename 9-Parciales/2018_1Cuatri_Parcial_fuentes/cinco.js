function mostrar()
{
	var planetas;

	planetas=prompt("escriba el nombre de un planeta");

	switch(planetas)
	{
		case "tierra":
		alert("Acá vivimos");
			break;

		case "mercurio":
		case "venus":
		alert("Acá hace más calor");
			break;

		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		alert("Acá hace más frio");
			break;

		default:
		alert(planetas + " no es un planeta ");
			break;			
	}
}
