function Mostrar()
{
	//Realizar el algoritmo que pida el importe de las ventas (validar que sea mayor a 0,”cero”) de los 24 días
	//hábiles del mes por prompt (una por día), e informar cual fue el mayor importe y cuál fue el menor
	//importe de venta.


	
	var contador= 0;
	var acumulador= 0;
	var importe;
	var min;
	var max;
	
	

	while (contador <= 23)

	{
		contador++;
		importe=prompt("Ingrese el importe del dia: "+contador);
		importe=parseInt(importe);
		acumulador=acumulador+importe;


		if (contador == 1 )

		{
			max= importe;
			min= importe;
		 }

		 if (max < importe)
		{
			
			max= importe;
		}

		else if (min > importe)
		{
			
			min= importe;
		}


		if (importe == 0  || importe == null)

		{
			importe= prompt("Ingrese el importe nuevamente del dia: "+contador);
		}

		

	}
		
		document.getElementById('importeFinal').value= acumulador;
		alert("El numero máximo fue: "+max);
		alert("El numero mínimo fue: "+min);



}
