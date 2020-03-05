function mostrar()
{
/*Pedir los siguientes datos:
 edad(mayores a 18)
 sexo ("f" o "m")
 pasaje ("urbano, "nacional" o "internacional")

 a) el nombre del hombre con pasaje nacional mas joven
 b) el sexo y pasaje del pasajero/a mas viejo
 c) la cantidad de mujeres con pasaje urbano o nacional
 d) el promedio de edad entre las mujeres
 e) el promedio de edad entre los hombres con pasaje internacional*/

 	var edad;
 	var sexo;
 	var pasaje;
 	var respuesta;
 	var contador;
 	var nombre;
 	var hombreMasJoven;
 	var hombreMasJovenNombre;
 	var pasajeroMasViejo;
 	var sexoDePasajeroMasViejo;
 	var pasajeDePasajeroMasViejo;
 	var cantidadMujeresPasajesNacionalUrbano;
 	var promedioDeEdadDeMujeres;
 	var promedioDeEdadDeHombresInternacional;
 	var acumuladorEdadMujeres;
 	var contadorEdadMujeres;
 	var acumuladorHombresPasajeInternacional;
 	var contadorHombresPasajeInternacional;

 	respuesta="si";
 	contador=0;
 	hombreMasJoven=0;
 	pasajeroMasViejo=0;
 	sexoDePasajeroMasViejo=0;
 	cantidadMujeresPasajesNacionalUrbano=0;
 	acumuladorEdadMujeres=0;
 	contadorEdadMujeres=0;
 	contadorHombresPasajeInternacional=0;
 	acumuladorHombresPasajeInternacional=0;


 	while(respuesta=="si")
 	{
 		do
 		{
 			nombre=prompt("ingrese el nombre");
 		}while(!isNaN(nombre));

 		do
 		{
 			edad=prompt("ingrese la edad");
 			edad=parseInt(edad);
 		}while(isNaN(edad)|| edad<18);

 		do
 		{
 			sexo=prompt("ingrese el sexo");
 		}while(!isNaN(sexo)|| sexo!="f" && sexo!="m");

 		do
 		{
 			pasaje=prompt("ingrese el pasaje");
 		}while(!isNaN(pasaje)|| pasaje!="urbano" && pasaje!="nacional" && pasaje!="internacional");
 		
 		if(contador==0 || sexo=="m" && pasaje=="nacional" && edad<hombreMasJoven)
 		{	
 			hombreMasJoven=edad;
 			hombreMasJovenNombre=nombre;
 		}

 		if(contador==0 || edad>pasajeroMasViejo)
 		{
 			pasajeroMasViejo=edad;
 			pasajeDePasajeroMasViejo=pasaje;
 			sexoDePasajeroMasViejo=sexo;
 		}

 		if(sexo=="f" && pasaje=="nacional" || pasaje=="urbano")
 		{
 			cantidadMujeresPasajesNacionalUrbano++;
 		}

 		if(sexo=="f")
 		{
 			acumuladorEdadMujeres=acumuladorEdadMujeres+edad;
 			contadorEdadMujeres++;
 		}

 		if(sexo== "m" && pasaje=="internacional")
 		{
 			acumuladorHombresPasajeInternacional=acumuladorHombresPasajeInternacional+edad;
 			contadorHombresPasajeInternacional++;
 		}
 		contador++;
 		respuesta=prompt("desea continuar?");
 	}

 	promedioDeEdadDeMujeres=acumuladorEdadMujeres/contadorEdadMujeres;
 	promedioDeEdadDeHombresInternacional=acumuladorHombresPasajeInternacional/contadorHombresPasajeInternacional;

 	document.write("<br> nombre del hombre con pasaje nacional mas joven: "+hombreMasJovenNombre);
 	document.write("<br> sexo y pasaje del sexo mas viejo: "+sexoDePasajeroMasViejo+" "+pasajeDePasajeroMasViejo);
 	document.write("<br> cantidad de mujeres con pasaje nacional o urbano: "+cantidadMujeresPasajesNacionalUrbano);
 	document.write("<br> promedio de edad de mujeres: "+promedioDeEdadDeMujeres);
 	document.write("<br> promedio de edad de hombres con pasaje internacional: "+promedioDeEdadDeHombresInternacional);

}
