function mostrar()
{
	var numeroIngresado;
	var sexo;
	var alumnos;
	var promedio;
	var notas;

	alumnos=0;
	notas=0;

	while(alumnos<5)
	{	
		alumnos=alumnos+1;
		
		numeroIngresado=prompt("ingrese nota");
		numeroIngresado=parseInt(numeroIngresado);

		notas=numeroIngresado+notas;
	}

	promedio=notas/alumnos;
	alert(promedio);
}
