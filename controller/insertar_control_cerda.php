<?php
require_once '../model/guardar_control_cerda.php';

  $objDatos = json_decode(file_get_contents("php://input"));

    $id=$objDatos->id;
	$nombre=$objDatos->nombre;
	$idcerda=$objDatos->idcerda;
	$fecha=$objDatos->fecha;
	$dosis=$objDatos->dosis;
    $descripcion=$objDatos->descripcion;
    $operacion= $objDatos->op;

    if ($operacion =="addMedCerda") {
    	# code...
    	$control = new Controles($id, $nombre, $idcerda, $fecha, $dosis, $descripcion);
 		$control->guardar();
 		echo   ' se ha aplicado el medicamento ' . $control->getfecha(). 'a la cerda con código'. $control->getIdcerda();
    	
    }

    if($operacion == "deleteMedCerda") {
    	# code...
    	$control = new Controles($id, $nombre, $idcerda, $fecha, $dosis, $descripcion);
 		$control->eliminar(); 
 		echo   ' se ha eliminado el medicamento ' . $control->getfecha(). 'a la cerda con código'. $control->getIdcerda();   	
    }

    if($operacion == "updateMedCerda") {
    	# code...
    	$control = new Controles($id, $nombre, $idcerda, $fecha, $dosis, $descripcion);
 		$control->modificar(); 
 		echo   ' se ha modifeicado el medicamento ' . $control->getfecha(). 'a la cerda con código'. $control->getIdcerda();   	
    }
    

    

 //$control = new Controles($nombre, $idcerda, $fecha, $dosis, $descripcion);
 //$control->guardar();
 //echo   ' se ha aplicado el medicamento ' . $control->getfecha(). 'a la cerda con código'. $control->getIdcerda();
?>