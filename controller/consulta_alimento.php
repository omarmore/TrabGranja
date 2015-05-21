<?php
require_once 'conexion.php';
 listarAlimento();
     
    //Replace * in the query with the column names.
     function listarAlimento(){
     	$sql = "SELECT * FROM alimentos ORDER BY nombre_alimento";
     	try {
     		$db = new Conexion();
        	$stmt = $db->query($sql);
        	$alimento = $stmt->fetchAll(PDO::FETCH_OBJ);
        	$db = null;
        	echo json_encode($alimento);

     	} catch (Exception $e) {
     		echo '{"error":{"text":'. $e->getMessage() .'}}';
     	}
     }  

?>