function Mostrar()

//Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) y el sexo
//(validar el sexo “f” o “m”) de 100 alumnos, informar por alert:
//a)el promedio de las notas totales.
//b)la nota más baja.
//c)la cantidad de varones que su nota haya sido mayor o igual a 6.

{
	var notas;
	var contador= 0;
	var acumulador= 0;
	var min;
	var promedios;
	var cantivarones= 0;
	var sexo;


	while (contador <= 5)

		{
			

			contador++;	
			notas= prompt("Ingrese la nota del alumno "+contador);
			notas= parseInt(notas);

			while (isNaN(notas) || notas < 0 || notas > 10 )
			{ 	
				notas= prompt("Ingrese nota nuevamente");
				notas= parseInt(notas);
			}

			acumulador= acumulador+notas;
			sexo= prompt("Ingrese su sexo");
						

			while (!(sexo == "f" || sexo== "m" ))

			{
				sexo= prompt("Ingrese sexo nuevamente");
			}
			

			if (sexo == "m" && notas >= 6)

				{			
					cantivarones++;			
				}

			if (contador == 1)

			{
					min=notas;
			}

			else if (min > notas)

			{
					min=notas;
					
			}

		}

			

				
		alert("La nota minima es: "+min);

		promedios= acumulador/contador;
		alert("El promedio es: "+promedios);	

		alert("La cantidad de varones son: "+cantivarones);	

}
