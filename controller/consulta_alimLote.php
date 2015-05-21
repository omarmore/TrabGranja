<?php
require_once 'conexion.php';
 listarAlimentoLote();
     
    //Replace * in the query with the column names.
     function listarAlimentoLote(){
     	$sql = "SELECT * FROM alimento_lote ORDER BY idlote";
     	try {
     		$db = new Conexion();
        	$stmt = $db->query($sql);
        	$alimlote = $stmt->fetchAll(PDO::FETCH_OBJ);
        	$db = null;
        	echo json_encode($alimlote);

     	} catch (Exception $e) {
     		echo '{"error":{"text":'. $e->getMessage() .'}}';
     	}
     }  

?>