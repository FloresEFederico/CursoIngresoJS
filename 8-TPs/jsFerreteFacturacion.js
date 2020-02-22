/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno=document.getElementById('PrecioUno').value;
	precioUno=parseInt(precioUno);
	precioDos=document.getElementById('PrecioDos').value;
	precioDos=parseInt(precioDos);
	precioTres=document.getElementById('PrecioTres').value;
	precioTres=parseInt(precioTres);

	resultado=precioUno+precioDos+precioTres;

	alert("su suma es de " + resultado);

}	
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;

	precioUno=document.getElementById('PrecioUno').value;
	precioUno=parseInt(precioUno);
	precioDos=document.getElementById('PrecioDos').value;
	precioDos=parseInt(precioDos);
	precioTres=document.getElementById('PrecioTres').value;
	precioTres=parseInt(precioTres);

	promedio=(precioUno+precioDos+precioTres)/3;

	alert("su promedio es de " + promedio);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var impuesto;
	var resultado;

	precioUno=document.getElementById('PrecioUno').value;
	precioUno=parseInt(precioUno);
	precioDos=document.getElementById('PrecioDos').value;
	precioDos=parseInt(precioDos);
	precioTres=document.getElementById('PrecioTres').value;
	precioTres=parseInt(precioTres);

	impuesto=(precioUno+precioDos+precioTres)*21/100;

	resultado=precioUno+precioDos+precioTres+impuesto;

	alert("su precio final es de " + resultado);
}