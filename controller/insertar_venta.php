<?php
 require_once '../model/guardar_venta.php';
 

 
	$idventa=$_POST['idventa'];
    $idlote=$_POST['idlote'];
    $fecha=$_POST['fecha'];
    $numero=$_POST['numero'];
    $total_kg=$_POST['total_kg'];
    $valor_kg=$_POST['valor_kg'];
    $cliente=$_POST['cliente'];
	

  


 $venta = new Animal($idventa, $idlote, $fecha, $numero, $total_kg, $valor_kg, $cliente);
 $venta->guardar();
 echo $venta->getIdventa() . ' se ha guardado correctamente con fecha ' . $venta->getidlote();
?>