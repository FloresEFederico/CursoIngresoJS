function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio=prompt("ingrese el precio");
	precio=parseInt(precio);

	descuento=prompt("ingrese el porcentaje de descuento que desee");
	descuento=parseInt(descuento);
	descuento=precio*descuento/100;

	precioFinal=precio-descuento;

	document.getElementById('elPrecioFinal').value=precioFinal;

}

