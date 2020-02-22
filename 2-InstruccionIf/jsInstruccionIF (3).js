function mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("persona es mayor de edad");
	}else
	{
		alert("la persona es un menor de edad");
	}
}//FIN DE LA FUNCIÓN