function Mostrar()
{

	var numero_1;
	var numero_2;
	var resultado;

	numero_1= prompt("Numero uno");
	numero_2= prompt("Numero dos");

	numero_1= parseInt(numero_1);
	numero_2= parseInt(numero_2);

	if (numero_1 == numero_2)

	{
		resultado= numero_1 * numero_2;
	}

	else 

	{

	}

	if (numero_1 > numero_2)

	{
		resultado= numero_1 - numero_2;

	}

	else
	{
		resultado= numero_1 + numero_2;
		
	}

	document.write(resultado);

}
