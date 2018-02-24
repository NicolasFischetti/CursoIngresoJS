function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var acumulador;
	var respuesta='si';

	while (true)

	{
		contador++;
		numero= prompt("Ingrese su numero");
		
		if (numero== null)
		{
			respuesta= prompt("Seguro quiere salir, ingrese si");
		
			if (respuesta== "si")
					
			break;					  
		}
		numero= parseInt(numero);

		if (numero > 0)
		{
			positivo+=numero;			
		}
		else if (numero < 0)
		{
			negativo*=numero;
		}
	

	}
	

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN