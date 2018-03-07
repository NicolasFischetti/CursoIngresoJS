//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//7-Realizar el algoritmo que al presionar el bot&oacute;n "Mostrar" pida por prompt  las notas (validar entre 0 y 10) y el sexo(validar el sexo “f” o “m”) de 6 alumnos, informar por alert:
	//a) el promedio de las notas totales.
					
					//b) la nota más baja.
			//	c) la cantidad de varones que su nota haya sido mayor o igual a 6.


			var notas;
			var sexo;
			var contador = 0;
			var acumulador = 0;
			var promedios;
			var minnota;
			var cantvarones = 0;
		

			while (contador < 6)
			{
				contador++;
				notas= prompt("Ingrese su nota");
				notas= parseInt(notas);
				acumulador= acumulador+notas;

				while (notas < 0 || notas > 10 || isNaN(notas))
				{
					notas= prompt("Ingrese nota nuevamente");
					notas= parseInt(notas);				
				}

				sexo= prompt("Ingrese su sexo");

				while (!(sexo == "m" || sexo == "f"))

				{
					sexo= prompt("Ingrese sexo nuevamente");
				}

				if (contador == 1)
				{
					minnota= notas;
				}
				else if (minnota > notas)
				{
					minnota= notas;
				}

				if (sexo == "m" && notas >= 6)
				{
					cantvarones++;
				}
	 
			}

			promedio= acumulador/contador;

			alert("El promedio de las notas es "+promedio);
			alert("La nota mas baja es "+minnota);
			alert("La cantidad de varones es "+cantvarones);	
}

