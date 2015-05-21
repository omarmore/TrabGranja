
<?php
 require_once '../model/guardar_control_lote.php';
 
 	$objDatos = json_decode(file_get_contents("php://input"));


    $id=$objDatos->id;
    $nombre=$objDatos->nombre;
	$idlote=$objDatos->idlote;
	$fecha=$objDatos->fecha;
	$dosis=$objDatos->dosis;
	$numero_a=$objDatos->numero_a;
    $descripcion=$objDatos->descripcion;
    $operacion= $objDatos->op;

    echo $idlote;

    if ($operacion == "addMedLote") {
    	# code...
    	$control = new Controles($id, $nombre, $idlote, $fecha, $dosis, $numero_a, $descripcion);
 		$control->guardar();
 		echo   ' se ha aplicado el medicamento ' . $control->getnombre(). 'al lote con código'. $control->getIdlote();
    }
    
    if ($operacion == "deleteMedLote") {
        # code...
        $control = new Controles($id, $nombre, $idlote, $fecha, $dosis, $numero_a, $descripcion);
        $control->eliminar();
        echo   ' se ha eliminado ' . $control->getnombre(). 'al lote con código'. $control->getIdlote();
    }

    if ($operacion == "updateMedLote") {
        # code...
        $control = new Controles($id, $nombre, $idlote, $fecha, $dosis, $numero_a, $descripcion);
        $control->modificar();
        echo   ' se ha eliminado ' . $control->getnombre(). 'al lote con código'. $control->getIdlote();
    }





?>
 