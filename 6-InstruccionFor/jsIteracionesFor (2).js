function mostrar()
{
	var contador;

	contador=0;

	for(;;)
	{
		contador++;
		console.log("for "+contador);
		if(contador==10)
		{
			break;
		}
	}

	//o

	var contador;

	contador=0;

	for(contador=0;contador<10;contador++)
	{
		console.log("for "+contador);
	}
}