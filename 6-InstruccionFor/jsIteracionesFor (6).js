function Mostrar()
{
	var num= prompt("Ingrese numero");
	var contador= 0;



	for (var i= 1; i < num; i++)
	{
		if (i % 2 == 0)
		{
			contador++;
		}

		console.log(i);
	}



}//FIN DE LA FUNCIÓN