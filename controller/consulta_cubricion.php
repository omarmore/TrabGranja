<?php
require_once 'conexion.php';
 listarCubricion();
     
    //Replace * in the query with the column names.
     function listarCubricion(){
        $sql = "SELECT * FROM estado ORDER BY id";
        try {
            $db = new Conexion();
            $stmt = $db->query($sql);
            $cubricion = $stmt->fetchAll(PDO::FETCH_OBJ);
            $db = null;
            echo json_encode($cubricion);

        } catch (Exception $e) {
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }   

?>