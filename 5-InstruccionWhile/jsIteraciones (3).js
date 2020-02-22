function mostrar()
{

	var clave;

	clave=prompt("Por favor, ingrese la clave de seguridad");

	while(clave!="utn750")
	{
		alert("clave incorrecta!");
		clave=prompt("por favor, ingrese la clave nuevamente");
	}

	alert("Bienvenido!");
}//FIN DE LA FUNCIÓN
