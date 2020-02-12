function mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("mayor de edad");
	}
	else
	{
		alert("menor de edad");
	}
}//FIN DE LA FUNCIÓN