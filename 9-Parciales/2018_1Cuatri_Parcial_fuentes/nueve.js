function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var cantPares;
	var marcaPesado;
	var canTemp;
	var promedioPeso;
	var sumaDePesos;
	var maximo;
	var minimo;
	var contador;
	var respuesta;

	cantPares=0;
	canTemp=0;
	contador=0;
	maximo=0;
	minimo=0;
	sumaDePesos=0;
	respuesta="si";

	while(respuesta=="si")
	{	
		contador++;
		marca=prompt("Por favor, ingrese una marca");

		peso=prompt("Por favor, ingrese su peso (debe ser entre 1 y 100");
		while(isNaN(peso)||peso<1 || peso>100)
		{
			peso=prompt("peso Invalido! Tiene que ser un numero entre 1 y 100!");

		}
		peso=parseInt(peso);
		sumaDePesos=sumaDePesos+peso;

		temperatura=prompt("Ingrese la temperatura de almacenamiento (solo puede ser entre -30 y 30)");

		while(isNaN(temperatura)||temperatura<-30||temperatura>30)
		{
			temperatura=prompt("ingreso invalido! entre -30 y 30");
		}
		temperatura=parseInt(temperatura);	

		if(temperatura%2==0)
		{
			cantPares++;
		}
		if(contador==1)
		{
			maximo=peso;
			minimo=peso;
			marcaPesado=marca;
		}else
		{
			if(peso>maximo)
			{
				maximo=peso;
				marcaPesado=marca;
			}
			if(peso<minimo)
			{
				minimo=peso;				
			}		
		}

		if(temperatura<0)
		{
			canTemp++;
		}
		respuesta=prompt("seguir? si/no");		
	}
	promedioPeso=sumaDePesos/contador;

	document.write("Cantidad de numeros pares "+cantPares+" <br>");
	document.write("Marca del producto mas pesa'o "+marcaPesado+" <br> ");
	document.write("cantidad de productos que se conservan a menos de cero grados "+canTemp+" <br>");
	document.write("promedio del peso de todos los productos "+promedioPeso+" <br> ");
	document.write("el peso maximo "+maximo+" y el minimo "+minimo+" <br>");
}
