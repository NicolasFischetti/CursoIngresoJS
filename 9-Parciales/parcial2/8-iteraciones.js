//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var respuesta= "si";
	var positivos;
	var acumulador= 0;
	var contador= 0;
	var cantdepares= 0;
	var maxnum;
	var minnum;
	var promedio;


	while (respuesta != "no")

	{
		contador++;
		numero= prompt("Ingrese el numero");
		numero= parseInt(numero);
		

		while (numero < 0)
		{
			numero=prompt("Ingrese el numero nuevamente");
			numero= parseInt(numero);
		}

		acumulador=acumulador+numero;

		if (numero % 2 == 0 && numero != 0)
		{
			cantdepares++;
		}

		if (contador == 1)
		{
			maxnum= numero;	
			minnum= numero;
		}

		else if (maxnum < numero)
		{
			maxnum= numero;
		}

		else if (minnum > numero)
		{
			minnum= numero;
		}

		respuesta= prompt("Si desea continuar ponga si");

	}
	
	promedio= acumulador / contador;

	document.write ("<br> La cantidad de numeros pares es: "+cantdepares);
	document.write ("<br> El promedio de todos los numeros ingresados es: "+promedio);
	document.write ("<br> La suma de todos los numeros ingresados es :"+acumulador);
	document.write ("<br> El numero màximo es :"+maxnum);
	document.write ("<br> El numero minimo es :"+minnum);



}

