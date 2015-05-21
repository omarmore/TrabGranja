<?php
require_once 'conexion.php';
 controlMedCerda();
     
    //Replace * in the query with the column names.
     function controlMedCerda(){
     	$sql = "SELECT * FROM control_cerda ORDER BY idcerda";
     	try {
     		$db = new Conexion();
        	$stmt = $db->query($sql);
        	$medCerda = $stmt->fetchAll(PDO::FETCH_OBJ);
        	$db = null;
        	echo json_encode($medCerda);

     	} catch (Exception $e) {
     		echo '{"error":{"text":'. $e->getMessage() .'}}';
     	}
     }  

?>