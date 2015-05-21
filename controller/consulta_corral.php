<?php
require_once 'conexion.php';
 listarCorral();
     
    //Replace * in the query with the column names.
     function listarCorral(){
     	$sql = "SELECT * FROM corral ORDER BY idcorral";
     	try {
     		$db = new Conexion();
        	$stmt = $db->query($sql);
        	$cerda = $stmt->fetchAll(PDO::FETCH_OBJ);
        	$db = null;
        	echo json_encode($cerda);

     	} catch (Exception $e) {
     		echo '{"error":{"text":'. $e->getMessage() .'}}';
     	}
     }  

?>
