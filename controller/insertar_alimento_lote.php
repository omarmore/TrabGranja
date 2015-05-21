<?php
 require_once '../model/guardar_alimento_lote.php';
 
    $objDatos = json_decode(file_get_contents("php://input"));
 
	$id=$objDatos->id;
	$nombre_alimento=$objDatos->nombre_alimento;
	$idlote=$objDatos->idlote;
    $fecha=$objDatos->fecha;
    $cant_kg=$objDatos->cant_kg;
	$operacion= $objDatos->op;

	echo $idlote;

if ($operacion == "addAlimentoLote") {
	# code...
	$cerda = new Animal($id, $nombre_alimento, $idlote, $fecha, $cant_kg);
 	$cerda->guardar();
 	echo $cerda->getnombre_alimento() . ' se ha guardado correctamente con el id: ' . $cerda->getIdlote();
}

if ($operacion == "deleteAlimentoLote") {
	# code...
	$cerda = new Animal($id, $nombre_alimento, $idlote, $fecha, $cant_kg);
 	$cerda->eliminar();
 	echo $cerda->getnombre_alimento() . ' se ha eliminado correctamente con el id: ' . $cerda->getIdlote();
}

if ($operacion == "updateAlimentoLote") {
	# code...
	$cerda = new Animal($id, $nombre_alimento, $idlote, $fecha, $cant_kg);
 	$cerda->modificar();
 	echo $cerda->getnombre_alimento() . ' se ha modificado correctamente con el id: ' . $cerda->getIdlote();
} 

?>