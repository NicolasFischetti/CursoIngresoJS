function Mostrar()
{
//tomo la edad  

	var edad;
	var estado_civil;

	edad= document.getElementById('edad').value;
	estado_civil= document.getElementById("estadoCivil").value;


	if (edad < 18 && estado_civil !== "Soltero" )

	{
		alert("Es muy pequeño para NO ser soltero");

	}


	else

	{ 

		alert("Es muy pequeño para ser soltero");

	} 
	

}//FIN DE LA FUNCIÓN