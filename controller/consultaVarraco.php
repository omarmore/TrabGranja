<?php
require_once 'conexion.php';
 listarVarraco();
     
    //Replace * in the query with the column names.
     function listarVarraco(){
     	$sql = "SELECT * FROM barraco ORDER BY idbarraco";
     	try {
     		$db = new Conexion();
        	$stmt = $db->query($sql);
        	$varraco = $stmt->fetchAll(PDO::FETCH_OBJ);
        	$db = null;
        	echo json_encode($varraco);

     	} catch (Exception $e) {
     		echo '{"error":{"text":'. $e->getMessage() .'}}';
     	}
     }  

?>
