<?php
 require_once '../model/guardar_lote.php';
 
 	$objDatos = json_decode(file_get_contents("php://input"));
 

	$idlote=$objDatos->idlote;
	$fecha_n=$objDatos->fecha_n;
  $cant=$objDatos->cant;
	$peso=$objDatos->peso;

	$operacion= $objDatos->op;
  
 

  if ($operacion == "addLote") {
  	# code...
 	  $lote = new Lotes($idlote, $fecha_n, $cant, $peso);
 	  $lote->guardar();
 	  echo $lote->getidlote() . ' se ha guardado correctamente con el id: ' . $lote->getidlote();
  }

  if ($operacion == "deleteLote") {
    # code...
    $lote = new Lotes($idlote, $fecha_n, $cant, $peso);
    $lote->eliminar();
    echo $lote->getidlote() . ' se ha eliminado correctamente con el id: ' . $lote->getidlote();
  }

    if ($operacion == "updateLote") {
    # code...
    $lote = new Lotes($idlote, $fecha_n, $cant, $peso);
    $lote->modificar();
    echo $lote->getidlote() . ' se ha modificado correctamente con el id: ' . $lote->getidlote();
  }
 
?>