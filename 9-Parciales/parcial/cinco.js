function Mostrar()
{
		
		var dia;
		dia= prompt("Introduzca el dia de la semana");

		switch (dia)
		{
			case "Sabado":
			case "Domingo":
					alert("Es fin de semana");
					break;
			default:
					alert("a trabajar!!!");
					break;		
		}	
}






		var numero1;
		var numero2;
		var numero3;
		var max;

		numero1= prompt("Ingrese el primer numero");
		numero2= prompt("Ingrese el segundo numero");
		numero3= prompt("Ingrese el tercer numero");

		numero1= parseInt(numero1);
		numero2= parseInt(numero2);
		numero3= parseInt(numero3);

		if (numero1 > numero2 && numero1 > numero3)
		{
			alert("El numero maximo: "+numero1);
		}

		else if (numero2 > numero1 && numero2 > numero3)
		{
			alert("El numero maximo: "+numero2);
		}	

		else if (numero3 > numero1 && numero3 > numero2)

		{
			alert("El numero maximo: "+numero3);
		}



