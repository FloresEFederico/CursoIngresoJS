function mostrar()
{
//tomo la edad  
		var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad >18)
	{
		alert("no es adolescente");
	}
	if(edad<12)
	{
		alert("no es adolescente")
	}	

}//FIN DE LA FUNCIÓN