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
	var respuesta;	
	var maximoDePersonas;
	var maximoDePersonasNombre;
	var contador;
	var acumulador;
	var promedio;
	var maximoDeDias;
	var maximoDeDiasCantidadDePersonas;
	var contadorQR;
	var contadorTarjeta;
	var contadorEfete;
	var formaDePagoMasUtilizada;

	respuesta="si";
	contador=0;
	contadorQR=0;
	contadorTarjeta=0;
	contadorEfete=0;
	acumulador=0;


	while(respuesta=="si")
	{
		do
		{
			nombre=prompt("Ingrese el nombre");
		}while(!isNaN(nombre));
		


		cantidadDePersonas=prompt("ingrese la cantidad de personas"); /*utilizando do/while se puede tener una linea menos*/ 
		cantidadDePersonas=parseInt(cantidadDePersonas);
		while(isNaN(cantidadDePersonas)|| cantidadDePersonas<1)	/*do*/
		{
			cantidadDePersonas=prompt("ingrese cantidad de personas nuevamente");
			cantidadDePersonas=parseInt(cantidadDePersonas);
		}
		/*while(isNaN(cantidadDePersonas)|| cantidadDePersonas<1); !!NO OLVIDARSE DEL ; AL FINAL!!*/

		cantidadDeDias=prompt("ingrese la cantidad de dias");
		cantidadDeDias=parseInt(cantidadDeDias);
		while(isNaN(cantidadDeDias)||cantidadDeDias<1)
		{
			cantidadDeDias=prompt("ingrese la cantidad de dias nuevamente");
			cantidadDeDias=parseInt(cantidadDeDias);
		}

		formaDePago=prompt("ingrese la forma de pago");
		while(!isNaN(formaDePago)||formaDePago!="efectivo" && formaDePago!="tarjeta" && formaDePago!="qr")
		{
			formaDePago=prompt("ingrese la forma de pago nuevamente");			
		}

		console.log("nombre es: "+nombre);
		console.log("cantidadDePersonas: "+cantidadDePersonas);
		console.log("cantidadDeDias: "+cantidadDeDias);
		console.log("formaDePago: "+formaDePago);

		if(contador==0||maximoDePersonas<cantidadDePersonas)								/*if (contador==0 ||maximoDePersonas<cantidadDePersonas)*/
		{
			maximoDePersonas=cantidadDePersonas;
			maximoDePersonasNombre=nombre;
		}

		if(contador==0||maximoDeDias<cantidadDeDias)								/*if (contador==0 ||maximoDeDias<cantidadDeDias)*/
		{
			maximoDeDias=cantidadDeDias;
			maximoDeDiasCantidadDePersonas=cantidadDePersonas;
		}

		switch(formaDePago)
		{
			case "efete":
				contadorEfete++;
				break;

			case "tarjeta":
				contadorTarjeta++;
				break;

			default:
				contadorQR++;		
				break;
		}
		acumulador=acumulador+cantidadDeDias;		
		contador++
		respuesta=prompt("desea continuar?");
	}//termina el while

	if(contadorEfete>contadorTarjeta && contadorEfete>contadorQR)
	{		
		formaDePagoMasUtilizada="efete";		
	}else
	{
		if(contadorQR>contadorTarjeta)
		{
			formaDePagoMasUtilizada="qr";

		}else
		{
			formaDePagoMasUtilizada="tarjeta";
		}
	}

	promedio=acumulador/contador;
	console.log("maximo de personas: "+maximoDePersonasNombre);
	console.log("maximo de dias "+maximoDeDiasCantidadDePersonas);
	console.log("maxima forma de pago: "+formaDePagoMasUtilizada); 
	console.log("promedio de cantidad de personas : "+promedio);

	document.write("<br> nombre del huesped con mas invitados: "+maximoDePersonasNombre);
	document.write("<br> maximo de dias de cantidad de personas: "+maximoDeDiasCantidadDePersonas);
	document.write("<br> maxima forma de pago por persona: "+formaDePagoMasUtilizada);
}
