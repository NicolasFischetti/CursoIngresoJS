function Mostrar()
{
	var numero = prompt("Ingrese el numero");
	var contador = 0;

	for (var i= 0; i <= numero; i++)

	{
		if(numero % i ==0)

		{
			contador++;
		 }

		// if (num / i == 1)
		//{ 
		// es primo
		// else
		// no e primo
		//break;
		// }

	}
		if (contador == 2)
			{
				alert("Es primo");
			}

			else 
			{
				alert("No es primo");
			}


}//FIN DE LA FUNCIÓN