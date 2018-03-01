function Mostrar()
{
	//Realizar el algoritmo que permita ingresar números positivos (validar que sea positivo) hasta que el
//usuario quiera e informar al terminar el ingreso por document.write:
//a) la cantidad de números pares.
//b) el promedio de todos los números ingresados.
//c) la suma de todos los números.
//d) El número máximo y el mínimo.

 	var cantdepares= 0;
 	var contador= 0;
 	var acumulador= 0;
 	var numero;
 	var max;
 	var min;
 	var promedio;
 	var respuesta= "si";

	while (respuesta != "no" || numero <= 0)

	{
		contador++;
		numero= prompt("Ingrese el numero");
		numero= parseInt(numero);
		acumulador= acumulador+numero;
	

	if (numero % 2== 0 && numero != 0)

		{
			cantdepares++;
		}

	if (contador == 1)

		{
			max= numero;
			min= numero;
		}

	if (min > numero)
		
		{
			min=numero;
		}
	else if (max < numero)
		
		{
			max=numero;
		}

	respuesta= prompt("Ingrese si para continuar");

	}

	promedio= acumulador/contador;

	alert("promedio" +promedio);
	alert("pares "+cantdepares);
	alert("max "+max);
	alert("min "+min);
	alert("acumulador "+acumulador);



}
