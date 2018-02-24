function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var acumulador;
	var respuesta='si';

	while (respuesta=="si")

	{
		contador++;
		numero= prompt("Ingrese su numero");
		numero= parseInt(numero);
		if (numero > 0)
		{
			positivo+=numero;
			
		}
		else if (numero < 0)
		{
			negativo*=numero;
		
		}
		
		respuesta= prompt("para continuar si");
		

	}
	

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN