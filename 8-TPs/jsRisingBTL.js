/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldoBruto;
 	var legajo;
 	var nacionalidad;

 	edad=prompt("ingrese su edad");
 	edad=parseInt(edad);

 	while(edad<18 || edad>90)
 	{	
 		alert("edad no valida!");
 		edad=prompt("ingrese su edad nuevamente");
 	}
 	
 	sexo=prompt("ingrese su sexo");

 	while(sexo!="f" && sexo!="m")
 	{
 		alert("error!");
 		sexo=prompt("ingrese su sexo nuevamente. f o m");
 	}
 	
 	estadoCivil=prompt("ingrese su estado civil: 1-para Soltero, 2-para casados, 3-para divorciados, 4-para viudos")
 	estadoCivil=parseInt(estadoCivil);

 	while(estadoCivil>4 || estadoCivil==0)
 	{
 		alert("error");
 		estadoCivil=prompt("ingrese su estado civil: 1-para Soltero, 2-para casados, 3-para divorciados, 4-para viudos");
 	}	
 		switch(estadoCivil)
 		{
 			case 1:
 			estadoCivil="Soltero";
 			break;

 			case 2:
 			estadoCivil="Casado";
 			break;

 			case 3:
 			estadoCivil="Divorciado";
 			break;

 			case 4:
 			estadoCivil="Viudo";
 			break;			
 		}

 	sueldoBruto=prompt("ingrese su sueldo");	
 	sueldoBruto=parseInt(sueldoBruto);

 	while(sueldoBruto<8000)
 	{
 		alert("error! Su sueldo no puede ser menor a 8000");
 		sueldoBruto=prompt("por favor ingrese un sueldo mayor");
 	}

 	legajo=prompt("ingrese su numero de legajo, sin ceros a la izquierda");
 	legajo=parseInt(legajo);

 	while(legajo<1000 || legajo>9999)
 	{
 		alert("numero de legajo invalido!");
 		legajo=prompt("intente nuevamente");
 	}

 	nacionalidad=prompt("ingrese su nacionalidad. 'A' para Argentino, 'E' para extranjero, 'N' para nacionalizado");

 	while(nacionalidad!='A' && nacionalidad!='E' && nacionalidad!='N')
 	{
 		alert("error.");
 		nacionalidad=prompt("ingrese su nacionalidad nuevamente");
 	}
 	switch(nacionalidad)
 	{
 		case 'A':
 		nacionalidad="Argentino";
 			break;

 		case 'E':
 		nacionalidad="Extranjero";
 			break;

 		case 'N':
 		nacionalidad="Nacionalizado";
 			break;		
 	}

 	document.getElementById('Edad').value=edad;
 	document.getElementById('Sexo').value=sexo;
 	document.getElementById('EstadoCivil').value=estadoCivil;
 	document.getElementById('Sueldo').value=sueldoBruto;
 	document.getElementById('Legajo').value=legajo;
 	document.getElementById('Nacionalidad').value=nacionalidad;
}
