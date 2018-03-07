//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1= prompt("Ingrese el numero1");
	numero2= prompt("Ingrese el numero2");

	numero1= parseInt(numero1);
	numero2= parseInt(numero2);

	if (numero1 == numero2)

	{
		resultado= numero1 * numero2;
	}

	else if (numero1 > numero2)

	{
		resultado= numero1 - numero2;
	}

	else if (numero1 < numero2)

	{
		resultado= numero1 + numero2;
	}	

	document.write("El resultado es :"+resultado);
}

