<?php
require_once 'conexion.php';
 listarMedLote();
     
    //Replace * in the query with the column names.
     function listarMedLote(){
        $sql = "SELECT * FROM control_lote ORDER BY idlote";
        try {
            $db = new Conexion();
            $stmt = $db->query($sql);
            $medLote = $stmt->fetchAll(PDO::FETCH_OBJ);
            $db = null;
            echo json_encode($medLote);

        } catch (Exception $e) {
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
     }  

?>