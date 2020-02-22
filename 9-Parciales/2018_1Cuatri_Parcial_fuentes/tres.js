function mostrar()
{
	var importe;
	var descuento;
	var resultado;

	importe=prompt("ingrese su precio");
	importe=parseInt(importe);

	descuento=prompt("ingrese su descuento ");
	descuento=importe*descuento/100;
	descuento=parseInt(descuento);

	resultado=importe-descuento;

	document.getElementById('elPrecioFinal').value=resultado;
}
