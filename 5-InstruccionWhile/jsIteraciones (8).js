function mostrar()
{

	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	var respuesta='si';

	while(respuesta=='si')
	{
		numeroIngresado=prompt("ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado>0)
		{
			positivo=positivo+numeroIngresado;
			console.info("esto es la suma", positivo)
		}else
		{
			negativo=negativo*numeroIngresado;
			console.info("esto es lo negativo", negativo);
		}

		respuesta=prompt("ingrese 'si' para seguir sumando/multiplicando numeros o presione cualquier cosa");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN