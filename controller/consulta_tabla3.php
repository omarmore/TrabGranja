<?php
require_once 'conexion.php';
     
    //Replace * in the query with the column names.
     listarCalendar();
     
    //Replace * in the query with the column names.
  function listarCalendar(){
     
    //Create an array
    $db = new conexion();
    $pdo = new Conexion();
    $events = $pdo->query("SELECT * FROM estado  WHERE estado = 'preñada'")->fetchAll(PDO::FETCH_ASSOC);
 
    echo json_encode(
     
     	   $events         
        
    );
  }

 

 
?>