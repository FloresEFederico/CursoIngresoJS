/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

function NumerosPares ()
{
	var numeroIngresado;
	var i;
	var numPares;

	numeroIngresado=document.getElementById('numero').value;
 	numeroIngresado=parseInt(numeroIngresado);
 	numPares=0;

	for(i=0;i<=numeroIngresado;i++)
	{
		if(i%2==0)
		{
			numPares++;
		}
	}
	alert(numPares);
}

function NumerosImpares()
{
	var numeroIngresado;
	var i;
	var numImpares;

	numeroIngresado=document.getElementById('numero').value;
 	numeroIngresado=parseInt(numeroIngresado);
 	numImpares=0;

	for(i=0;i<=numeroIngresado;i++)
	{
		if(i%2!=0)
		{
			numImpares++;
		}
	}	
	alert(numImpares);


}

function NumerosDivisibles()
{
	var numeroIngresado;
	var i;
	var divisor;
	divisor=0;

	numeroIngresado=document.getElementById('numero').value;
 	numeroIngresado=parseInt(numeroIngresado);

	while(numeroIngresado<1||numeroIngresado>100)
 	{
 		numeroIngresado=prompt("numero invalido! tiene que ser del 1 al 100");	
 	}
	 	
	 	for(i=1;i<=numeroIngresado;i++)
	 	{
	 		if(numeroIngresado%i==0)
	 		{
	 			divisor++;
	 		}
	 	}

	 alert(divisor);
}

function VerificarPrimo()
{	
	var numeroIngresado;
	var i;
	var numPrimo;
	numPrimo=0;

	numeroIngresado=document.getElementById('numero').value;
 	numeroIngresado=parseInt(numeroIngresado);

	for(i=1;i<=numeroIngresado;i++)
	 	{
	 		if(numeroIngresado%i==0)
	 		{
	 			numPrimo++;
	 		}
	 	}
	 	if(numPrimo==2)
	 	{
	 		alert("El numero ingresado es primo.");
	 	}else
	 	{
	 		alert("No es un numero primo.");
	 	}

}
function NumerosPrimos()
{
	var numeroIngresado;
	var i;
	var numPrimoCantidad;
	numPrimoCantidad=0;
	var x;
	var contDivisor;
	contDivisor=0;

	numeroIngresado=document.getElementById('numero').value;
 	numeroIngresado=parseInt(numeroIngresado);

	 for(i=0 ; i<=numeroIngresado ; i++)
	 {
	 	//ANALIZO SI EL NUMERO ES PRIMO Y LO CUENTO
	 	for( x=1 ; x<=i ; x++)
	 	{
	 		if(i%x==0)
	 		{
	 			contDivisor++;
	 		}
	 	}
	 	if(contDivisor==2)
	 	{
	 		numPrimoCantidad++;
	 	}
	 	//FIN DEL ANALISIS DEL NUMERO
	 	contDivisor=0;
	 }

	 alert(numPrimoCantidad);

}