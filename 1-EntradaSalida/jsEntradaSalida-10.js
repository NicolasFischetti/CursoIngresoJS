/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var sueldo_uno;
	var resultado_dos;

	var sueldo_uno= document.getElementById('importe').value;

	var sueldo_uno= parseInt(sueldo_uno);

	var descuento= (sueldo_uno * 15) / 100;

	var sueldo_uno= sueldo_uno - descuento;

	document.getElementById('resultado').value= sueldo_uno;

	
}
