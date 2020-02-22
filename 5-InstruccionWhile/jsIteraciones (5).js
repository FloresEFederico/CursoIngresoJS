function mostrar()
{

	var sexo;
	sexo=prompt("ingrese f ó m .");

	while(sexo!="f" && sexo!="m")
	{
		sexo=prompt("ingrese nuevamente f o m");
	}

	switch(sexo)
	{
		case "f":
		sexo="Femenino";
		document.getElementById('Sexo').value=sexo;
			break;

		case "m":
		sexo="Masculino";
		document.getElementById('Sexo').value=sexo;
			break;	
	}

}//FIN DE LA FUNCIÓN