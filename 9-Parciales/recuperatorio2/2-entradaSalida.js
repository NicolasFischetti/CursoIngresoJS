//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var iva;
	var importefinal;

	importe= prompt("Ingrese su importe");

	importe= parseInt(importe);

	iva= (importe * 21) /100;

	importefinal= importe + iva;

	document.getElementById('importe').value= importefinal;


	
}

