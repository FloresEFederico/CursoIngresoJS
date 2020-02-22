function mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("la persona es mayor de edad");
	}else
	{
		if(edad<13)
		{
			alert("la persona es menor de edad");
		}else
		{
			alert("la persona es adolescente");
		}
	}
}//FIN DE LA FUNCIÓN