/*b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva*/

function mostrar()
{
	var nombre;
	var cantidadDePersonas;
	var cantidadDeDias;
	var formaDePago;
	var respuesta;
	var contador;
	var maximoDePersonas;
	var maximoDePersonasNombre;
	var maximoDeDias;
	var maximoDeDiasCantidadDePersonas;
	var contadorQr;
	var contadorEfete;
	var contadorTarjeta;
	var formaDePagoMasUtilizada;
	var promedio;
	var acumulador;


	respuesta="si";
	contador=0;
	contadorQr=0;
	contadorTarjeta=0;
	contadorEfete=0;
	acumulador=0;

	while(respuesta=="si")
	{
		do
		{
			nombre=prompt("ingrese el nombre del huésped");
		}while(!isNaN(nombre));

		do
		{
			cantidadDePersonas=prompt("ingrese la cantidad de personas");
			cantidadDePersonas=parseInt(cantidadDePersonas);
		}while(isNaN(cantidadDePersonas)||cantidadDePersonas<1);

		do
		{
			cantidadDeDias=prompt("ingrese la cantidad de dias");
			cantidadDeDias=parseInt(cantidadDeDias);
		}while(isNaN(cantidadDeDias)||cantidadDeDias<1);

		do
		{
			formaDePago=prompt("ingrese la forma de pago");
		}while(!isNaN(formaDePago)||formaDePago!="efete" && formaDePago!="tarjeta" && formaDePago!="qr");

		if(contador==0||maximoDePersonas<cantidadDePersonas)
		{
			maximoDePersonas=cantidadDePersonas;
			maximoDePersonasNombre=nombre;
		}

		if(contador==0||maximoDeDias<cantidadDeDias)
		{
			maximoDeDias=cantidadDeDias;
			maximoDeDiasCantidadDePersonas=cantidadDePersonas;
		}

		switch(formaDePago)
		{
			case "qr":
			contadorQr++;
			break;

			case "tarjeta":
			contadorTarjeta++;
			break;

			case "efete":
			contadorEfete++;
			break;
		}

		if(contadorQr>contadorTarjeta && contadorQr>contadorEfete)
		{
			formaDePagoMasUtilizada="qr";
		}else
		{
			if(contadorEfete>contadorTarjeta)
			{
				formaDePagoMasUtilizada="efete";
			}else
			{
				formaDePagoMasUtilizada="tarjeta";
			}
		}
		acumulador=acumulador+cantidadDeDias;
		contador++;
		respuesta=prompt("desea continuar?");
	}

	promedio=acumulador/contador;

	document.write("<br> huesped que trajo mas personas: "+maximoDePersonasNombre);
	document.write("<br> cantidad de personas que se quedaron mas dias: "+maximoDeDiasCantidadDePersonas);
	document.write("<br> forma de pago mas utilizada: "+formaDePagoMasUtilizada);
	document.write("<br> promedio de dias por reserva: "+promedio);

}
