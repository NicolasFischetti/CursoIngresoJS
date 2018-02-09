/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numero_uno;
	var numero_dos;

	numero_uno= document.getElementById("numeroDividendo").value;
	numero_dos= document.getElementById("numeroDivisor").value;

	var resultado= parseInt(numero_uno) % parseInt(numero_dos);

	alert("El resto es: "+resultado);
	
}
