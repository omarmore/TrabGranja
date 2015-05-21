<?php
require_once 'conexion.php';
 listarAlimentoCerda();
     
    //Replace * in the query with the column names.
     function listarAlimentoCerda(){
     	$sql = "SELECT * FROM alimento_cerda ORDER BY idcerda";
     	try {
     		$db = new Conexion();
        	$stmt = $db->query($sql);
        	$alimCerda = $stmt->fetchAll(PDO::FETCH_OBJ);
        	$db = null;
        	echo json_encode($alimCerda);

     	} catch (Exception $e) {
     		echo '{"error":{"text":'. $e->getMessage() .'}}';
     	}
     }  

?>