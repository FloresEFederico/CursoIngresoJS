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
	var maximoCantidadDePersonas;
	var maximoCantidadDePersonasNombre;
	var contador;
	var maximoCantidadDeDias;
	var maximoCantidadDeDiasCantidadDePersonas;
	var contadorQr;
	var contadorTarjeta;
	var contadorEfete;
	var formaDePagoMasUtilizada;
	var acumulador;
	var promedio;

	respuesta="si";
	maximoCantidadDePersonas=0;
	contador=0;
	maximoCantidadDeDias=0;
	contadorQr=0;
	contadorEfete=0;
	contadorTarjeta=0;
	acumulador=0;

	while(respuesta=="si")
	{
		do
		{
			nombre=prompt("ingrese nombre");
		}while(!isNaN(nombre));

		do
		{
			cantidadDePersonas=prompt("ingrese la cantidad de personas");
			cantidadDePersonas=parseInt(cantidadDePersonas);
		}while(isNaN(cantidadDePersonas)|| cantidadDePersonas<1);
		
		do
		{
			cantidadDeDias=prompt("ingrese la cantidad de dias");
			cantidadDeDias=parseInt(cantidadDeDias);
		}while(isNaN(cantidadDeDias)|| cantidadDeDias<1);

		do
		{
			formaDePago=prompt("ingrese forma De Pago");
		}while(!isNaN(formaDePago));
		
		if(contador==0 || cantidadDePersonas>maximoCantidadDePersonas)
		{
			maximoCantidadDePersonas=cantidadDePersonas;
			maximoCantidadDePersonasNombre=nombre;
		}
		
		if(contador==0 || cantidadDeDias>maximoCantidadDeDias)
		{
			maximoCantidadDeDias=cantidadDeDias;
			maximoCantidadDeDiasCantidadDePersonas=cantidadDePersonas;
		}
		
		switch(formaDePago)
		{
			case "qr":
			contadorQr++;
			break;

			case "tarjeta":
			contadorTarjeta++;
			break;

			default:
			contadorEfete++;
			break;
		}
		
		if(contadorQr>contadorTarjeta && contadorQr>contadorEfete)
		{
			formaDePagoMasUtilizada="qr";
		}else
		{
			if(contadorTarjeta>contadorEfete)
			{
				formaDePagoMasUtilizada="tarjeta";
			}else
			{
				formaDePagoMasUtilizada="efete";
			}
		}

		contador++;
		acumulador=acumulador+cantidadDeDias;
		respuesta=prompt("desea continuar?");
	}
	promedio=acumulador/contador;

	console.info("nombre de huesped con mayor cantidad de personas: "+maximoCantidadDePersonasNombre);
	console.info("cantidad de personas mayor cantidad de dias: "+maximoCantidadDeDiasCantidadDePersonas);
	console.info("forma de pago mas utilizada: "+formaDePagoMasUtilizada);
	console.info("promedio de dias: "+promedio);
}
