function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	

//alert (mesDelAño);
		
	switch(mesDelAño)
	{
		
		case"Abril":
		case"Junio":
		case"Septiembre":
		case"Noviembre":

		alert("tiene 30 dias");
				break;
		
		case"Febrero":
		alert("tiene 28 dias");
				break;

		default:
		alert("tiene 31 dias");
				break;
	}



}//FIN DE LA FUNCIÓN