function mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad >17)
	{
		alert("mayor");
	}
	else
	{
		alert("menor");
	}	
	

}//FIN DE LA FUNCIÓN