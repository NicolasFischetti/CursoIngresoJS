/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var sueldo_uno;
	var resultado_dos;

	sueldo_uno= document.getElementById('sueldo').value;	

	var sueldo_uno= parseInt(sueldo_uno); 
	
	var aumento= (sueldo_uno * 10) / 100;

	var sueldo_uno= sueldo_uno + aumento;

	document.getElementById('resultado').value= sueldo_uno;





}
