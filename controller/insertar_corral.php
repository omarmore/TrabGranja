<?php
 require_once '../model/guardar_corral.php';
 
    $objDatos = json_decode(file_get_contents("php://input"));

	$idcorral=$objDatos->idcorral;
	$fecha=$objDatos->fecha;
    $capacidad=$objDatos->capacidad;
	$peso_inicial=$objDatos->peso_inicial;
	$idlote=$objDatos->idlote;

	$operacion= $objDatos->op;

	if ($operacion == "addCorral") {
		$corral = new Corrales($idcorral, $fecha, $capacidad, $peso_inicial, $idlote);
 		$corral->guardar();
 		echo ' se ha guardado correctamente con el id: ' . $corral->getidcorral();
	}

	if ($operacion == "deleteCorral") {
		# code...
		$corral = new Corrales($idcorral, $fecha, $capacidad, $peso_inicial, $idlote);
 		$corral->eliminar();
 		echo ' se ha eliminado correctamente con el id: ' . $corral->getidcorral();
	}

	if ($operacion == "updateCorral") {
		# code...
		$corral = new Corrales($idcorral, $fecha, $capacidad, $peso_inicial, $idlote);
 		$corral->modificar();
 		echo ' se ha modificado correctamente con el id: ' . $corral->getidcorral();
	}
 
?>