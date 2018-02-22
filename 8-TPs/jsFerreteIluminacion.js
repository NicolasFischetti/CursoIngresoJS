/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	
	var lamparitas= 35;
	var cantidad;
	var marca;
	var preciodescuento50;
	var preciodescuento40;
	var preciodescuento30;
	var preciodescuento25;
	var preciodescuento15;
	var preciodescuento10;
	var preciodescuento5;
	var descuento50;
	var descuento40;
	var descuento30;
	var descuento25;
	var descuento20;
	var descuento15;
	var descuento10;
	var descuento5;
	var preciosindescuento;
	var ArgentinaLuz;
	
	

	cantidad= document.getElementById('Cantidad').value;
	marca= document.getElementById("Marca").value;
	
	

	


	lamparitas= parseInt(lamparitas);
	cantidad= parseInt(cantidad);
	preciodescuento50= parseInt(preciodescuento50);
	preciodescuento40= parseInt(preciodescuento40);
	preciodescuento30= parseInt(preciodescuento30);
	preciodescuento25= parseInt(preciodescuento25);
	preciodescuento15= parseInt(preciodescuento15);
	preciodescuento10= parseInt(preciodescuento10);
	preciodescuento5= parseInt(preciodescuento5);
	preciosindescuento= parseInt(preciosindescuento);
	descuento50= parseInt(descuento50);
	descuento40= parseInt(descuento40);
	descuento30= parseInt(descuento30);
	descuento25= parseInt(descuento25);
	descuento20= parseInt(descuento20);
	descuento15= parseInt(descuento15);
	descuento10= parseInt(descuento10);
	descuento5= parseInt(descuento5);
	ArgentinaLuz=parseInt(ArgentinaLuz);
	

	


	preciosindescuento= (lamparitas * cantidad);

	descuento50= (preciosindescuento * 50) / 100;

	preciodescuento50= preciosindescuento - descuento50;




	descuento40= (preciosindescuento * 40) / 100;

	preciodescuento40= (preciosindescuento - descuento40);



	descuento30= (preciosindescuento * 30) / 100;

	preciodescuento30= (preciosindescuento - descuento30);



	descuento25= (preciosindescuento * 25) / 100;

	preciodescuento25= (preciosindescuento - descuento25);



	descuento20= (preciosindescuento * 20) / 100;

	preciodescuento20= (preciosindescuento - descuento20);



	descuento15= (preciosindescuento * 15) / 100;

	preciodescuento15= (preciosindescuento - descuento15);



	descuento10= (preciosindescuento * 10) / 100;

	preciodescuento10= (preciosindescuento - descuento10);



	descuento5= (preciosindescuento * 5) / 100;

	preciodescuento5= (preciosindescuento - descuento5);







	if (cantidad >= 6) 

	{	

		document.getElementById("precioDescuento").value= preciodescuento50;
		

	}

	else 

	{

	}


	if (cantidad == 5 && ArgentinaLuz == preciodescuento40)
	
	{
		
		ArgentinaLuz= document.getElementById("Marca").value;
		document.getElementById("precioDescuento").value= preciodescuento40;

	}


	else
	{

	}


	

		


	
		
	

	

	





}
