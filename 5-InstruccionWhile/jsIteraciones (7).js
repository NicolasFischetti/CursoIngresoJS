function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	//var confirm= true;

	while (respuesta== "si")//puede ser true en vez de si
	{
		contador= contador+1;
		numero= prompt("ingresar numero");
		numero= parseInt(numero);
		acumulador= acumulador+numero;
		respuesta= prompt("para continuar si");
		// valido siempre con while puedo tomar el numero por prompt y despues por parseint
	}
	// respuesta=confirm ("Desea ingresar otro numero? si/no")


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN