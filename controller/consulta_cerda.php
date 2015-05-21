<?php
require_once 'conexion.php';
 listarCerda();
     
    //Replace * in the query with the column names.
     function listarCerda(){
     	$sql = "SELECT * FROM cerda ORDER BY idcerda";
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