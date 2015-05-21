<?php
 require_once '../controller/conexion.php';
  class Corrales {
    private $idcorral;
    private $fecha;
    private $capacidad;
    private $peso_inicial;
    private $idlote;

    const TABLA = 'corral';

   public function getIdCorral() {
      return $this->idcorral;
   }
   public function getFecha() {
      return $this->fecha;
   }
   public function getCapacidad() {
      return $this->capacidad;
   }
   public function getPeso_inicial() {
      return $this->peso_inicial;
   }
  public function getIdlote() {
      return $this->idlote;
   }



   public function setIdCorral($idcorral) {
      $this->idcorral = $idcorral;
   }
   public function setFecha($fecha) {
      $this->fecha = $fecha;
   }
   public function setCapacidad($capacidad) {
      $this->capacidad = $cant;
   }
   public function setPeso_inicial($peso_inicial) {
      $this->peso_inicial = $peso_inicial;
   }
  public function setIdlote($idlote) {
      $this->idlote = $idlote;
   }



    public function __construct($idcorral=null, $fecha, $capacidad, $peso_inicial, $idlote) {
       $this->idcorral = $idcorral;
       $this->fecha = $fecha;
       $this->capacidad = $capacidad;
       $this->peso_inicial = $peso_inicial;
       $this->idlote = $idlote;
    }



    public function guardar(){
      try {
        $conexion = new Conexion();
      
        $consulta = $conexion->prepare('INSERT INTO ' . self::TABLA .' (idcorral, fecha, capacidad, peso_inicial, idlote) VALUES(:idcorral, :fecha, :capacidad, :peso_inicial, :idlote)');
        $consulta->bindParam(':idcorral', $this->idcorral);
        $consulta->bindParam(':fecha', $this->fecha);
        $consulta->bindParam(':capacidad', $this->capacidad);
        $consulta->bindParam(':peso_inicial', $this->peso_inicial);
        $consulta->bindParam(':idlote', $this->idlote);
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
        $consulta = $conexion->prepare('DELETE FROM ' . self::TABLA . ' WHERE idcorral = :idcorral');
        $consulta->bindParam(':idcorral', $this->idcorral);
        $consulta->execute();
        $conexion = null;

      } catch (Exception $e) {
        echo  $e->getMessage();        
      }            
    }

    public function modificar(){
      try {
        $conexion = new Conexion();
        $consulta = $conexion->prepare('UPDATE ' . self::TABLA .' SET idcorral = :idcorral, fecha = :fecha, capacidad= :capacidad, peso_inicial= :peso_inicial, idlote= :idlote WHERE idcorral = :idcorral');
        $consulta->bindParam(':idcorral', $this->idcorral);
        $consulta->bindParam(':fecha', $this->fecha);
        $consulta->bindParam(':capacidad', $this->capacidad);
        $consulta->bindParam(':peso_inicial', $this->peso_inicial);
        $consulta->bindParam(':idlote', $this->idlote);
        $consulta->execute();
      
        $conexion = null;
      } catch (Exception $e) {
        echo  $e->getMessage();
      }        
   }


   public static function buscarPorId($id){
       $conexion = new Conexion();
       $consulta = $conexion->prepare('SELECT idcorral, capacidad FROM ' . self::TABLA . ' WHERE idcorral = :idcorral');
       $consulta->bindParam(':idcorral', $idcorral);
       $consulta->execute();
       $registro = $consulta->fetch();
       if($registro){
          return new self($registro['idcorral'], $registro['capacidad'], $idcorral);
       }else{
          return false;
       }
    }





 }
?>