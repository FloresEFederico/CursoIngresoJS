function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;

	random=Math.floor(Math.random() * 10) + 1;
	random=parseInt(random);

	if(random>8)
		{
			alert("EXCELENTE");
		}else
			{
				if(random<5)
				{
					alert("vamos, la proxima se puede");
				}else
				{
					alert("APROBÓ");
				}
			}

				console.log(random);
}//FIN DE LA FUNCIÓN