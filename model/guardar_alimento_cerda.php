<?php
 require_once '../controller/conexion.php';
 class Animal {
    private $id;
    private $nombre_alimento;
    private $idcerda;
    private $fecha;
    private $cant_kg;


    const TABLA = 'alimento_cerda';

   public function getnombre_alimento() {
      return $this->nombre_alimento;
   }
   public function getidcerda() {
      return $this->idcerda;
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
   public function setidcerda($idcerda) {
      $this->idcerda = $idcerda;
   }
   public function setFecha($fecha) {
      $this->fecha = $fecha;
   }
   public function setcant_kg($cant_kg) {
      $this->cant_kg =$cant_kg;
   }


    public function __construct($id, $nombre_alimento, $idcerda, $fecha, $cant_kg) {
       $this->id = $id;
       $this->nombre_alimento = $nombre_alimento;
       $this->idcerda = $idcerda;
       $this->fecha = $fecha;
       $this->cant_kg = $cant_kg;
       
    }

    public function guardar(){
      try {
        $conexion = new Conexion();      
        $consulta = $conexion->prepare('INSERT INTO ' . self::TABLA .' (nombre_alimento, idcerda, fecha, cant_kg) VALUES(:nombre_alimento, :idcerda, :fecha, :cant_kg)');
        $consulta->bindParam(':nombre_alimento', $this->nombre_alimento);
        $consulta->bindParam(':idcerda', $this->idcerda);
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
        $consulta = $conexion->prepare('UPDATE ' . self::TABLA .' SET nombre_alimento = :nombre_alimento, idcerda = :idcerda, fecha= :fecha, cant_kg= :cant_kg WHERE id = :id');
        $consulta->bindParam(':id', $this->id);
        $consulta->bindParam(':nombre_alimento', $this->nombre_alimento);
        $consulta->bindParam(':idcerda', $this->idcerda);
        $consulta->bindParam(':fecha', $this->fecha);
        $consulta->bindParam(':cant_kg', $this->cant_kg);
        $consulta->execute();      
        $conexion = null;
      } catch (Exception $e) {
        
      }
    }








 }
?>