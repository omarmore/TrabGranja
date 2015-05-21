<?php
 require_once '../model/guardar_estado.php';
 
	$objDatos = json_decode(file_get_contents("php://input")); 

	$id=$objDatos->id;
	$idcerda=$objDatos->idcerda;
	$idbarraco=$objDatos->idbarraco;
	$fecha_servicio=$objDatos->fecha_servicio;
	$start=$objDatos->start;
	$end=$objDatos->end;
	$tipo=$objDatos->tipo;
	$estado=$objDatos->estado;
	$class=$objDatos->events;

  	$operacion= $objDatos->op;

  	if ($operacion == "addContCubricion") {
  		# code...
  		$parto = new Estados($id, $idcerda, $idbarraco, $fecha_servicio, $start, $end, $tipo, $estado, $class);
 		$parto->guardar();
 		echo $parto->getidcerda() . ' se ha guardado correctamente con el id: ' . $parto->getidcerda();
  	}

 
 	if ($operacion == "deleteContCubricion") {
 		# code...
 		$parto = new Estados($id, $idcerda, $idbarraco, $fecha_servicio, $start, $end, $tipo, $estado, $class);
 		$parto->eliminar();
 		echo $parto->getidcerda() . ' se ha eliminado correctamente con el id: ' . $parto->getidcerda();
 	}

 	 if ($operacion == "updateContCubricion") {
 		# code...
 		$parto = new Estados($id, $idcerda, $idbarraco, $fecha_servicio, $start, $end, $tipo, $estado, $class);
 		$parto->modificar();
 		echo $parto->getidcerda() . ' se ha actulizado correctamente con el id: ' . $parto->getidcerda();
 	}
?>