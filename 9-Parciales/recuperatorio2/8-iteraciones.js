//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//8-Realizar el algoritmo que al presionar el bot&oacute;n "Mostrar"  permita ingresar números positivos (validar que sea positivo) hasta que el usuario quiera.
					
					//Informar al terminar el ingreso por document.write:
				
					//a) la cantidad de números pares.
				
					//b) el promedio de todos los números ingresados.
					//c) la suma de todos los números.
					
					//d) El número máximo y el mínimo.
	
	var numero;
	var respuesta = "si";
	var contador = 0;
	var acumulador = 0;
	var promedio;
	var maxnum;
	var minnum;
	var cantpares = 0;

	while (respuesta != "no")
	{
		contador++;
		numero= prompt("Ingrese su numero");
		numero= parseInt(numero);
		acumulador=acumulador+numero;

		while (numero <= 0 || isNaN(numero))
		{
			numero= prompt("Ingrese numero nuevamente");
			numero= parseInt(numero);
		}
		
		if (numero % 2 == 0 && numero != 0)
		{
			cantpares++;
		}


		if (contador == 1)
		{
			minnum= numero;
			maxnum= numero;
		}
		else if (minnum>numero)
		{
			minnum=numero;
		}
		else if (maxnum<numero)
		{
			maxnum=numero;
		}
		

		respuesta= prompt("Ingrese si para continuar");

	}
	document.write("<br> La cantidad de numeros pares es: "+cantpares);
	document.write("<br> El promedio de todos los numeros ingresados es: "+acumulador/contador);
	document.write("<br> La suma de todos los numeros es: "+acumulador);
	document.write("<br> El numero maximo es: "+maxnum);
	document.write("<br> El numero minimo es: "+minnum);
}

