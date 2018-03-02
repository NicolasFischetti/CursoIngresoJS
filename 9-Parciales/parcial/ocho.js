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
	var minPeso;
	var tempMin;
	var tempMax;
	var contador= 0;
	var acumulador= 0;
	var cantTemperaturas;
	var promedio;
	var animalPesado;

	while (respuesta != "no" )
	{
		contador++;
		nombreAnimal= prompt("Ingrese nombre del animal");
		pesoAnimal= prompt("Ingrese peso del animal");
		pesoAnimal= parseInt(pesoAnimal);
		temperHabitat= prompt("Ingrese temperatura del habitat");
		temperHabitat= parseInt(temperHabitat);

		while (isNaN(pesoAnimal) || pesoAnimal < 0 )

		{
			pesoAnimal=prompt("Ingrese el peso nuevamente");
		}

		

		while (!(temperHabitat > -40 || temperHabitat > 40 || isNaN(temperHabitat)))
		{
			temperHabitat=prompt("Ingrese la temperatura nuevamente");
		}

		

		if (contador == 1)
		{
			minPeso= pesoAnimal;
			maxPeso= pesoAnimal;
		}

		else if (minPeso>pesoAnimal)
		{
			minPeso= pesoAnimal;
		}

		else (maxPeso <pesoAnimal)
		{
			maxPeso=pesoAnimal;
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
		else (tempMax < temperHabitat)
		{
			tempMax= temperHabitat;
		}

	 }

		
}
