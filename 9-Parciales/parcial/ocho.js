function Mostrar()
{
	//pedir tres datos hasta que el cliente quiera. datos: nombre del animal. peso del animal (valida mayor a 0) y 
	// temperatura del habitat del animal (validar entre -40 y +40). Informar el nombre del animal mas pesado. El nombre
	// del animal de la temperatura mas baja. // la cantidad de temperaturas pares que se ingresaron. El promedio del peso
	// de todos los animales. La temperatura maxima y la temperatura minima.

	var nombreAnimal;
	var pesoAnimal;
	var temperHabitat;
	var respuesta= "si";
	var minPeso;
	var maxPeso;
	var tempMin;
	var tempMax;
	var contador= 0;
	var acumulador= 0;
	var cantTemperaturas= 0;
	var promedio;
	var animalPesado;

	while (respuesta != "no" )
	{
		contador++;
		nombreAnimal= prompt("Ingrese nombre del animal");
		pesoAnimal= prompt("Ingrese peso del animal");
		pesoAnimal= parseInt(pesoAnimal);
		acumulador=acumulador+pesoAnimal;
		

		while (isNaN(pesoAnimal) || pesoAnimal <= 0 )

		{
			pesoAnimal=prompt("Ingrese el peso nuevamente");
		}

		temperHabitat= prompt("Ingrese temperatura del habitat");
		temperHabitat= parseInt(temperHabitat);

		while (temperHabitat < -40 || temperHabitat > 40 || isNaN(temperHabitat))
		{
			temperHabitat=prompt("Ingrese la temperatura nuevamente");
		}

		if (contador == 1)
		{
			maxPeso= pesoAnimal;
			minPeso= pesoAnimal;
			animalPesado=nombreAnimal;
			nombreAnimal=tempMin;

		}

		else if (maxPeso<pesoAnimal)
		{
			maxPeso= pesoAnimal;
			
		}


		else if (minPeso >pesoAnimal)
		{
			minPeso=pesoAnimal;
		}

		if (contador == 1)
		{
			TempMin= temperHabitat;
			tempMax= temperHabitat;
		}
		else if (TempMin > temperHabitat)
		{
			tempMin= temperHabitat;
		}
		else if (tempMax < temperHabitat)
		{
			tempMax= temperHabitat;
		}

		if (temperHabitat % 2 == 0 && temperHabitat !=0 )

		{
			cantTemperaturas++;
		}

		respuesta=prompt("Escriba si para continuar");
	 }

	alert("El nombre del animal mas pesado es: "+animalPesado+" y el peso del animal es: "+maxPeso);
	alert("El nombre del animal es: "+nombreAnimal+" y su temperatura es: "+tempMin);
	alert("La cantidad de temperaturas pares es: "+cantTemperaturas);
	alert("El promedio del peso es: "+acumulador/contador);
	alert("La temperatura minima es: "+tempMin);
	alert("La temperatura maxima es: "+tempMax);

}
