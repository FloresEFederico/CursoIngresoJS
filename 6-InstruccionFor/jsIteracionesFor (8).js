function mostrar()
{
	var numeroIngresado;
	var i;
	var bandera; //cambiar nombre a contador

	numeroIngresado=prompt("ingrese numero");
	numeroIngresado=parseInt(numeroIngresado);
	bandera=0;

	for(i=2;i<numeroIngresado;i++)
	{	
		console.log(i);
		if(numeroIngresado%i==0)
		{
			bandera=1; //o bandera++ o bandera=bandera+1;
			break;	
		}
	}

	if(bandera==0)
	{
		alert("es primo el numero: "+numeroIngresado);
	}

}//FIN DE LA FUNCIÓN