function Mostrar()
{

	var bandera=0;// no nos pide que hagamos nada con el contador
	// declarar variables
	//== compara ; = asigna; === compara tipo de dato
	var numero;
	var max;
	var min;
	var respuesta='si';

	while(respuesta!='no')
	{
		numero= prompt("Ingrese un numero");
		numero= parseInt(numero);
		if (bandera ==0)
		{
			bandera++;
			max= numero;
			min= numero;

		}
		
		if (max<numero)
		{
			max= numero;
		}

		else if (min > numero)
		{
			min= numero;
		}

		respuesta= prompt("para continuar si");
		
	
	}
		
		document.getElementById('maximo').value= max;
		document.getElementById('minimo').value= min;



}//FIN DE LA FUNCIÓN