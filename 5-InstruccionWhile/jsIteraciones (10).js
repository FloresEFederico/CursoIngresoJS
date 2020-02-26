function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		
	
	}




}//FIN DE LA FUNCIÓN
var contador;
	var acumulador;
	var numeroIngresado;
	var contadorPares;
	var maximo;
	var minimo;
	var nombre;
	var sexo;
	var bandera;
	var maximoSexo;
	var maximoNombre;

// las inicializaciones se pueden hacer junto a la var, pero es conveniente ponerlas por separado.
	//inicializaciones
	contador=0;
	acumulador=0;
	//bandera="no es valor ";
	contadorPares=0;

	while(contador<10)
	{
		contador=contador+1;
		numeroIngresado=prompt("ingrese el "+contador+"ª numero ");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado) || numeroIngresado<0 || numeroIngresado>10 )
		{
			numeroIngresado=prompt("Error, ingrese el "+contador+"ª numero");
			numeroIngresado=parseInt(numeroIngresado);
		}

		sexo=prompt("ingrese el sexo");
		while(isNaN(sexo) || sexo!="f" && sexo!="m")
		{
			sexo=prompt("Error, ingrese el sexo");
		}
		nombre=prompt("ingrese el nombre");
		while(isNaN(nombre))
		{
			sexo=prompt("Error, ingrese el nombre");
		}
		acumulador=acumulador+numeroIngresado;

		if(numeroIngresado%2==0)
		{
			contadorPares=contadorPares+1;
		}

		if(contador==1)//if(bandera=="no es valor ");
					//		{
					//			bandera="otro valor";
					//		}
		{
			maximo=numeroIngresado;
			minimo=numeroIngresado;
		}else
		{
			if(maximo<numeroIngresado)
			{
				maximo=numeroIngresado;
				maximoSexo=sexo;
				maximoNombre=nombre;
			}
			if(minimo>numeroIngresado)
			{
				minimo=numeroIngresado;
			}
		}
		//Forma simple de maximo/minimo;	
		if(maximo<numeroIngresado || contador==1)
		{
			maximo=numeroIngresado;
		}
		if(minimo>numeroIngresado || contador ==1)
		{
			minimo=numeroIngresado;
		}	
	}	
