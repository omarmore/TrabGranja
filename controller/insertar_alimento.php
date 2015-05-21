<?php
 require_once '../model/guardar_alimento.php';
 
	$objDatos = json_decode(file_get_contents("php://input"));
 
	$nombre_alimento=$objDatos->nombre_alimento;
	$descripcion=$objDatos->descripcion;
    $fecha_compra=$objDatos->fecha_compra;
    $tipo=$objDatos->tipo;
	$cant_exist_bulto=$objDatos->cant_exist_bulto;
	$cant_exist_kg=$objDatos->cant_exist_kg;
	$valor_bulto=$objDatos->valor_bulto;
	$valor_kg=$objDatos->valor_kg;
	$operacion= $objDatos->op;

	if ($operacion == "addAlimento") {
		# code...
		$alimentos = new Alimento($nombre_alimento, $descripcion, $fecha_compra, $tipo, $cant_exist_bulto, $cant_exist_kg, $valor_bulto, $valor_kg);
 		$alimentos->guardar();
 		echo $alimentos->getnombre_alimento() . ' se ha guardado correctamente con el id: ' . $alimentos->getnombre_alimento();
	}

	if ($operacion == "deleteAlimento") {
		# code...
		$alimentos = new Alimento($nombre_alimento, $descripcion, $fecha_compra, $tipo, $cant_exist_bulto, $cant_exist_kg, $valor_bulto, $valor_kg);
 		$alimentos->eliminar();
 		echo $alimentos->getnombre_alimento() . ' se ha eliminado correctamente con el id: ' . $alimentos->getnombre_alimento();
	}

	if ($operacion == "updateAlimento") {
		# code...
		$alimentos = new Alimento($nombre_alimento, $descripcion, $fecha_compra, $tipo, $cant_exist_bulto, $cant_exist_kg, $valor_bulto, $valor_kg);
 		$alimentos->modificar();
 		echo $alimentos->getnombre_alimento() . ' se ha modificado correctamente con el id: ' . $alimentos->getnombre_alimento();
	}
  



?>