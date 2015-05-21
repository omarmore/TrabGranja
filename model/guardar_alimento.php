<?php
 require_once '../controller/conexion.php';
 class alimento {
    private $nombre_alimento;
    private $descripcion;
    private $fecha_compra;
    private $tipo;
    private $cant_exist_bulto;
    private $cant_exist_kg;
    private $valor_bulto;
    private $valor_kg;


    const TABLA = 'alimentos';

   public function getnombre_alimento() {
      return $this->nombre_alimento;
   }
   public function getdescripcion() {
      return $this->descripcion;
   }
   public function getFecha_compra() {
      return $this->fecha_compra;
   }
   public function gettipo() {
      return $this->tipo;
   }
   public function getcant_exist_bulto() {
      return $this->cant_exist_bulto;
   }
   public function getCant_exist_kg() {
      return $this->cant_exist_kg;
   }
   public function getValor_bulto() {
      return $this->valor_bulto;
   }
   public function getValor_kg() {
      return $this->valor_kg;
   }


   public function setnombre_alimento($nombre_alimento) {
      $this->nombre_alimento = $nombre_alimento;
   }
   public function setDescripcion($descripcion) {
      $this->descripcion = $descripcion;
   }
   public function setFecha_compra($fecha_compra) {
      $this->fecha_compra = $fecha_compra;
   }
   public function settipo($tipo) {
      $this->tipo = $tipo;
   }
   public function setCant_exist_bulto($cant_exist_bulto) {
      $this->cant_exist_bulto = $cant_exist_bulto;
   }
   public function setCant_exist_kg($cant_exist_kg) {
      $this->cant_exist_kg = $cant_exist_kg;
   }
   public function setValor_bulto($valor_bulto) {
      $this->valor_bulto = $valor_bulto;
   }
   public function setValor_kg($valor_kg) {
      $this->valor_kg = $valor_kg;
   }
  



    public function __construct($nombre_alimento=null, $descripcion, $fecha_compra, $tipo, $cant_exist_bulto, $cant_exist_kg, $valor_bulto,   $valor_kg) {
       $this->nombre_alimento = $nombre_alimento;
       $this->descripcion = $descripcion;
       $this->fecha_compra = $fecha_compra;
       $this->tipo = $tipo;
       $this->cant_exist_bulto = $cant_exist_bulto;
       $this->cant_exist_kg = $cant_exist_kg;
       $this->valor_bulto = $valor_bulto;
       $this->valor_kg = $valor_kg;

    }



    public function guardar(){
      $conexion = new Conexion();
      
         $consulta = $conexion->prepare('INSERT INTO ' . self::TABLA .' (nombre_alimento, descripcion, fecha_compra, tipo, cant_exist_bulto, cant_exist_kg, valor_bulto, valor_kg) VALUES(:nombre_alimento, :descripcion, :fecha_compra, :tipo, :cant_exist_bulto, :cant_exist_kg, :valor_bulto, :valor_kg)');
         $consulta->bindParam(':nombre_alimento', $this->nombre_alimento);
         $consulta->bindParam(':descripcion', $this->descripcion);
         $consulta->bindParam(':fecha_compra', $this->fecha_compra);
         $consulta->bindParam(':tipo', $this->tipo);
         $consulta->bindParam(':cant_exist_bulto', $this->cant_exist_kg);
         $consulta->bindParam(':cant_exist_kg', $this->cant_exist_kg);
         $consulta->bindParam(':valor_bulto', $this->valor_bulto);
         $consulta->bindParam(':valor_kg', $this->valor_kg);
         $consulta->execute();
         $this->id = $conexion->lastInsertId();
      
      $conexion = null;
   }    





 }
?>