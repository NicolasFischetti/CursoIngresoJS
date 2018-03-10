function Mostrar()
{

	//var largo;
	//var ancho;
	//var perímetro;
	//var alambre;


	//largo= document.getElementById('alrgo').value;
	//ancho= document.getElementById("ancho").value;

	//largo= parseInt(largo);
	//ancho= parseInt(ancho);

	//perimetro= largo * 2  + ancho * 2;

	//alambre= perimetro * 3;

	//alert("Los metros necesarios son: "+alambre);

	var precio;
	var descuento;
	var preciofinal;
	var iva;
	var precioconiva;
	
	precio= document.getElementById('alrgo').value;
	descuento= document.getElementById('ancho').value;

	precio= parseInt(precio);
	descuento= parseInt(descuento);
	

	preciofinal= (precio * descuento) / 100;
	preciocondescuento= precio - preciofinal;
	iva= (preciocondescuento * 21) / 100;
	precioconiva= preciocondescuento + iva;


	alert("El precio final es "+preciocondescuento);
	alert("El iva sobre el precio con descuento es "+precioconiva);






	


}
