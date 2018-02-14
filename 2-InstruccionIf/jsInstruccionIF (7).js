function Mostrar()
{
//tomo la edad  

	var edad;
	var soltero;
	var divorciado;
	var casado;

	edad= document.getElementById('edad').value;
	casado= document.getElementById("estadoCivil").value;
	divorciado= document.getElementById("estadoCivil").value;
	soltero= document.getElementById("estadoCivil").value;


	if (edad < 18 !== "casado")

	{
		alert("Es muy pequeño para NO ser soltero");

	}

	else if (edad < 18 !== "divorciado")

	{

		alert("Es muy pequeño para NO ser soltero");
	}

	else 

	{
		alert("Es muy pequeño NO para ser soltero");
	}

}//FIN DE LA FUNCIÓN