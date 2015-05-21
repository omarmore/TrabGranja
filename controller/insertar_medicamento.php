<?php
 require_once '../model/guardar_medicamento.php';
 

 
	$nombre=$_POST['nombre'];
	$fecha=$_POST['fecha'];
	$cant=$_POST['cant'];
    $valor_unidad=$_POST['valor_unidad'];
    $descripcion=$_POST['descripcion'];

  


 $medicamento = new Medicamentos($nombre, $fecha, $cant, $valor_unidad, $descripcion);
 $medicamento->guardar();
 echo   ' se han comprado ' . $medicamento->getcant(). 'unidades del producto'. $medicamento->getNombre();
?>