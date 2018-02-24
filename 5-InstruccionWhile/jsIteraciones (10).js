function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var negativos= 0;
	var positivos= 0;
	var cantidadpos= 0;
	var cantidadneg= 0;
	var cantidadcero= 0;
	var cantidadpares= 0;
	var promediopos;
	var promedioneg;
	var respuesta="si";

	while(respuesta!="no")
	{
		contador++;
		numero= prompt("Ingrese el numero");
		numero= parseInt(numero);

		if (numero < 0)
		{
			negativos+=numero;// acumulador++;
			cantidadneg= cantidadneg+1;

		}
		else if (numero >0)
		{
			positivos+=numero;
			cantidadpos= cantidadpos+1;
		}

		else
		{
			cantidadcero= cantidadcero+1;
		}

		if (numero % 2== 0 && numero != 0)
		{
			cantidadpares= cantidadpares+1;
		}	
		respuesta = prompt("En caso de continuar ingrese no en minuscula");
	}
	

	if (cantidadpos != 0) 
	{
			promediopos= positivos / cantidadpos;
			document.write(promediopos);
	}

	else if (cantidadneg != 0)
	{

		promedioneg= negativos / cantidadneg;
		
		document.write(promedioneg);

	}	
	
	document.write(negativos);
	document.write(positivos);
	document.write(cantidadcero);
	document.write(cantidadpos);
	document.write(cantidadneg);
	document.write(cantidadpares);	
	document.write(positivos - negativos);
	



	




}//FIN DE LA FUNCIÓN