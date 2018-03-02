function Mostrar()
{
 //ingresamos dos numeros si son iguales se concatenan, si el primero es mayor que el segundo los multiplicamos, si el primero es menor que el segundo

 	var numero_1;
 	var numero_2;
 	var resulado;

 	numero_1= prompt("Ingrese el primer numero");
 	numero_2= prompt("Ingrese el segundo numero");

 	numero_1= parseInt(numero_1);
 	numero_2= parseInt(numero_2);

 	if (numero_1==numero_2)
 	{
 		resultado==""+numero_1+numero_2;
 	}

 	else if (numero_1 > numero_2)
 	{
 		resultado=numero_1*numero_2;
 		
 	 
 	 	if (resultado % 2 == 0 && resultado != 0)
 	 	{
 	 		resultado= resultado + "es par";
 		 }
	
	}
	if (numero_1< numero_2)	
	{
		resultado=numero_1- numero_2;
		
	}
 	
 	document.write(resultado);
	


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

	else if (numero_1 > numero_2)

	{
		resultado= numero_1 - numero_2;

	}

	else
	{
		resultado= numero_1 + numero_2;
		
	}

	document.write(resultado);


	

}
