function Mostrar()
{
  var producto;
  var importe;


  importe= prompt("Importe de producto");

  var importe= parseInt(importe);


  var iva= (importe * 21) / 100;

  var importe= importe + iva;

  document.getElementById('importeFinal').value= importe


}
