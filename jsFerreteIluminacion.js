/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y
 si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lamparas;
 	var marca;
 	var impuesto;
 	var precioFinal;
 	var precioBruto;
 	var porcentaje;
 	var iibb;

 	lamparas=document.getElementById('Cantidad').value;
 	lamparas=parseInt(lamparas);
	precioBruto=lamparas*35;
 	marca=document.getElementById('Marca').value;
 	porcentaje=0;
 	iibb=0;

 	if(lamparas>5)
 	{
 		porcentaje=50;
 	}else
 	{
 		if(lamparas==5)
 		{
 			if(marca=="ArgentinaLuz")
 			{
 				porcentaje=40;
 			}else
 			{
 				porcentaje=30;
 			}
 		}else
 		{
 			if(lamparas==4)
 			{
 				if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
 				{
 					porcentaje=25;
 				}else
 				{
 					porcentaje=20;
 				}
 			}else
 			{
 				if(lamparas==3)
 				{
 					if(marca=="ArgentinaLuz")
 					{
 						porcentaje=15;
 					}else
 					{
 						if(marca=="FelipeLamparas")
 						{
 							porcentaje=10;
 						}else
 						{
 							porcentaje=5;
 						}
 					}
 				}
 			}
 		}
 	}

 	precioFinal=precioBruto-(precioBruto*porcentaje/100);
 	
 		if(precioFinal>120)
 		{
 			iibb=precioFinal*10/100;
 			alert("iibb= " + iibb);
 		}
 		precioFinal=precioFinal+iibb;
 		document.getElementById('precioDescuento').value=precioFinal;
}
