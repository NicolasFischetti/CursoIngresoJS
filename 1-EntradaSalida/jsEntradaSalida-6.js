/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero_uno;
	var numero_dos;

	numero_uno= document.getElementById("numeroUno").value;
	numero_dos= document.getElementById("numeroDos").value;

	var resultado= parseInt(numero_uno)+parseInt(numero_dos);
	
	alert("La suma es: "+resultado);

}

