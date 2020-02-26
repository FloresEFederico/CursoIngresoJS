function mostrar()
{
	var repeticion;
	var nombre;

	nombre='break';
	repeticion=0;

	for(repeticion=0;;repeticion++)
	{	
		nombre=prompt("continuar infinitamente");
		console.log("Infinito "+repeticion);
		if(nombre=='break')
		{
			break;
		}
	}

}//FIN DE LA FUNCIÓN