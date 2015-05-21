<?php
require_once 'conexion.php';
 listarContPartos();
     
    //Replace * in the query with the column names.
     function listarContPartos(){
     	$sql = "SELECT * FROM parto ORDER BY idcerda";
     	try {
     		$db = new Conexion();
        	$stmt = $db->query($sql);
        	$contPartos = $stmt->fetchAll(PDO::FETCH_OBJ);
        	$db = null;
        	echo json_encode($contPartos);

     	} catch (Exception $e) {
     		echo '{"error":{"text":'. $e->getMessage() .'}}';
     	}
     }  

?>