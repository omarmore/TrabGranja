<?php
 require_once '../controller/conexion.php';
 class Animal {
    private $id;
    private $idcerda;
    private $fecha;
    private $cant_nacidos;
    private $nacidos_vivos;
    private $cant_hembras;
    private $cant_machos;
    
    
    private $idbarraco;
    private $fecha_servicio;
    private $start;
    private $end;
    private $tipo;
    private $estado;
    private $class;

    const TABLA = 'parto';
    const TABLA1 = 'estado';

   public function getidcerda() {
      return $this->idcerda;
   }
   public function getFecha() {
      return $this->fecha;
   }
   public function getcant_nacidos() {
      return $this->cant_nacidos;
   }
   public function getnacidos_vivos() {
      return $this->nacidos_vivos;
   }
   public function getcant_hembras() {
      return $this->cant_hembras;
   }
   public function getcant_machos() {
      return $this->cant_machos;
   }





   public function setidcerda($idcerda) {
      $this->idcerda = $idcerda;
   }
   public function setFecha($fecha) {
      $this->fecha = $fecha;
   }
   public function setcant_nacidos($cant_nacidos) {
      $this->cant_nacidos = $cant_nacidos;
   }
   public function setnacidos_vivos($nacidos_vivos) {
      $this->nacidos_vivos = $nacidos_vivos;
   }
   public function setcant_hembras($cant_hembras) {
      $this->cant_hembras = $cant_hembras;
  }
  public function setcant_machos($cant_machos) {
      $this->cant_machos = $cant_machos;
   }
  



    public function __construct($id, $idcerda, $fecha, $cant_nacidos, $nacidos_vivos, $cant_hembras, $cant_machos,  $idbarraco, $fecha_servicio, $start, $end, $tipo, $class, $estado) {
       $this->id = $id;
       $this->idcerda = $idcerda;
       $this->fecha = $fecha;
       $this->cant_nacidos = $cant_nacidos;
       $this->nacidos_vivos = $nacidos_vivos;
       $this->cant_hembras = $cant_hembras;
       $this->cant_machos = $cant_machos;

       $this->idbarraco = $idbarraco;
       $this->fecha_servicio = $fecha_servicio;
       $this->start = $start;
       $this->end = $end;
       $this->tipo = $tipo;
       $this->class = $class;
       $this->estado = $estado;
       
    }



    public function guardar(){
        try {
          $conexion = new Conexion();
      
          $consulta = $conexion->prepare('INSERT INTO ' . self::TABLA .' (idcerda, fecha, cant_nacidos, nacidos_vivos, cant_hembras, cant_machos) VALUES(:idcerda, :fecha, :cant_nacidos, :nacidos_vivos, :cant_hembras, :cant_machos)');
          $consulta->bindParam(':idcerda', $this->idcerda);
          $consulta->bindParam(':fecha', $this->fecha);
          $consulta->bindParam(':cant_nacidos', $this->cant_nacidos);
          $consulta->bindParam(':nacidos_vivos', $this->nacidos_vivos);
          $consulta->bindParam(':cant_hembras', $this->cant_hembras);
          $consulta->bindParam(':cant_machos', $this->cant_machos); 
          $consulta->execute();
          $this->id = $conexion->lastInsertId();

          $consulta1 = $conexion->prepare('UPDATE ' . self::TABLA1 .' SET idcerda = :idcerda, idbarraco= :idbarraco, fecha_servicio= :fecha_servicio, start= :start, end= :end, tipo= :tipo, estado= :estado, class= :class WHERE idcerda = :idcerda');
          $consulta1->bindParam(':idcerda', $this->idcerda);
          $consulta1->bindParam(':idbarraco', $this->idbarraco);
          $consulta1->bindParam(':fecha_servicio', $this->fecha_servicio);
          $consulta1->bindParam(':start', $this->start);
          $consulta1->bindParam(':end', $this->end);
          $consulta1->bindParam(':tipo', $this->tipo);
          $consulta1->bindParam(':estado', $this->estado);
          $consulta1->bindParam(':class', $this->class);
          $consulta1->execute();
      
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
        echo  $e->getMessage();
      }
    }

      public function modificar(){
        try {
          $conexion = new Conexion();
          $consulta = $conexion->prepare('UPDATE ' . self::TABLA .' SET id= :id, idcerda = :idcerda, fecha = :fecha, cant_nacidos= :cant_nacidos, nacidos_vivos= :nacidos_vivos, cant_hembras= :cant_hembras, cant_machos= :cant_machos WHERE id = :id');
          $consulta->bindParam(':id', $this->id);
          $consulta->bindParam(':idcerda', $this->idcerda);
          $consulta->bindParam(':fecha', $this->fecha);
          $consulta->bindParam(':cant_nacidos', $this->cant_nacidos);
          $consulta->bindParam(':nacidos_vivos', $this->nacidos_vivos);
          $consulta->bindParam(':cant_hembras', $this->cant_hembras);
          $consulta->bindParam(':cant_machos', $this->cant_machos);
          $consulta->execute();
      
          $conexion = null;
        } catch (Exception $e) {
          echo  $e->getMessage();
        }

 
   }








 }
?>