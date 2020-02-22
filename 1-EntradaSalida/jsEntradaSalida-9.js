/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var aumento;
	var resultado;

	importe=document.getElementById('sueldo').value;
	importe=parseInt(importe);
	aumento=importe*10/100;
	aumento=parseInt(aumento);

	resultado=importe+aumento;

	document.getElementById('resultado').value=resultado;	
}
