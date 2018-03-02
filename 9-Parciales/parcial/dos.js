function Mostrar()
{
  	

  	var importe;
 	 var iva;
 	 var importefinal;


  	importe= prompt("Importe de producto");

 	importe= parseInt(importe);


  	iva= (importe * 21) / 100;

  	importefinal= importe + iva;

  	document.getElementById('importeFinal').value= importefinal;

  		//se ingresa un porcentaje de descuento y el importe, mostrar cuanto se debe pagar

	var importe;
	var descuento;
	var resultado;

	descuento= prompt("Ingresar numero de descuento");
	importe= prompt("Ingresar numero de importe");

	importe= parseInt(importe);
	descuento= parseInt(descuento);

	descuento= (importe * descuento) / 100;

	resultado= importe - descuento;

	document.getElementById("importeFinal").value= resultado;

}
