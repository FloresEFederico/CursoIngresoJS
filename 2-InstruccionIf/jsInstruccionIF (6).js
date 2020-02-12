function mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("mayor de edad");
	}else
	{
		if(edad<13)
		{
			alert("menor de edad");
		}
			else
			{
				alert("adolescente");
			}
	}



}//FIN DE LA FUNCIÓN