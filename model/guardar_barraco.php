<?php
 require_once '../controller/conexion.php';
 class Animal {
    private $idbarraco;
    private $raza;
    private $fecha_n;
    private $linea;
    private $estado;
    private $peso;
    private $valor_barraco;

    const TABLA = 'barraco';

   public function getidbarraco() {
      return $this->idbarraco;
   }
   public function getraza() {
      return $this->raza;
   }
   public function getFecha_n() {
      return $this->fecha_n;
   }
   public function getlinea() {
      return $this->linea;
   }
   public function getEstado() {
      return $this->estado;
   }
   public function getPeso() {
      return $this->peso;
   }
   public function getvalor_barraco() {
      return $this->valor_barraco;
   }
  




   public function setidbarraco($idbarraco) {
      $this->idVarraco = $idbarraco;
   }
   public function setRaza($raza) {
      $this->raza = $raza;
   }
   public function setFecha_n($fecha_n) {
      $this->fecha_n = $fecha_n;
   }
   public function setlinea($linea) {
      $this->linea = $linea;
   }
   public function setEstado($estado) {
      $this->color = $estado;
   }
   public function setPeso($peso) {
      $this->peso = $peso;
   }
   public function setvalor_barraco($valor_barraco) {
      $this->valor_varraco = $valor_barraco;
   }
  



    public function __construct($idbarraco=null, $raza, $fecha_n, $linea, $estado, $peso, $valor_barraco) {
       $this->idbarraco = $idbarraco;
       $this->raza = $raza;
       $this->fecha_n = $fecha_n;
       $this->linea = $linea;
       $this->estado = $estado;
       $this->peso = $peso;
       $this->valor_barraco = $valor_barraco;
    }



    public function guardar(){
      $conexion = new Conexion();
      
         $consulta = $conexion->prepare('INSERT INTO ' . self::TABLA .' (idbarraco, raza, fecha_n, linea, estado, peso, valor_barraco) VALUES(:idbarraco, :raza, :fecha_n, :linea, :estado, :peso, :valor_barraco)');
         $consulta->bindParam(':idbarraco', $this->idbarraco);
         $consulta->bindParam(':raza', $this->raza);
         $consulta->bindParam(':fecha_n', $this->fecha_n);
         $consulta->bindParam(':linea', $this->linea);
         $consulta->bindParam(':estado', $this->estado);
         $consulta->bindParam(':peso', $this->peso);
         $consulta->bindParam(':valor_barraco', $this->valor_barraco);
         $consulta->execute();
         $this->id = $conexion->lastInsertId();
      
      $conexion = null;
   }

    public function eliminar(){
        $conexion = new Conexion();
         $consulta = $conexion->prepare('DELETE FROM ' . self::TABLA . ' WHERE idbarraco = :idbarraco');
         $consulta->bindParam(':idbarraco', $this->idbarraco);
         $consulta->execute();
    
      $conexion = null;
   }

  public function modificar(){

        $conexion = new Conexion();
         $consulta = $conexion->prepare('UPDATE ' . self::TABLA .' SET idbarraco = :idbarraco, raza = :raza, fecha_n= :fecha_n, linea= :linea, estado= :estado, peso= :peso, valor_barraco= :valor_barraco WHERE idbarraco = :idbarraco');
         $consulta->bindParam(':idbarraco', $this->idbarraco);
         $consulta->bindParam(':raza', $this->raza);
         $consulta->bindParam(':fecha_n', $this->fecha_n);
         $consulta->bindParam(':linea', $this->linea);
         $consulta->bindParam(':estado', $this->estado);
         $consulta->bindParam(':peso', $this->peso);
         $consulta->bindParam(':valor_barraco', $this->valor_barraco);
         $consulta->execute();
      
      $conexion = null;
  } 


   public static function buscarPorId($id){
       $conexion = new Conexion();
       $consulta = $conexion->prepare('SELECT idbarraco, estado FROM ' . self::TABLA . ' WHERE idbarraco = :idbarraco');
       $consulta->bindParam(':idbarraco', $idbarraco);
       $consulta->execute();
       $registro = $consulta->fetch();
       if($registro){
          return new self($registro['idbarraco'], $registro['linea'], $idbarraco);
       }else{
          return false;
       }
    }





 }
?>