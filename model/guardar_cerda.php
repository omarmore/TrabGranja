<?php
 require_once '../controller/conexion.php';
 class Animal {
    private $idcerda;
    private $raza;
    private $fecha_n;
    private $n_tetas;
    private $color;
    private $peso;
    private $valor_cerda;

    
    private $fecha_servicio;
    private $estado;
    private $start;
    private $end;
    private $class;

    const TABLA = 'cerda';
    const TABLA1 = 'estado';

   public function getIdcerda() {
      return $this->idcerda;
   }
   public function getraza() {
      return $this->raza;
   }
   public function getFecha_n() {
      return $this->fecha_n;
   }
   public function getn_tetas() {
      return $this->n_tetas;
   }
   public function getColor() {
      return $this->color;
   }
   public function getPeso() {
      return $this->peso;
   }
   public function getValor_cerda() {
      return $this->valor_cerda;
   }
  




   public function setIdcerda($idcerda) {
      $this->idcerda = $idcerda;
   }
   public function setRaza($raza) {
      $this->raza = $raza;
   }
   public function setFecha_n($fecha_n) {
      $this->fecha_n = $fecha_n;
   }
   public function setn_tetas($n_tetas) {
      $this->n_tetas = $n_tetas;
   }
   public function setColor($color) {
      $this->color = $color;
   }
   public function setPeso($peso) {
      $this->peso = $peso;
   }
   public function setvalor_cerda($valor_cerda) {
      $this->valor_cerda = $valor_cerda;
   }
  



    public function __construct($idcerda=null, $raza, $fecha_n, $n_tetas, $color, $peso, $valor_cerda,    $fecha_servicio, $estado, $start, $end, $class) {
       $this->idcerda = $idcerda;
       $this->raza = $raza;
       $this->fecha_n = $fecha_n;
       $this->n_tetas = $n_tetas;
       $this->color = $color;
       $this->peso = $peso;
       $this->valor_cerda = $valor_cerda;

       
       $this->fecha_servicio = $fecha_servicio;
       $this->estado = $estado;
       $this->start = $start;
       $this->end = $end;
       $this->class = $class;
    }



    public function guardar(){
      $conexion = new Conexion();
      
         $consulta = $conexion->prepare('INSERT INTO ' . self::TABLA .' (idcerda, raza, fecha_n, n_tetas, color, peso, valor_cerda) VALUES(:idcerda, :raza, :fecha_n, :n_tetas, :color, :peso, :valor_cerda)');
         $consulta->bindParam(':idcerda', $this->idcerda);
         $consulta->bindParam(':raza', $this->raza);
         $consulta->bindParam(':fecha_n', $this->fecha_n);
         $consulta->bindParam(':n_tetas', $this->n_tetas);
         $consulta->bindParam(':color', $this->color);
         $consulta->bindParam(':peso', $this->peso);
         $consulta->bindParam(':valor_cerda', $this->valor_cerda);
         $consulta->execute();
         $this->id = $conexion->lastInsertId();


         $consulta1 = $conexion->prepare('INSERT INTO ' . self::TABLA1 .' (idcerda, fecha_servicio, estado, start, end, class) VALUES(:idcerda, :fecha_servicio, :estado, :start, :end, :class)');
         $consulta1->bindParam(':idcerda', $this->idcerda);
         $consulta1->bindParam(':fecha_servicio', $this->fecha_servicio);
         $consulta1->bindParam(':estado', $this->estado);         
         $consulta1->bindParam(':start', $this->start);
         $consulta1->bindParam(':end', $this->end);
         $consulta1->bindParam(':class', $this->class);
         $consulta1->execute();
         $this->id = $conexion->lastInsertId();
      
      $conexion = null;
   }
     

    




    public function eliminar(){
        $conexion = new Conexion();
         $consulta = $conexion->prepare('DELETE FROM ' . self::TABLA . ' WHERE idcerda = :idcerda');
         $consulta->bindParam(':idcerda', $this->idcerda);
         $consulta->execute();
    
      $conexion = null;
   }







   public function modificar(){

        $conexion = new Conexion();
         $consulta = $conexion->prepare('UPDATE ' . self::TABLA .' SET idcerda = :idcerda, raza = :raza, fecha_n= :fecha_n, n_tetas= :n_tetas, color= :color, peso= :peso, valor_cerda= :valor_cerda WHERE idcerda = :idcerda');
         $consulta->bindParam(':idcerda', $this->idcerda);
         $consulta->bindParam(':raza', $this->raza);
         $consulta->bindParam(':fecha_n', $this->fecha_n);
         $consulta->bindParam(':n_tetas', $this->n_tetas);
         $consulta->bindParam(':color', $this->color);
         $consulta->bindParam(':peso', $this->peso);
         $consulta->bindParam(':valor_cerda', $this->valor_cerda);
         $consulta->execute();
      
      $conexion = null;
   }





 }
?>