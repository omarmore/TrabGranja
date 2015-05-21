<?php
 require_once '../model/guardar_partos.php';
 
    $objDatos = json_decode(file_get_contents("php://input"));
 
	$id=$objDatos->id;
    $idcerda=$objDatos->idcerda;
    $fecha=$objDatos->fecha;
    $cant_nacidos=$objDatos->cant_nacidos;
    $nacidos_vivos=$objDatos->nacidos_vivos;
    $cant_hembras=$objDatos->cant_hembras;
    $cant_machos=$objDatos->cant_machos;
    $operacion= $objDatos->op;

    $idbarraco= $objDatos->idbarraco;
    $fecha_servicio= $objDatos->fecha_servicio;
    $start= $objDatos->start;
    $end= $objDatos->end;
    $tipo= $objDatos->tipo;
    $estado= $objDatos->estado;
    $class= $objDatos->class;
    

    if ($operacion == "addContParto") {
    	# code...
    	$parto = new Animal($id, $idcerda, $fecha, $cant_nacidos, $nacidos_vivos, $cant_hembras, $cant_machos,   $idbarraco, $fecha_servicio, $start, $end, $tipo, $estado, $class);
 		$parto->guardar();
 		echo $parto->getIdcerda() . ' se ha guardado correctamente con fecha ' . $parto->getfecha();
    }

    if ($operacion == "deleteContParto") {
    	# code...
    	$parto = new Animal($id, $idcerda, $fecha, $cant_nacidos, $nacidos_vivos, $cant_hembras, $cant_machos);
 		$parto->eliminar();
 		echo $parto->getIdcerda() . ' se ha eliminado correctamente con fecha ' . $parto->getfecha();
    }
	
	if ($operacion == "updateContParto") {
    	# code...
    	$parto = new Animal($id, $idcerda, $fecha, $cant_nacidos, $nacidos_vivos, $cant_hembras, $cant_machos);
 		$parto->modificar();
 		echo $parto->getIdcerda() . ' se ha modificado correctamente con fecha ' . $parto->getfecha();
    }
	

  



?>