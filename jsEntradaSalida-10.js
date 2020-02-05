/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var resultado;

	importe=document.getElementById('importe').value;
	importe=parseInt(importe);
	descuento=importe-importe*descuento/100;

	resultado=importe-descuento;

	document.getElementById('resultado').value=resultado;
	
}
//precio con descuento= precio- precio * por desc/100  //
//precio por impuestos= precio + precio * aumento/100  //

//ejercicio 10//

	var importe;
	var porcentaje;
	var	resultado;

	importe=document.getElementById('importe').value;
	importe=parseInt(importe);
	
	porcentaje=(25*importe)/100;

	resultado=importe-porcentaje;
	document.getElementById('resultado').value=resultado;