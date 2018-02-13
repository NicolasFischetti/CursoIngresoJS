function Mostrar()
{

	var largo;
	var ancho;
	var perímetro;
	var alambre;


	largo= document.getElementById('largo').value;
	ancho= document.getElementById("ancho").value;

	var largo= parseInt(largo);
	var ancho= parseInt(ancho);

	var perimetro= largo + ancho;

	var alambre= perimetro / 3;

	alert("Los metros necesarios son: "+alambre)


}
