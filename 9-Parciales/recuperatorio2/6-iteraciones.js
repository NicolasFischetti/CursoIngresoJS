//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//6-Realizar el algoritmo que al presionar el bot&oacute;n "Mostrar" 
	// pida el importe de las ventas (validar que sea mayor a 0,”cero”) de los 7 días de la semana por prompt (una por día), e informar cual fue el mayor importe y cuál fue el menor importe de venta
	
	var importe;
	var contador= 0;
	var maximporte;
	var minimporte;

	while (contador < 7)
	{
		contador++;
		importe= prompt("Ingrese su importe del dia: "+contador);
		importe= parseInt(importe);

		while(importe < 0 || isNaN(importe))
		{
			importe=prompt("Ingrese su importe nuevamente");
			importe= parseInt(importe);
		}

		if (contador == 1)
		{
			maximporte= importe;
			minimporte= importe;
		}
		else if (minimporte > importe)

		{
			minimporte= importe;
		}	
		else if (maximporte < importe)
		{
			maximporte= importe;
		}	


	}

	alert("El menor importe es: "+minimporte);
	alert("El mayor importe es: "+maximporte);
		

}

