<?php
 require_once '../controller/conexion.php';
 class Controles {
    private $id;
    private $Nombre;
    private $idlote;
    private $fecha;
    private $dosis;
    private $numero_a;
    private $descripcion;

    const TABLA = 'control_lote';

   public function getNombre() {
      return $this->Nombre;
   }
   public function getIdlote() {
      return $this->idlote;
   }
   public function getFecha() {
      return $this->fecha;
   }
   public function getDosis() {
      return $this->dosis;
   }
   public function getNumero_a() {
      return $this->numero_a;
   }
   public function getDescipcion() {
      return $this->descripcion;
   }
  




   public function setNombre($Nombre) {
      $this->Nombre = $Nombre;
   }
   public function setIdlote($idlote) {
      $this->idlote = $idlote;
   }
   public function setFecha($fecha) {
      $this->fecha = $fecha;
   }
   public function setDosis($dosis) {
      $this->dosis = $dosis;
   }
   public function setNumero_a($numero_a) {
      $this->numero_a = $numero_a;
   }
   public function setDescripcion($descripcion) {
      $this->descripcion = $descripcion;
   }
  



    public function __construct($id, $nombre, $idlote, $fecha, $dosis, $numero_a, $descripcion) {
       $this->id = $id;
       $this->nombre = $nombre;
       $this->idlote = $idlote;
       $this->fecha = $fecha;
       $this->dosis = $dosis;
       $this->numero_a = $numero_a;
       $this->descripcion = $descripcion;
    }



  public function guardar(){
        try {
          $conexion = new Conexion();
      
          $consulta = $conexion->prepare('INSERT INTO ' . self::TABLA .' (nombre, idlote, fecha, dosis, numero_a, descripcion) VALUES(:nombre, :idlote, :fecha, :dosis, :numero_a, :descripcion)');
          $consulta->bindParam(':nombre', $this->nombre);
          $consulta->bindParam(':idlote', $this->idlote);
          $consulta->bindParam(':fecha', $this->fecha);
          $consulta->bindParam(':dosis', $this->dosis);
          $consulta->bindParam(':numero_a', $this->numero_a);
          $consulta->bindParam(':descripcion', $this->descripcion);
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
        $consulta = $conexion->prepare('UPDATE ' . self::TABLA .' SET id= :id, nombre = :nombre, idlote = :idlote, fecha= :fecha, dosis= :dosis, numero_a:=numero_a, descripcion= :descripcion WHERE id = :id ');
        $consulta->bindParam(':id', $this->id);
        $consulta->bindParam(':nombre', $this->nombre);
        $consulta->bindParam(':idlote', $this->idlote);
        $consulta->bindParam(':fecha', $this->fecha);
        $consulta->bindParam(':dosis', $this->dosis);
        $consulta->bindParam(':numero_a', $this->numero_a);
        $consulta->bindParam(':descripcion', $this->descripcion);;
        $consulta->execute();
      
        $conexion = null;
    } catch (Exception $e) {
      echo $e->getMessage();
      
    }

  }




   public static function buscarPorId($id){
       $conexion = new Conexion();
       $consulta = $conexion->prepare('SELECT nombre, idlote FROM ' . self::TABLA . ' WHERE nombre = :nombre');
       $consulta->bindParam(':nombre', $nombre);
       $consulta->execute();
       $registro = $consulta->fetch();
       if($registro){
          return new self($registro['nombre'], $registro['idlote'], $nombre);
       }else{
          return false;
       }
    }





 }
?>