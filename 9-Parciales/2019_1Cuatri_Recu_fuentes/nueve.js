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
	var contador;
	var contadorDeMenoresDeEdad;
	var contadorDeAdolescentes;
	var contadorDeMayores;
	var contadorDeSexoFemenino;
	var contadorDeSexoMasculino;
	var acumulador;
	var acumuladorDeMenoresDeEdad;
	var acumuladorDeMayores;
	var acumuladorDeAdolescentes;
	var acumuladorDeSexoFemenino;
	var acumuladorDeSexoMasculino;
	var promedioDeNotasDeMenoresDeEdad;
	var promedioDeAdolescentes;
	var promedioDeMayores;
	var promedioDeNotasDeSexoMasculino;
	var promedioDeNotasDeSexoFemenino;

	respuesta="si";
	contador=0;
	acumulador=0;
	cantidadVaronesAprobados=0;
	acumuladorDeMenoresDeEdad=0;
	contadorDeMenoresDeEdad=0;
	acumuladorDeAdolescentes=0;
	contadorDeAdolescentes=0;
	acumuladorDeMayores=0;
	contadorDeMayores=0;
	acumuladorDeSexoFemenino=0;
	acumuladorDeSexoMasculino=0;

	while(respuesta=="si")
	{
		nombre=prompt("ingrese el nombre del estudiante");

		do
		{
			edad=prompt("ingrese la edad");
			edad=parseInt(edad);

		}while(isNaN(edad)|| edad<7 ||edad>80);

		
		do
		{
			sexo=prompt("ingrese sexo m o f");

		}while(!isNaN(sexo)|| sexo!="f" && sexo!="m");

		do
		{
			notaDelFinal=prompt("ingrese la nota del final");
			notaDelFinal=parseInt(notaDelFinal);

		}while(isNaN(notaDelFinal)|| notaDelFinal<1 ||notaDelFinal>10);

		if(notaDelFinal>5 && sexo=="m")
		{
			cantidadVaronesAprobados++;
		}

		if(edad<13)	
		{
			acumuladorDeMenoresDeEdad=acumuladorDeMenoresDeEdad+notaDelFinal;
			contadorDeMenoresDeEdad++;		
		}else
		{
			if(edad>17)	
			{
				acumuladorDeMayores=acumuladorDeMayores+notaDelFinal;
				contadorDeMayores++;	
			}else
			{
				acumuladorDeAdolescentes=acumuladorDeAdolescentes+notaDelFinal;
				contadorDeAdolescentes++;
			}
		}//edades de menores, mayores y adolescentes.

		if(sexo=="f")
		{
			acumuladorDeSexoFemenino=acumuladorDeSexoFemenino+notaDelFinal;
			contadorDeSexoFemenino++;
		}else
		{
			acumuladorDeSexoMasculino=acumuladorDeSexoMasculino+notaDelFinal;
			contadorDeSexoMasculino++;
		}

		acumulador=acumulador+notaDelFinal;
		contador++;
		respuesta=prompt("desea continuar?");
	
	}//fin del while

	promedioDeNotasDeMenoresDeEdad=acumuladorDeMenoresDeEdad/contadorDeMenoresDeEdad;
	promedioDeAdolescentes=acumuladorDeAdolescentes/contadorDeAdolescentes;
	promedioDeMayores=acumuladorDeMayores/contadorDeMayores;
	promedioDeNotasDeSexoFemenino=acumuladorDeSexoFemenino/contadorDeSexoFemenino;
	promedioDeNotasDeSexoMasculino=acumuladorDeSexoMasculino/contadorDeSexoMasculino;

	document.write("<br> cantidad de varones aprobados "+cantidadVaronesAprobados);
	document.write("<br> promedio de notas de los menores de edad: "+promedioDeNotasDeMenoresDeEdad);
	document.write("<br> promedio de notas de adolescentes: "+promedioDeAdolescentes);
	document.write("<br> promedio de notas de mayores: "+promedioDeMayores);
	document.write("<br> promedio de notas de mujeres: "+promedioDeNotasDeSexoFemenino);
	document.write("<br> promedio de notas de hombres: "+promedioDeNotasDeSexoMasculino);
	

	


}
