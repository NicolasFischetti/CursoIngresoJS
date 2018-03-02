
function Mostrar()
{
	
	var cuadrado;
	var lado;
	var perimetro;

	lado= document.getElementById('laBase').value;
	lado= parseInt(lado);

	perimetro= lado * 4;

	alert("El perimetro es: "+perimetro);




	//pedir base por cuadro de texto del triangulo equilatero y pedir la altura, informar perimetro y superficie

	var base;
	var altura;
	var perimetro;
	var superficie;

	base= document.getElementById('laBase').value;
	altura= prompt("Ingrese la altura");

	perimetro= base * 3;
	superficie= (base * altura) / 2;

	alert("El perimetro es: "+perimetro);
	alert("La superfice es: "+superficie);

	
	
}
