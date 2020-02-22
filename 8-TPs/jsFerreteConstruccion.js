/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;

	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	perimetro=(largo*2+ancho*2)*3;

	alert("la cantidad de alambre que necesitara comprar es de " + perimetro);
}
function Circulo () 
{
	var radio;
	var perimetro;

	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);

	perimetro=(2*3.14*radio)*3;

	alert("la cantidad de alambre es de " + perimetro);	
}
function Materiales () 
{
	var largo;
	var ancho;
	var area;
	var cemento;
	var cal;

	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	area=largo*ancho;

	cemento=area*2;
	cemento=parseInt(cemento);
	cal=area*3;
	cal=parseInt(cal);

	alert("se necesitaran " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");

}