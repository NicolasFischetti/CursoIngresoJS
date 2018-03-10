function Mostrar()
{
		
	//	var dia;
	//	dia= prompt("Introduzca el dia de la semana");

	//	switch (dia)
	//	{
	//		case "Sabado":
	//		case "Domingo":
	//				alert("Es fin de semana");
	//				break;
	//		default:
	//				alert("a trabajar!!!");
	//				break;		
	//	}	

	// si es de noche y son pasadas las 24, debo sumarle el mensaje "me voy a un bar". Si es de mañana con una hora menor a once 
	// debemos sumar al mensaje a desayunar.

	var horas;
	var respuesta="";

	horas= prompt("Ingrese su hora");

	switch (horas)
	{
		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
		case "20":
				alert("Tarde de mate");
				break;
		case "21":
		case "22":
		case "23":
		case "24":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
				alert("Es de noche");
				horas= parseInt(horas);
				if (horas < 7)
				{
					respuesta= "me voy al bar";
				}
				break;
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
				alert("Mañana");
				horas= parseInt(horas);
				if (horas < 11)
				{
					respuesta= "A desayunar";
				}
				break; 	

				default:
				alert(" La hora no es valida");			
	}

	alert(respuesta);





}






	//		var numero1;
	//	var numero2;
	//	var numero3;
	//	var max;

	//	numero1= prompt("Ingrese el primer numero");
	//	numero2= prompt("Ingrese el segundo numero");
	//	numero3= prompt("Ingrese el tercer numero");

	//	numero1= parseInt(numero1);
	//	numero2= parseInt(numero2);
	//	numero3= parseInt(numero3);

	//	if (numero1 > numero2 && numero1 > numero3)
	//	{
	//		alert("El numero maximo: "+numero1);
	//	}

	//	else if (numero2 > numero1 && numero2 > numero3)
	//	{
	//		alert("El numero maximo: "+numero2);
	//	}	

	//	else if (numero3 > numero1 && numero3 > numero2)

	//	{
	//		alert("El numero maximo: "+numero3);
	//	}



