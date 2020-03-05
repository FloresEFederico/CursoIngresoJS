/*Bienvenidos.
Realizar el algoritmo que permita ingresar:
-el nombre de un estudiante, la edad (validar), el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino*/

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var notaDelFinal;
	var respuesta;
	var cantidadVaronesAprobados;
	var promedioDeNotaMenoresDeEdad;
	var contadorDeMenoresDeEdad;
	var acumuladorDeMenoresDeEdad;
	var promedioDeNotaAdolescentes;
	var contadorDeAdolescentes;
	var acumuladorDeAdolescentes;
	var promedioDeNotaMayoresDeEdad;
	var contadorDeMayoresDeEdad;
	var acumuladorDeMayoresDeEdad;
	var promedioDeVarones;
	var contadorDeVarones;
	var acumuladorDeVarones;
	var promedioDeMujeres;
	var acumuladorDeMujeres;
	var contadorDeMujeres;




	respuesta="si";
	cantidadVaronesAprobados=0;
	contadorDeMenoresDeEdad=0;
	acumuladorDeMenoresDeEdad=0;
	contadorDeAdolescentes=0;
	acumuladorDeAdolescentes=0;
	contadorDeMayoresDeEdad=0;
	acumuladorDeMayoresDeEdad=0;
	contadorDeVarones=0;
	acumuladorDeVarones=0;
	contadorDeMujeres=0;
	acumuladorDeMujeres=0;

	while(respuesta=="si")
	{
		do
		{
			nombre=prompt("ingrese el nombre del estudiante");
		}while(!isNaN(nombre));

		do
		{
			edad=prompt("ingrese su edad");
			edad=parseInt(edad);
		}while(isNaN(edad)|| edad<10);

		do
		{
			sexo=prompt("ingrese sexo entre m o f");
		}while(!isNaN(sexo)|| sexo!="f" && sexo!="m");

		do
		{
			notaDelFinal=prompt("ingrese la nota del final");
			notaDelFinal=parseInt(notaDelFinal);
		}while(isNaN(notaDelFinal)|| notaDelFinal<1 || notaDelFinal>10);

		if(sexo=="m" && notaDelFinal>5)
		{
			cantidadVaronesAprobados++;
		}

		if(edad<13)
		{
			acumuladorDeMenoresDeEdad=acumuladorDeMenoresDeEdad+notaDelFinal;
			contadorDeMenoresDeEdad++;
		}else
		{
			if(edad>18)
			{
				acumuladorDeMayoresDeEdad=acumuladorDeMayoresDeEdad+notaDelFinal;
				contadorDeMayoresDeEdad++;
			}else
			{
				acumuladorDeAdolescentes=acumuladorDeAdolescentes+notaDelFinal;
				contadorDeAdolescentes++;
			}
		}

		if(sexo=="f")
		{
			acumuladorDeMujeres=acumuladorDeMujeres+notaDelFinal;
			contadorDeMujeres++;
		}

		if(sexo=="m")
		{
			acumuladorDeVarones=acumuladorDeVarones+notaDelFinal;
			contadorDeVarones++;
		}
		console.log(acumuladorDeVarones);
		console.log(contadorDeVarones);

		respuesta=prompt("desea continuar?");
	}

	promedioDeNotaMenoresDeEdad=acumuladorDeMenoresDeEdad/contadorDeMenoresDeEdad;
	promedioDeNotaAdolescentes=acumuladorDeAdolescentes/contadorDeAdolescentes;
	promedioDeNotaMayoresDeEdad=acumuladorDeMayoresDeEdad/contadorDeMayoresDeEdad;
	promedioDeMujeres=acumuladorDeMujeres/contadorDeMujeres;
	promedioDeVarones=acumuladorDeVarones/contadorDeVarones;


	document.write("<br> cantidad de varones aprobados: "+cantidadVaronesAprobados);
	document.write("<br> promedio de menores de edad: "+promedioDeNotaMenoresDeEdad);
	document.write("<br> promedio de adolescentes: "+promedioDeNotaAdolescentes);
	document.write("<br> promedioDeNotaMayoresDeEdad: "+promedioDeNotaMayoresDeEdad);
	document.write("<br> promedio de mujeres: "+promedioDeMujeres);
	document.write("<br> promedio de varones: "+promedioDeVarones);
}
