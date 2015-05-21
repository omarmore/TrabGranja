<?php
 require_once '../controller/conexion.php';
 class Estados{
    
    private $id;
    private $idcerda;
    private $idbarraco;
    private $fecha_servicio;
    private $start;
    private $end;
    private $tipo;
    private $estado;
    private $class;


    const TABLA = 'estado';

   public function getidcerda() {
      return $this->idcerda;
   }
   public function getidbarraco() {
      return $this->idbarraco;
   }
   public function getfecha_servicio() {
      return $this->fecha_servicio;
   }
   public function getstart() {
      return $this->start;
   }
   public function getend() {
      return $this->end;
   }
   public function gettipo() {
      return $this->tipo;
   }
   public function getestado() {
      return $this->estado;
   }
   public function getclass() {
      return $this->class;
   }
  




   public function setidcerda($idcerda) {
      $this->idcerda = $idcerda;
   }
   public function setidbarraco($idbarraco) {
      $this->idbarraco = $idbarraco;
   }
   public function setfecha_servicio($fecha_servicio) {
      $this->fecha_servicio = $fecha_servicio;
   }
   public function setstart($start) {
      $this->start = $start;
   }
   public function setend($end) {
      $this->end = $end;
   }
   public function settipo($tipo) {
      $this->tipo = $tipo;
   }
   public function setestado($estado) {
      $this->estado = $estado;
   }
   public function setclass($class) {
      $this->class = $class;
   }

  



    public function __construct($id, $idcerda, $idbarraco, $fecha_servicio, $start, $end, $tipo, $estado, $class) {
       $this->id = $id;
       $this->idcerda = $idcerda;
       $this->idbarraco = $idbarraco;
       $this->fecha_servicio = $fecha_servicio;
       $this->start = $start;
       $this->end = $end;
       $this->tipo = $tipo;
       $this->estado = $estado;
       $this->class = $class;
       
    }



    public function guardar(){
      try {
        $conexion = new Conexion();
      
        $consulta = $conexion->prepare('INSERT INTO ' . self::TABLA .' (idcerda, idbarraco, fecha_servicio, start, end, tipo, estado, class) VALUES(:idcerda, :idbarraco, :fecha_servicio, :start, :end, :tipo, :estado, :class)');
        $consulta->bindParam(':idcerda', $this->idcerda);
        $consulta->bindParam(':idbarraco', $this->idbarraco);
        $consulta->bindParam(':fecha_servicio', $this->fecha_servicio);
        $consulta->bindParam(':start', $this->start);
        $consulta->bindParam(':end', $this->end);
        $consulta->bindParam(':tipo', $this->tipo);
        $consulta->bindParam(':estado', $this->estado);
        $consulta->bindParam(':class', $this->class);
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
        $consulta = $conexion->prepare('UPDATE ' . self::TABLA .' SET id= :id, idcerda = :idcerda, idbarraco= :idbarraco, fecha_servicio= :fecha_servicio, start= :start, end= :end,  tipo= :tipo, estado= :estado, class= :class WHERE id = :id');
        $consulta->bindParam(':id', $this->id);
        $consulta->bindParam(':idcerda', $this->idcerda);
        $consulta->bindParam(':idbarraco', $this->idbarraco);
        $consulta->bindParam(':fecha_servicio', $this->fecha_servicio);
        $consulta->bindParam(':start', $this->start);
        $consulta->bindParam(':end', $this->end);
        $consulta->bindParam(':tipo', $this->tipo);
        $consulta->bindParam(':estado', $this->estado);
        $consulta->bindParam(':class', $this->class);
        $consulta->execute();
      
      $conexion = null;
      } catch (Exception $e) {
        echo $e->getMessage();
      }

       
   }




 }
?>