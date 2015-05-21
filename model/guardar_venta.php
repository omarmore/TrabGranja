<?php
 require_once '../controller/conexion.php';
 class Animal {
    private $idventa;
    private $idlote;
    private $fecha;
    private $numero;
    private $total_kg;
    private $valor_kg;
    private $cliente;
    





    const TABLA = 'venta';

   public function getidventa() {
      return $this->idventa;
   }
   public function getidlote() {
      return $this->idlote;
   }
   
   public function getfecha() {
      return $this->fecha;
   }
   public function getnumero() {
      return $this->numero;
   }
   public function gettotal_kg() {
      return $this->total_kg;
   }
   public function getvalor_kg() {
      return $this->valor_kg;
   }
   public function getcliente() {
      return $this->cliente;
   }





   public function setidventa($idventa) {
      $this->idventa = $idventa;
   }
   public function setidlote($idlote) {
      $this->idlote = $idlote;
   }
   public function setfecha($fecha) {
      $this->fecha = $fecha;
   }
   public function setnumero($numero) {
      $this->numero = $numero;
   }
   public function settotal_kg($total_kg) {
      $this->total_kg = $total_kg;
   }
   public function setvalor_kg($valor_kg) {
      $this->valor_kg = $valor_kg;
   }
   public function setcliente($cliente) {
      $this->cliente = $cliente;
   }
   
   
  



    public function __construct( $idventa, $idlote, $fecha, $numero, $total_kg, $valor_kg, $cliente) {
       $this->idventa = $idventa;
       $this->idlote = $idlote;
       $this->fecha = $fecha;
       $this->numero = $numero;
       $this->total_kg = $total_kg;
       $this->valor_kg = $valor_kg;
       $this->cliente = $cliente;
       
    }



    public function guardar(){
      $conexion = new Conexion();
      
         $consulta = $conexion->prepare('INSERT INTO ' . self::TABLA .' ( idventa, idlote, fecha, numero, total_kg, valor_kg, cliente) VALUES(:idventa, :idlote, :fecha, :numero, :total_kg,  :valor_kg, :cliente)');
         $consulta->bindParam(':idventa', $this->idventa);
         $consulta->bindParam(':idlote', $this->idlote);
         $consulta->bindParam(':fecha', $this->fecha);
         $consulta->bindParam(':numero', $this->numero);
         $consulta->bindParam(':total_kg', $this->total_kg);
         $consulta->bindParam(':valor_kg', $this->valor_kg);
         $consulta->bindParam(':cliente', $this->cliente);

         $consulta->execute();
         $this->id = $conexion->lastInsertId();
      
      $conexion = null;
   }








 }
?>