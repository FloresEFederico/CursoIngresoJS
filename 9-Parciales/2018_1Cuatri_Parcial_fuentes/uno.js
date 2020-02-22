
function mostrar()
{
	var base;
	var altura;
	var perimetro;

	base=prompt("ingrese el largo del rectangulo");
	base=parseInt(base);

	altura=prompt("ingrese el ancho del rectangulo");
	altura=parseInt(altura);

	perimetro=(base+altura)*2;

	alert("su perimetro es de " + perimetro);
}
