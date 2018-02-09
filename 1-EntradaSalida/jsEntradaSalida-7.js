/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero_uno;
	var numero_dos;

	numero_uno= document.getElementById("numeroUno").value;
	numero_dos= document.getElementById("numeroDos").value;

	var resultado= parseInt(numero_uno) + parseInt(numero_dos);

	alert("La suma es: "+resultado);
}

function restar()
{
	var numero_uno;
	var numero_dos;

	numero_uno= document.getElementById("numeroUno").value;
	numero_dos= document.getElementById("numeroDos").value;

	var resultado= parseInt(numero_uno) - parseInt(numero_dos);

	alert("La resta es: "+resultado);
}

function multiplicar()
{ 
	var numero_uno;
	var numero_dos;

	numero_uno= document.getElementById("numeroUno").value;
	numero_dos= document.getElementById("numeroDos").value;

	var resultado= parseInt(numero_uno) * parseInt(numero_dos);

	alert("La multiplicación es: "+resultado);
}

function dividir()
{
	var numero_uno;
	var numero_dos;

	numero_uno= document.getElementById("numeroUno").value;
	numero_dos= document.getElementById("numeroDos").value;

	var resultado= parseInt(numero_uno) / parseInt(numero_dos);

	alert("La división es: "+resultado);
}

