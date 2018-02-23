function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	//var iteraciones= 50;
	//while(contador<iteraciones)
	//var promedio;
	while(contador<5)//el 5 son las iteraciones
	{
		contador++;
		numero= prompt("ingresar numero");
		numero= parseInt(numero);
		acumulador= acumulador+numero;
	}
	//promedio=acumulador/contrador;
	//document.getElementById("suma").value= promedio;
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN