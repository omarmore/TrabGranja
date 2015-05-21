<?php
require_once 'conexion.php';
 listarContPeso();
     
    //Replace * in the query with the column names.
     function listarContPeso(){
     	$sql = "SELECT * FROM control_peso ORDER BY idlote";
     	try {
     		$db = new Conexion();
        	$stmt = $db->query($sql);
        	$contPeso = $stmt->fetchAll(PDO::FETCH_OBJ);
        	$db = null;
        	echo json_encode($contPeso);

     	} catch (Exception $e) {
     		echo '{"error":{"text":'. $e->getMessage() .'}}';
     	}
     }  

?>