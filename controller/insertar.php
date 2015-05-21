<?php
 require_once '../model/guardar_cerda.php';
 

 
      $objDatos = json_decode(file_get_contents("php://input"));
   
    	$idcerda= $objDatos->idcerda;
    	$raza=  $objDatos->raza;
    	$fecha_n=  $objDatos->fecha_n;
    	$n_tetas=  $objDatos->n_tetas;
    	$color=  $objDatos->color;
    	$peso=  $objDatos->peso;
    	$valor_cerda=  $objDatos->valor_cerda;


    	
    	$fecha_servicio= $objDatos->fecha_servicio;
    	$estado=  $objDatos->estado;
        $start=  $objDatos->start;
    	$end=  $objDatos->end;
    	$class=  $objDatos->class;
    	
      
    	$operacion= $objDatos->op;

  
        if ( $operacion =="appened" ) {

			 $cerda = new Animal($idcerda, $raza, $fecha_n, $n_tetas, $color, $peso, $valor_cerda,    $fecha_servicio, $estado, $start, $end, $class);
			 $cerda->guardar();
			 echo $cerda->getIdcerda() . ' se ha guardado correctamente con el id: ' . $cerda->getraza();
		}

		if ($operacion == "delete") {
		     echo "eliminar---";
		     $cerda = new Animal($idcerda, $raza, $fecha_n, $n_tetas, $color, $peso, $valor_cerda);
		     $cerda->eliminar();
		     echo $cerda->getIdcerda(). ' se ha eliminado correctamente ' . $cerda->getraza();
		}


		  if ($operacion == "update") {
		     echo "editar---";
		     $cerda = new Animal($idcerda, $raza, $fecha_n, $n_tetas, $color, $peso, $valor_cerda);
		     $cerda->modificar();
		     echo $cerda->getIdcerda(). ' se ha editado correctamente ' . $cerda->getraza();
		  }
?>