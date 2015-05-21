<?php
 require_once '../controller/conexion.php';
 class Animal {
    private $id;
    private $nombre_alimento;
    private $idlote;
    private $fecha;
    private $cant_kg;

 
    const TABLA = 'alimento_lote';

   public function getnombre_alimento() {
      return $this->nombre_alimento;
   }
   public function getidlote() {
      return $this->idlote;
   }
   public function getFecha() {
      return $this->fecha;
   }
   public function getcant_kg() {
      return $this->cant_kg;
   }
  




   public function setnombre_alimento($nombre_alimento) {
      $this->nombre_alimento = $nombre_alimento;
   }
   public function setidlote($idlote) {
      $this->idlote = $idlote;
   }
   public function setFecha($fecha) {
      $this->fecha = $fecha;
   }
   public function setcant_kg($cant_kg) {
      $this->cant_kg =$cant_kg;
   }

  



    public function __construct($id, $nombre_alimento, $idlote, $fecha, $cant_kg) {
       $this->id = $id;
       $this->nombre_alimento = $nombre_alimento;
       $this->idlote = $idlote;
       $this->fecha = $fecha;
       $this->cant_kg = $cant_kg;
       
    }



    public function guardar(){
      try {
        $conexion = new Conexion();
      
        $consulta = $conexion->prepare('INSERT INTO ' . self::TABLA .' (nombre_alimento, idlote, fecha, cant_kg) VALUES(:nombre_alimento, :idlote, :fecha, :cant_kg)');
        $consulta->bindParam(':nombre_alimento', $this->nombre_alimento);
        $consulta->bindParam(':idlote', $this->idlote);
        $consulta->bindParam(':fecha', $this->fecha);
        $consulta->bindParam(':cant_kg', $this->cant_kg);
        $consulta->execute();
        $this->id = $conexion->lastInsertId();      
        $conexion = null;

      } catch (Exception $e) {
        echo  $e->getMessage();
      }
   }

    public function eliminar(){
      try {
        $conexion = new Conexion();
        $consulta = $conexion->prepare('DELETE FROM ' . self::TABLA . ' WHERE id = :id');
        $consulta->bindParam(':id', $this->id);
        $consulta->execute();
    
        $conexion = null;
      } catch (Exception $e) {
        echo  $e->getMessage();
      }
    } 

    public function modificar(){
      try {
        $conexion = new Conexion();
        $consulta = $conexion->prepare('UPDATE ' . self::TABLA .' SET nombre_alimento = :nombre_alimento, idlote = :idlote, fecha= :fecha, cant_kg= :cant_kg WHERE id = :id');
        $consulta->bindParam(':id', $this->id);
        $consulta->bindParam(':nombre_alimento', $this->nombre_alimento);
        $consulta->bindParam(':idlote', $this->idlote);
        $consulta->bindParam(':fecha', $this->fecha);
        $consulta->bindParam(':cant_kg', $this->cant_kg);
        $consulta->execute();      
        $conexion = null;
      } catch (Exception $e) {
        
      }
    }




 }
?>