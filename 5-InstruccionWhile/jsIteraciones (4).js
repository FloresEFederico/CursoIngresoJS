function mostrar()
{

	var numero; 

	numero=prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);
	var valorDeVerdad=isNaN(numero);

	while(isNaN(numero) || numero<0 || numero>10)
	{
		numero=prompt("ingrese un numero entre 0 y 10");
		numero=parseInt(numero);
	}
	document.getElementById('Numero').value=numero;
}//FIN DE LA FUNCIÓN