function mostrar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero=prompt("ingrese el primer numero");
	segundoNumero=prompt("ingrese el segundo numero");

	if(primerNumero==segundoNumero)
	{
		resultado=primerNumero+segundoNumero;
	}else
	{	
		primerNumero=parseInt(primerNumero);
		segundoNumero=parseInt(segundoNumero);
		
		if(primerNumero<segundoNumero)
		{				
			resultado=primerNumero-segundoNumero;
		}else
		{
			resultado=primerNumero+segundoNumero;		
		}	
	}

	if(resultado>10)
	{
		alert("su resultado es de " + resultado + " y supero el 10");
	}else
	{
		alert("su resultado es de " + resultado);
	}	
}