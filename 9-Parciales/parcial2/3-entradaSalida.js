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
	alambre= parseInt(alambre);

	perimetro= largo * 2 + ancho * 2;

	alambre= perimetro * 6;

	alert("Los metros de alambre son: "+alambre);


	
}

