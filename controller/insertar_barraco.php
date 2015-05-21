<?php
 require_once '../model/guardar_barraco.php';
 
 	$objDatos = json_decode(file_get_contents("php://input"));
 	
 
	$idbarraco = $objDatos->idvarraco;
	$raza = $objDatos->raza;
    $fecha_n = $objDatos->fecha_n;
    $linea = $objDatos->linea;
	$estado = $objDatos->estado;
	$peso = $objDatos->peso;
	$valor_barraco = $objDatos->valor_barraco;
	
	$operacion= $objDatos->op;//variable para definir el tipo de funcion a realizar

	if ($operacion =="appVarraco") {
		# code...
		$barraco = new Animal($idbarraco, $raza, $fecha_n, $linea, $estado, $peso, $valor_barraco);
 		$barraco->guardar();
 		echo ' se ha guardado correctamente con el id: ' . $barraco->getIdbarraco();
	}

	if ($operacion =="deleteVarraco") {
		# code...
		$barraco = new Animal($idbarraco, $raza, $fecha_n, $linea, $estado, $peso, $valor_barraco);
 		$barraco->eliminar();
 		echo ' se ha eliminado correctamente el registro con id: ' . $barraco->getIdbarraco();
	}

		if ($operacion =="updateVarraco") {
		# code...
		$barraco = new Animal($idbarraco, $raza, $fecha_n, $linea, $estado, $peso, $valor_barraco);
 		$barraco->modificar();
 		echo ' se ha editado correctamente con el id: ' . $barraco->getIdbarraco();
	}
?>