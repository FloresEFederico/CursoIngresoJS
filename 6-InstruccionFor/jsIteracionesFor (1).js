function mostrar()
{

	var contador;

//	contador=0;

//	while(contador<10)
//	{
//		console.log(contador);
//		contador++;
//	} este while es lo mismo que este for;

	contador=0
	for(;;) // "contador<10 es la logica" se puede sacar la logica pero se le agrega un ; al contador++; y con el break; rompo.
	{	

		console.log("for "+contador);
		contador ++;
		

		if(contador==10) //si no quiero que me rompa una vez, debo poner si el control es igual a 10, break. ahi hace diez vueltas y no rompe.
		{
			break;
		}
		
	}




















//	var contador;

//	contador=0;

//	do  //la diferencia del do entra minimamente una vez
//	{
//		console.log(contador); //del cero al 9
//		contador++;//contador=contador+1; //lo mismo, cualquiera de las dos esta bien
//		console.log(contador); //del 1 al 10
	
//	}while(contador<10); //cerrar con "  ;  " asi evitamos que el codigo piense que seguimos usando el while
}