<?php
 require_once '../model/guardar_control_peso.php';
 
 $objDatos = json_decode(file_get_contents("php://input"));
 
	$id=$objDatos->id;
	$idlote=$objDatos->idlote;
	$fecha=$objDatos->fecha;
    $descripcion=$objDatos->descripcion;
    $mayor=$objDatos->mayor;
	$menor=$objDatos->menor;

    $operacion= $objDatos->op;

	if ($operacion=="addContPeso") {
		# code...
		$Lote = new Peso($id, $idlote, $fecha, $descripcion, $mayor, $menor);
 		$Lote->guardar();
		echo $Lote->getIdlote() . ' se ha guardado correctamente con el id: ' . $Lote->getIdlote();
	}

	if ($operacion=="deleteContPeso") {
		# code...
		$Lote = new Peso($id, $idlote, $fecha, $descripcion, $mayor, $menor);
 		$Lote->eliminar();
		echo $Lote->getIdlote() . ' se ha eliminar correctamente con el id: ' . $Lote->getIdlote();
	}

	if ($operacion=="updateContPeso") {
		# code...
		$Lote = new Peso($id, $idlote, $fecha, $descripcion, $mayor, $menor);
 		$Lote->modificar();
		echo $Lote->getIdlote() . ' se ha modificado correctamente el peso el id: ' . $Lote->getIdlote();
	}


  


?>