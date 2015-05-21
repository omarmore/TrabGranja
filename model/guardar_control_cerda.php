<?php
 require_once '../controller/conexion.php';
 class Controles {
    private $id;
    private $Nombre;
    private $idcerda;
    private $fecha;
    private $dosis;
    private $descripcion;

    const TABLA = 'control_cerda';

   public function getNombre() {
      return $this->Nombre;
   }
   public function getIdcerda() {
      return $this->idcerda;
   }
   public function getFecha() {
      return $this->fecha;
   }
   public function getDosis() {
      return $this->dosis;
   }
   public function getDescipcion() {
      return $this->descripcion;
   }
  




   public function setNombre($Nombre) {
      $this->Nombre = $Nombre;
   }
   public function setIdcerda($idcerda) {
      $this->idcerda = $idcerda;
   }
   public function setFecha($fecha) {
      $this->fecha = $fecha;
   }
   public function setDosis($dosis) {
      $this->dosis = $dosis;
   }
   public function setDescripcion($descripcion) {
      $this->descripcion = $descripcion;
   }
  



    public function __construct($id, $nombre, $idcerda, $fecha, $dosis, $descripcion) {
       $this->id = $id;
       $this->nombre = $nombre;
       $this->idcerda = $idcerda;
       $this->fecha = $fecha;
       $this->dosis = $dosis;
       $this->descripcion = $descripcion;
    }



    public function guardar(){
        try {
          $conexion = new Conexion();      
          $consulta = $conexion->prepare('INSERT INTO ' . self::TABLA .' (nombre, idcerda, fecha, dosis, descripcion) VALUES(:nombre, :idcerda, :fecha, :dosis, :descripcion)');
          $consulta->bindParam(':nombre', $this->nombre);
          $consulta->bindParam(':idcerda', $this->idcerda);
          $consulta->bindParam(':fecha', $this->fecha);
          $consulta->bindParam(':dosis', $this->dosis);
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
        $consulta = $conexion->prepare('UPDATE ' . self::TABLA .' SET nombre = :nombre, idcerda = :idcerda, fecha= :fecha, dosis= :dosis, descripcion= :descripcion WHERE id = :id ');
        $consulta->bindParam(':id', $this->id);
        $consulta->bindParam(':nombre', $this->nombre);
        $consulta->bindParam(':idcerda', $this->idcerda);
        $consulta->bindParam(':fecha', $this->fecha);
        $consulta->bindParam(':dosis', $this->dosis);
        $consulta->bindParam(':descripcion', $this->descripcion);
        $consulta->execute();
      
        $conexion = null;
    } catch (Exception $e) {
      echo $e->getMessage();      
    }

   }


   public static function buscarPorId($id){
       $conexion = new Conexion();
       $consulta = $conexion->prepare('SELECT nombre, idcerda FROM ' . self::TABLA . ' WHERE nombre = :nombre');
       $consulta->bindParam(':nombre', $nombre);
       $consulta->execute();
       $registro = $consulta->fetch();
       if($registro){
          return new self($registro['nombre'], $registro['idcerda'], $nombre);
       }else{
          return false;
       }
    }





 }
?>