function mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad<13)
	{
		alert("no es adolescente");
	}
	if(edad>17)
	{
		alert("no es adolescente");
	}
}//FIN DE LA FUNCIÓN