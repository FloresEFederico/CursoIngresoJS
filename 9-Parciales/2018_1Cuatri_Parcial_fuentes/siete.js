/*Pedir los siguientes datos:
 edad(mayores a 18)
 sexo ("f" o "m")
 pasaje ("urbano, "nacional" o "internacional")

 a) el nombre del hombre con pasaje nacional mas joven
 b) el sexo y pasaje del pasajero/a mas viejo
 c) la cantidad de mujeres con pasaje urbano o nacional
 d) el promedio de edad entre las mujeres
 e) el promedio de edad entre los hombres con pasaje internacional*/

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var pasaje;
	var respuesta;
	var hombreMasJoven;
	var hombreMasJovenNombre;
	var contador;
	var hombreMasViejo;
	var pasajeroMasViejo;
	var pasajeroMasViejoSexo;
	var pasajeroMasViejoPasaje;
	var cantidadMujeresConPasajeUrbanoONacional;
	var acumuladorDeEdadMujeres;
	var contadorDeEdadMujeres;
	var promedioDeEdadMujeres;
	var acumuladorDeEdadVaronesConPasajeInternacional;
	var contadorDeEdadVaronesConPasajeInternacional;
	var promedioDeEdadVaronesConPasajeInternacional;

	respuesta="si";
	hombreMasJoven=0;
	contador=0;
	pasajeroMasViejo=0;
	cantidadMujeresConPasajeUrbanoONacional=0;
	acumuladorDeEdadMujeres=0;
	contadorDeEdadMujeres=0;
	acumuladorDeEdadVaronesConPasajeInternacional=0;
	contadorDeEdadVaronesConPasajeInternacional=0;

	while(respuesta=="si")
	{
		do
		{
			nombre=prompt("ingerse el nombre");
		}while(!isNaN(nombre));

		do
		{
			edad=prompt("ingrese la edad");
			edad=parseInt(edad);
		}while(isNaN(edad)|| edad<18);

		do
		{
			sexo=prompt("ingerse el sexo");
		}while(!isNaN(sexo)|| sexo!="f" && sexo!="m");

		do
		{
			pasaje=prompt("ingerse el pasaje");
		}while(!isNaN(pasaje)|| pasaje!="urbano" && pasaje!="nacional" && pasaje!="internacional");

		if(contador==0 || pasaje=="nacional" && edad<hombreMasJoven)
		{
			hombreMasJoven=edad;
			hombreMasJovenNombre=nombre;
		}

		if(contador==0 || edad>pasajeroMasViejo)
		{
			pasajeroMasViejo=edad;
			pasajeroMasViejoPasaje=pasaje;
			pasajeroMasViejoSexo=sexo;
		}

		if(sexo=="f")
		{
			acumuladorDeEdadMujeres=acumuladorDeEdadMujeres+edad;
			contadorDeEdadMujeres++;
		
			if(pasaje=="urbano" || pasaje=="nacional")
			{
				cantidadMujeresConPasajeUrbanoONacional++;
			}
		}	
		

		if(sexo=="m" && pasaje=="internacional")
		{
			acumuladorDeEdadVaronesConPasajeInternacional=acumuladorDeEdadVaronesConPasajeInternacional+edad;
			contadorDeEdadVaronesConPasajeInternacional++;
		}

		contador++;
		respuesta=prompt("desea continuar?");

		
	}

	promedioDeEdadMujeres=acumuladorDeEdadMujeres/contadorDeEdadMujeres;
	promedioDeEdadVaronesConPasajeInternacional=acumuladorDeEdadVaronesConPasajeInternacional/contadorDeEdadVaronesConPasajeInternacional;	

	document.write("<br> el nombre del hombre con pasaje nacional mas joven: "+hombreMasJovenNombre);
	document.write("<br> el sexo y pasaje del pasajero/a mas viejo: "+pasajeroMasViejoSexo+" "+pasajeroMasViejoPasaje);
	document.write("<br> la cantidad de mujeres con pasaje nacional o urbano: "+cantidadMujeresConPasajeUrbanoONacional);
	document.write("<br> promedio de edad de mujeres: "+promedioDeEdadMujeres);
	document.write("<br> promedio de edad de hombres con pasaje internacional: "+promedioDeEdadVaronesConPasajeInternacional);
	
}
