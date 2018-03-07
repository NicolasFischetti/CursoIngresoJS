//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
	var ancho;
	var alambre;
	var perimetro;

	largo= document.getElementById('largo').value;
	ancho= document.getElementById("ancho").value;

	largo= parseInt(largo);
	ancho= parseInt(ancho);

	perimetro= largo * 2 + ancho * 2;

	alambre= perimetro * 6;

	alert("El perimetro es "+perimetro);
	alert("El alambre necesario es: "+alambre);

}

