<?php
 require_once '../controller/conexion.php';
 
 class Peso {
    
    private $id;
    private $idlote;
    private $fecha;
    private $descripcion;
    private $mayor;
    private $menor;

    const TABLA = 'control_peso';

   public function getIdlote() {
      return $this->idlote;
   }
   public function getFecha() {
      return $this->fecha;
   }
   public function getdecripcion() {
      return $this->descripcion;
   }
   public function getMayor() {
      return $this->mayor;
   }
   public function getMenor() {
      return $this->menor;
   }
  




   public function setIdloto($idlote) {
      $this->idlote = $idlote;
   }
   public function setFecha($fecha) {
      $this->fecha = $fecha;
   }
   public function setdescripcion($descripcion) {
      $this->descripcion = $descripcion;
   }
   public function setMayor($mayor) {
      $this->mayor = $mayor;
   }
   public function setMenor($menor) {
      $this->menor = $menor;
   }
  



    public function __construct($id, $idlote=null, $fecha, $descripcion, $mayor, $menor) {
       $this->id = $id;
       $this->idlote = $idlote;
       $this->fecha = $fecha;
       $this->descripcion = $descripcion;
       $this->mayor = $mayor;
       $this->menor = $menor;
    }



    public function guardar(){
      try {
        $conexion = new Conexion();
      
        $consulta = $conexion->prepare('INSERT INTO ' . self::TABLA .' (idlote, fecha, descripcion, mayor, menor) VALUES(:idlote, :fecha, :descripcion, :mayor, :menor)');
        $consulta->bindParam(':idlote', $this->idlote);
        $consulta->bindParam(':fecha', $this->fecha);
        $consulta->bindParam(':descripcion', $this->descripcion);
        $consulta->bindParam(':mayor', $this->mayor);
        $consulta->bindParam(':menor', $this->menor);
        $consulta->execute();
        $this->id = $conexion->lastInsertId();
      
        $conexion = null;
      } catch (Exception $e) {
        echo $e->getMessage();
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
        echo $e->getMessage();
      }
    }

    public function modificar(){
      try {
        $conexion = new Conexion();
        $consulta = $conexion->prepare('UPDATE ' . self::TABLA .' SET id = id, idlote = :idlote, fecha= :fecha, descripcion=:descripcion, mayor=:mayor, menor=:menor WHERE id = :id');
        $consulta->bindParam(':id', $this->id);
        $consulta->bindParam(':idlote', $this->idlote);
        $consulta->bindParam(':fecha', $this->fecha);
        $consulta->bindParam(':descripcion', $this->descripcion);
        $consulta->bindParam(':mayor', $this->mayor);
        $consulta->bindParam(':menor', $this->menor);
        $consulta->execute();
      
        $conexion = null;      
      } catch (Exception $e) {
        echo $e->getMessage();        
      }
    }

}

?>