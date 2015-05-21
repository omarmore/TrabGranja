<?php
 require_once '../model/guardar_alimento_cerda.php';
 
    $objDatos = json_decode(file_get_contents("php://input"));
 
	$id=$objDatos->id;
	$nombre_alimento=$objDatos->nombre_alimento;
	$idcerda=$objDatos->idcerda;
    $fecha=$objDatos->fecha;
    $cant_kg=$objDatos->cant_kg;
    $operacion= $objDatos->op;
    
	
if ($operacion =="addAlimentoCerda") {
	# code...
	$cerda = new Animal($id, $nombre_alimento, $idcerda, $fecha, $cant_kg);
 	$cerda->guardar();
 	echo $cerda->getnombre_alimento() . ' se ha guardado correctamente con el id: ' . $cerda->getIdcerda();
}

if ($operacion =="deleteAlimentoCerda") {
	# code...
	$cerda = new Animal($id, $nombre_alimento, $idcerda, $fecha, $cant_kg);
 	$cerda->eliminar();
 	echo $cerda->getnombre_alimento() . ' se ha eliminado correctamente con el id: ' . $cerda->getIdcerda();
}
 
if ($operacion =="updateAlimentoCerda") {
	# code...
	$cerda = new Animal($id, $nombre_alimento, $idcerda, $fecha, $cant_kg);
 	$cerda->modificar();
 	echo $cerda->getnombre_alimento() . ' se ha modificado correctamente con el id: ' . $cerda->getIdcerda();
} 



?>