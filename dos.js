function Mostrar()
{
  var producto;
  var importe;

  importe= prompt("Importe de producto");
  importe= parceInt(importe)

  var iva= (importe * 21) / 100;

  importe= importe + iva;

  document.getElementById('importeFinal').value= importe;


}
