function Mostrar()
{

	var largo;
	var ancho;
	var perímetro;
	var alambre;


	largo= document.getElementById('alrgo').value;
	ancho= document.getElementById("ancho").value;

	largo= parseInt(largo);
	ancho= parseInt(ancho);

	perimetro= largo + ancho;

	alambre= perimetro / 3;

	alert("Los metros necesarios son: "+alambre)


}
