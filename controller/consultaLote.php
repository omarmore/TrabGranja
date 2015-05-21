<?php
require_once 'conexion.php';
 listarLote();
     
    //Replace * in the query with the column names.
    function listarLote(){
      $sql = "SELECT * FROM lote ORDER BY idlote";
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
