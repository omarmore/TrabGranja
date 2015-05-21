<?php
 require_once '../controller/conexion.php';
 class Lotes {
    private $idlote;
    private $fecha_n;
    private $cant;
    private $peso;

    const TABLA = 'lote';

   public function getIdlote() {
      return $this->idlote;
   }
   public function getFecha_n() {
      return $this->fecha_n;
   }
   public function getcant() {
      return $this->cant;
   }
   public function getpeso() {
      return $this->peso;
   }
  




   public function setIdlote($idlote) {
      $this->idlote = $idlote;
   }
   public function setFecha_n($fecha_n) {
      $this->fecha_n = $fecha_n;
   }
   public function setcant_animales($cant) {
      $this->cant = $cant;
   }
   public function setpeso_nac($peso) {
      $this->peso = $peso;
   }
  



    public function __construct($idlote=null, $fecha_n, $cant, $peso) {
       $this->idlote = $idlote;
       $this->fecha_n = $fecha_n;
       $this->cant_animales = $cant;
       $this->peso_nac = $peso;
    }

   

    public function guardar(){
      try {
        $conexion = new Conexion();
      
        $consulta = $conexion->prepare('INSERT INTO ' . self::TABLA .' (idlote, fecha_n, cant_animales, peso_nac) VALUES(:idlote, :fecha_n, :cant_animales, :peso_nac)');
        $consulta->bindParam(':idlote', $this->idlote);
        $consulta->bindParam(':fecha_n', $this->fecha_n);
        $consulta->bindParam(':cant_animales', $this->cant_animales);
        $consulta->bindParam(':peso_nac', $this->peso_nac);
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
        $consulta = $conexion->prepare('DELETE FROM ' . self::TABLA . ' WHERE idlote = :idlote');
        $consulta->bindParam(':idlote', $this->idlote);
        $consulta->execute();
    
        $conexion = null;
      } catch (Exception $e) {
        echo $e->getMessage();
      }
        
   }

  public function modificar(){
    try {

        $conexion = new Conexion();
        $consulta = $conexion->prepare('UPDATE ' . self::TABLA .' SET idlote = :idlote, fecha_n= :fecha_n, cant_animales= :cant_animales, peso_nac= :peso_nac WHERE idlote = :idlote');
        $consulta->bindParam(':idlote', $this->idlote);
        $consulta->bindParam(':fecha_n', $this->fecha_n);
        $consulta->bindParam(':cant_animales', $this->cant_animales);
        $consulta->bindParam(':peso_nac', $this->peso_nac);        
        $consulta->execute();
      
      $conexion = null;
    } catch (Exception $e) {
      echo $e->getMessage();
    }

   }



   public static function buscarPorId($id){
       $conexion = new Conexion();
       $consulta = $conexion->prepare('SELECT idlote, cant_animales_animales FROM ' . self::TABLA . ' WHERE idlote = :idlote');
       $consulta->bindParam(':idlote', $idlote);
       $consulta->execute();
       $registro = $consulta->fetch();
       if($registro){
          return new self($registro['idlote'], $registro['cant_animales_animales'], $idlote);
       }else{
          return false;
       }
    }





 }
?>