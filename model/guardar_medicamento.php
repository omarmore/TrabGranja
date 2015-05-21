<?php
 require_once '../controller/conexion.php';
 class Medicamentos {
    private $Nombre;
    private $fecha;
    private $cant;
    private $valor_unidad;
    private $descripcion;

    const TABLA = 'medicamento';

   public function getNombre() {
      return $this->Nombre;
   }
   public function getFecha() {
      return $this->fecha;
   }
   public function getCant() {
      return $this->cant;
   }
   public function getValor_unidad() {
      return $this->valor_unidad;
   }
   public function getDescipcion() {
      return $this->descripcion;
   }
  




   public function setNombre($Nombre) {
      $this->Nombre = $Nombre;
   }
   public function setFecha($fecha) {
      $this->fecha = $fecha;
   }
   public function setCant($cant) {
      $this->cant = $cant;
   }
   public function setValor_unidad($valor_unidad) {
      $this->valor_unidad = $valor_unidad;
   }
   public function setDescripcion($descripcion) {
      $this->descripcion = $descripcion;
   }
  



    public function __construct($nombre, $fecha, $cant, $valor_unidad, $descripcion) {
       $this->nombre = $nombre;
       $this->fecha = $fecha;
       $this->cant = $cant;
       $this->valor_unidad = $valor_unidad;
       $this->descripcion = $descripcion;
    }



    public function guardar(){
      $conexion = new Conexion();
      
         $consulta = $conexion->prepare('INSERT INTO ' . self::TABLA .' (nombre, fecha, cant, valor_unidad, descripcion) VALUES(:nombre, :fecha, :cant, :valor_unidad, :descripcion)');
         $consulta->bindParam(':nombre', $this->nombre);
         $consulta->bindParam(':fecha', $this->fecha);
         $consulta->bindParam(':cant', $this->cant);
         $consulta->bindParam(':valor_unidad', $this->valor_unidad);
         $consulta->bindParam(':descripcion', $this->descripcion);
         $consulta->execute();
         $this->id = $conexion->lastInsertId();
      
      $conexion = null;
   }


   public static function buscarPorId($id){
       $conexion = new Conexion();
       $consulta = $conexion->prepare('SELECT nombre, cant FROM ' . self::TABLA . ' WHERE nombre = :nombre');
       $consulta->bindParam(':nombre', $nombre);
       $consulta->execute();
       $registro = $consulta->fetch();
       if($registro){
          return new self($registro['nombre'], $registro['cant'], $nombre);
       }else{
          return false;
       }
    }





 }
?>