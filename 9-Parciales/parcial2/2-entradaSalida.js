//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 2-EntradaSalida");
	
	var importe;
	var descuento;
	var resultado;

	descuento= parseInt(descuento);
	importe= parseInt(importe);

	importe= prompt("Ingrese su importe");

	descuento= (importe * 25) / 100;

	resultado= importe - descuento;

	document.getElementById('importe').value= resultado;
	


}


  	