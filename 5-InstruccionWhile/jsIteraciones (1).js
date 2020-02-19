function mostrar()
{
	alert('iteración while');
	var contador;

	contador=0;
	                    //(contador=parseInt(contador);)cuando ya es numero no es necesario parsear

	while(contador<10)
	{
		contador=contador+1;
		console.log(contador);
	}
}//FIN DE LA FUNCIÓN