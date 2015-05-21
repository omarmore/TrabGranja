angular.module("app")


.controller("appCtrl",  function controladorPrincipal($scope, $http, $scope){

    
        var vm=this;

        //inicializo un objeto en los datos de formulario
        vm.fdatos = {};
        
        
        $scope.names = [];
        $(document).ready(function () {
          $('.varracos, .varracos2, .calendario1').css('display', 'none');
        })
        $scope.showModal= function(){
            $scope.names={};
              var modalInstance =$modal.open({
                templateUrl:'template/formmodal.html'
              })
         }
         vm.calendario = function(){
          $('.calendario1').css('display', 'inline');
        }


/*  Este lo uso en el boton listar */
        vm.listar = function(){
          

              $http.get('hola.php')
                .success(function(data) {
                    $scope.names = data;
                    console.log(data);                    
                    $('.varracos, .varracos2').css('display', 'block');                    
                })

              .error(function(data) {
                    console.log('Error: ' + data);
            });
                          
        }

    /*Dependiendo de la variable "OP" que le emvío al archivo insertar.php
    el me va a hacer una acción, que puede ser
    "appened" que es para guardar, "delete" que es para eliminar, faltaría la 
    "update" para el botón modificar*/
         
        vm.enviar = function(){
          $scope.textButton = "Guardar";
          
          $events = "event-info"; /* DEPENDE DEL TIPO DE EVENTO QUE SE REQUIERA*/
          $http.post("insertar1.php", { op: "appened", nombre: vm.fdatos.nombre.getTime(), edad: vm.fdatos.nombre.getTime()+1, tipo: $events})
            .success(function(res){
              console.log(res);
              $scope.vm.fdatos={};

              $http.get('hola.php')
                .success(function(data) {
                    $scope.names = data;
                    console.log(data);
                })
          })
        //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;                     
            .error(function(data) {
                    console.log('Error: ' + data);
            });                  
        }



/*  Si le doy click en un botón eliminar debería borrar ese registro
que está en el template prueba.html */

        vm.borrar = function(nombre){
          $http.post("insertar1.php", {op: "delete", nombre: nombre, edad : ""})
            .success(function(res){
              console.log(res);

              $http.get('hola.php')
                .success(function(data) {
                    $scope.names = data;
                    console.log(data);
                })

          })
        //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;                                      
            .error(function(data) {
                    console.log('Error: ' + data);
            });
        }



        vm.editar1 = function(nombre, edad){
          $scope.textButton = "Editar";         
          $scope.vm.fdatos={nombre: nombre, edad: edad};               
          vm.editar =function (){
              $scope.textButton = "Editar";
              $http.post("insertar1.php", { op: "update", nombre: vm.fdatos.nombre, edad: vm.fdatos.edad})
                .success(function(res){
                  console.log(res);
                  $scope.vm.fdatos={};

                  $http.get('hola.php')
                    .success(function(data) {
                        $scope.names = data;
                        console.log(data);
                    })
              })
            //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;                     
                .error(function(data) {
                        console.log('Error: ' + data);
                });                  
            }


          }

                             
    })




// *****************************CONTROLADOR DE TABLA CERDA ***************************************


.controller("appCtrlRegistro",  function controladorPrincipal($scope, $http, $scope){
   
        var vm=this;
        //inicializo un objeto en los datos de formulario
        vm.fdatos = {};
        $scope.names = [];

        $(document).ready(function () {
           $('.tabla_lote, .eliminar_varraco, .tabla_cerda, .tabla_corral, .form_cerda, .form_lote, .form_varraco, .form_corral, .tabla_corral, .eliminar_cerda, .eliminar_lote, .eliminar_corral, .bguardar, .beditar, .tabla_varraco, .bguardarVarraco, .beditarVarraco').css('display', 'none');
        }) 
})  

.controller("appCtrlRegistroCerda",  function controladorPrincipal($scope, $http, $scope){
         var vm=this;
        //inicializo un objeto en los datos de formulario
        vm.fdatos = {};
        $scope.names = [];

        $(document).ready(function () {
          $('.tabla_lote, .tabla_cerda, .tabla_corral, .tabla_varraco, .form_cerda, .tabla_alimento, .form_lote, .form_varraco, .form_corral, .form_alimento, .eliminar_cerda, .eliminar_varraco, .eliminar_lote, .eliminar_corral, .eliminar_alimento,  .bguardar, .beditar, .bguardarVarraco, .beditarVarraco').css('display', 'none');
        })
/*  Este lo uso en el boton listar */
        listarCerda = function(){
          
          $('.form_cerda, .form_varraco, .form_corral, .form_lote, .eliminar_cerda, .eliminar_lote, .eliminar_corral, .tabla_lote, .tabla_corral, .tabla_varraco').css('display', 'none');

              $http.get('controller/consulta_cerda.php')
                .success(function(data) {
                    $scope.names = data;
                    console.log(data);                    
                    $('.tabla_cerda').css('display', 'inline');                    
                })

              .error(function(data) {
                    console.log('Error: ' + data);
               });                          
        }

        listarCerda();

    /*Dependiendo de la variable "OP" que le emvío al archivo insertar.php
    el me va a hacer una acción, que puede ser
    "appened" que es para guardar, "delete" que es para eliminar, faltaría la 
    "update" para el botón modificar*/
      
         
        vm.enviarCerda = function(){
          $scope.textButton = "Guardar cerda";
            $('.form_cerda, .bguardar').css('display', 'block');
            $scope.vm.fdatos={idcerda: "", raza: "", fecha_n: "", n_tetas: "", color: "", peso: "", valor_cerda: ""};               
            vm.enviarCerda1 = function() {
                $http.post("controller/insertar.php", {
                    op: "appened",
                    idcerda: vm.fdatos.idcerda,
                    raza: vm.fdatos.raza,
                    fecha_n: vm.fdatos.fecha_n,
                    n_tetas: vm.fdatos.n_tetas,
                    color: vm.fdatos.color,
                    peso: vm.fdatos.peso,
                    valor_cerda: vm.fdatos.valor_cerda,

                    fecha_servicio: new Date(vm.fdatos.fecha_n.getTime()+ 10540800000),
                    start: vm.fdatos.fecha_n.getTime()+ 10540800000,
                    end: vm.fdatos.fecha_n.getTime() + 10540800000+86300000,
                    estado: "Vacia",
                    class: "event-in",
                })
                    .success(function (res) {
                        console.log(res);
                        $scope.vm.fdatos = {};

                        $http.get('controller/consulta_cerda.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })
                    })

                    //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('.form_cerda').css('display', 'none');
            }
        }

/*  Si le doy click en un botón eliminar debería borrar ese registro
que está en el template prueba.html */
        vm.borrarCerda = function(idcerda){
            $('.eliminar_cerda').css('display', 'block');
          vm.borrarCerda1 = function()
            {
                $http.post("controller/insertar.php", {
                    op: "delete",
                    idcerda: idcerda,
                    raza: "",
                    fecha_n: "",
                    n_tetas: "",
                    color: "",
                    peso: "",
                    valor_cerda: ""
                })
                    .success(function (res) {
                        console.log(res);

                        $http.get('controller/consulta_cerda.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })

                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('.eliminar_cerda').css('display', 'none');
            }
        }


        vm.editarCerda = function(idcerda, raza, fecha_n, n_tetas, color, peso, valor_cerda){
          $scope.textButton = "Editar cerda";
          $('.form_cerda, .beditar').css('display', 'block');
          $scope.vm.fdatos={idcerda: idcerda, raza: raza, fecha_n: Number(fecha_n), n_tetas: n_tetas, color: color, peso: Number(peso), valor_cerda: valor_cerda};               

          vm.editarCerda1 =function (){
              $scope.textButton = "Modificar un usuario";
              $http.post("controller/insertar.php", { op: "update", idcerda: vm.fdatos.idcerda, raza: vm.fdatos.raza, fecha_n: vm.fdatos.fecha_n, n_tetas: vm.fdatos.n_tetas, color :vm.fdatos.color, peso: vm.fdatos.peso, valor_cerda: vm.fdatos.valor_cerda})
                .success(function(res){
                  console.log(res);
                  $scope.vm.fdatos={};

                  $http.get('controller/consulta_cerda.php')
                    .success(function(data) {
                        $scope.names = data;
                        console.log(data);
                    })
                  $('.form_cerda').css('display', 'none');
              })
            //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;                     
                .error(function(data) {
                        console.log('Error: ' + data);
                });                  
            }
          }

})
         
.controller("appCtrlRegistroVarraco",  function controladorPrincipal($scope, $http, $scope){       

       var vm=this;
        //inicializo un objeto en los datos de formulario
        vm.fdatos = {};
        $scope.names = [];

        $(document).ready(function () {
          $('.tabla_lote, .tabla_cerda, .tabla_corral, .tabla_varraco, .form_cerda, .tabla_alimento, .form_lote, .form_varraco, .form_corral, .form_alimento, .eliminar_cerda, .eliminar_varraco, .eliminar_lote, .eliminar_corral, .eliminar_alimento,  .bguardar, .beditar, .bguardarVarraco, .beditarVarraco').css('display', 'none');
        })

       listarVarraco = function(){         
          $(document).ready(function () {
            $('.tabla_cerda, .form_cerda, .form_varraco, .form_corral, .form_lote, .eliminar_cerda, .eliminar_lote, .eliminar_corral, .tabla_lote, .tabla_corral').css('display', 'none');
          })
              $http.get('controller/consultaVarraco.php')
                .success(function(data) {
                    $scope.names = data;
                    console.log(data);                    
                    $('.tabla_varraco').css('display', 'inline');                    
                })

              .error(function(data) {
                    console.log('Error: ' + data);
               });                          
        }

        listarVarraco();

          //permite guardar un nuevo registro de en la tabla varraco
        vm.enviarVarraco = function(){

            $scope.textButton = "Guardar varraco";
            $('.beditarVarraco').css('display', 'none');            
            $('.form_varraco, .bguardarVarraco').css('display', 'block');
            $scope.vm.fdatos={idvarraco: "", raza: "", fecha_n: "", estado: "", linea: "", peso: "", valor_varraco: ""};               
            
            vm.enviarVarraco1 = function() {


                $http.post("controller/insertar_barraco.php", {
                    op: "appVarraco",
                    idbarraco: vm.fdatos.idvarraco,
                    raza: vm.fdatos.raza,
                    fecha_n: vm.fdatos.fecha_n,
                    linea: vm.fdatos.linea,
                    estado: vm.fdatos.estado,
                    peso: vm.fdatos.peso,
                    valor_barraco: vm.fdatos.valor_varraco
                })
                    .success(function (res) {
                        console.log(res);
                        $scope.vm.fdatos = {};

                        $http.get('controller/consultaVarraco.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })
                    })

                    //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('.form_cerda').css('display', 'none');
            }
        }

        vm.borrarVarraco= function(idbarraco){
            $('.eliminar_varraco').css('display', 'block');
            $('.form_varraco').css('display', 'none');
          vm.borrarVarraco1 = function()
            {
                $http.post("controller/insertar_barraco.php", {
                    op: "deleteVarraco",
                    idbarraco: idbarraco,
                    raza: "",
                    fecha_n: "",
                    linea: "",
                    estado: "",
                    peso: "",
                    valor_barraco: ""
                })
                    .success(function (res) {
                        console.log(res);

                        $http.get('controller/consultaVarraco.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })

                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('.eliminar_varraco').css('display', 'none');
            }
        }


        vm.editarVarraco = function(idvarraco, raza, fecha_n, linea, estado, peso, valor_varraco){
          $scope.textButton = "Editar varraco";
          $('.bguardarVarraco, .eliminar_varraco').css('display', 'none');
          $('.form_varraco, .beditarVarraco').css('display', 'block');
          $scope.vm.fdatos={idvarraco: idvarraco, raza: raza, fecha_n: Number(fecha_n), estado: estado, linea: linea, peso:Number(peso), valor_varraco: Number(valor_varraco)};               

          vm.editarVarraco1 =function (){
              $scope.textButton = "Modificar un varraco";
              $http.post("controller/insertar_barraco.php", { op: "updateVarraco", idvarraco: vm.fdatos.idvarraco, raza: vm.fdatos.raza, fecha_n: vm.fdatos.fecha_n, linea: vm.fdatos.linea, estado: vm.fdatos.estado, peso: vm.fdatos.peso, valor_barraco: vm.fdatos.valor_varraco})
                .success(function(res){
                  console.log(res);
                  $scope.vm.fdatos={};
                  $('.form_varraco, .beditarVarraco').css('display', 'none');

                  $http.get('controller/consultaVarraco.php')
                    .success(function(data) {
                        $scope.names = data;
                        console.log(data);
                    })
                  $('.form_cerda').css('display', 'none');
              })
            //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;                     
                .error(function(data) {
                        console.log('Error: ' + data);
                });                  
            }
          } 
})
 // *****************************CONTROLADOR DE TABLA LOTE ***************************************            
    //metodo que lista los datos de la tabla lote
.controller("appCtrlRegistroLote",  function controladorPrincipal($scope, $http, $scope){ 
      var vm=this;
        //inicializo un objeto en los datos de formulario
        vm.fdatos = {};
        $scope.names = [];

        $(document).ready(function () {
          $('.tabla_lote, .tabla_cerda, .tabla_corral, .tabla_varraco, .form_cerda, .tabla_alimento, .form_lote, .form_varraco, .form_corral, .form_alimento, .eliminar_cerda, .eliminar_varraco, .eliminar_lote, .eliminar_corral, .eliminar_alimento,  .bguardar, .beditar, .bguardarVarraco, .beditarVarraco').css('display', 'none');
        })

      listarLote = function(){ 
      console.log('hola');        
          $(document).ready(function () {
            $('.tabla_cerda, .tabla_varraco, .tabla_corral, .form_cerda, .form_varraco, .form_corral, .eliminar_lote, .eliminar_cerda, .eliminar_varraco, .eliminar_corral').css('display', 'none');
          }) 
              $http.get('controller/consultaLote.php')
                .success(function(data) {
                    $scope.names = data;
                    console.log(data);                    
                    $('.tabla_lote').css('display', 'inline');                    
                })

              .error(function(data) {
                    console.log('Error: ' + data);
               });                          
    }

    listarLote();

    //metodo que permite guardar un nuevo registro de a la tabla lote
     vm.enviarLote = function(){

            $scope.textButton = "Guardar lote";
            $('.beditarLote').css('display', 'none');            
            $('.form_lote, .bguardarLote').css('display', 'block');
            $scope.vm.fdatos={idlote: "", fecha_n: "", cant: "", peso: ""}; 
            
            vm.enviarLote1 = function() {

                $http.post("controller/insertar_lote.php", {
                    op: "addLote",
                    idlote: vm.fdatos.idlote,
                    fecha_n: vm.fdatos.fecha_n,
                    cant: vm.fdatos.cant,
                    peso: vm.fdatos.peso,
                })
                    .success(function (res) {
                        console.log(res);
                        $scope.vm.fdatos = {};

                        $http.get('controller/consultaLote.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })
                    })

                    //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('.form_cerda').css('display', 'none');
            }
        } 

        vm.borrarLote= function(idlote){
            $('.eliminar_lote').css('display', 'block');
            $('.form_lote').css('display', 'none');
            console.log('eliminado jijij trol');
          vm.borrarLote1 = function()
            {
                $http.post("controller/insertar_lote.php", {
                    op: "deleteLote",
                    idlote: idlote,                    
                    fecha_n: "",
                    cant: "",
                    peso:""
                })
                    .success(function (res) {
                        console.log(res);

                        $http.get('controller/consultaLote.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })

                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('.eliminar_lote').css('display', 'none');
            }
        }

        vm.editarLote = function(idlote, fecha_n, cant, peso){
          $scope.textButton = "Editar lote";
          $('.bguardarLote, .eliminar_lote').css('display', 'none');
          $('.form_lote, .beditarLote').css('display', 'block');
          $scope.vm.fdatos={idlote: idlote, fecha_n: Number(fecha_n), cant:Number(cant), peso:Number(peso)};               
            
          vm.editarLote1 =function (){
              $scope.textButton = "Modificar un varraco";
              $http.post("controller/insertar_lote.php", { op: "updateLote", idlote: vm.fdatos.idlote,  fecha_n: vm.fdatos.fecha_n, cant: vm.fdatos.cant, peso: vm.fdatos.peso})
                .success(function(res){
                  console.log(res);
                  $scope.vm.fdatos={};

                  $http.get('controller/consultaLote.php')
                    .success(function(data) {
                        $scope.names = data;
                        console.log(data);
                    })
                  $('.form_cerda').css('display', 'none');
              })
            //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;                     
                .error(function(data) {
                        console.log('Error: ' + data);
                });                  
            }
          }
})

//*****************************CONTROLADOR DE TABLA CORRAL ***************************************
.controller("appCtrlRegistroCorral",  function controladorPrincipal($scope, $http, $scope){ 
    var vm=this;
        //inicializo un objeto en los datos de formulario
        vm.fdatos = {};
        $scope.names = [];

        $(document).ready(function () {
          $('.tabla_lote, .tabla_cerda, .tabla_corral, .tabla_varraco, .form_cerda, .tabla_alimento, .form_lote, .form_varraco, .form_corral, .form_alimento, .eliminar_cerda, .eliminar_varraco, .eliminar_lote, .eliminar_corral, .eliminar_alimento,  .bguardar, .beditar, .bguardarVarraco, .beditarVarraco').css('display', 'none');
        }) 



    listarCorral = function(){ 
      console.log('hola');        
          $(document).ready(function () {
            $('.tabla_cerda, .tabla_varraco, .tabla_lote, .form_cerda, .form_varraco, .eliminar_lote, .eliminar_cerda, .eliminar_varraco').css('display', 'none');
          }) 
              $http.get('controller/consulta_corral.php')
                .success(function(data) {
                    $scope.names = data;
                    console.log(data);                    
                    $('.tabla_corral').css('display', 'inline');                    
                })

              .error(function(data) {
                    console.log('Error: ' + data);
               });                          
    }

    listarCorral();

    vm.enviarCorral = function(){

            $scope.textButton = "Añadir corral";
            $('.beditarCorral').css('display', 'none');            
            $('.form_corral, .bguardarCorral').css('display', 'block');
            $scope.vm.fdatos={idcorral: "", fecha: "", capacidad: "", peso_inicial: "", idlote:""};               
            
            vm.enviarCorral1 = function() {

                $http.post("controller/insertar_corral.php", {                

                    op: "addCorral",
                    idcorral: vm.fdatos.idcorral,
                    fecha: vm.fdatos.fecha,
                    capacidad: vm.fdatos.capacidad,
                    peso_inicial: vm.fdatos.peso_inicial,
                    idlote: vm.fdatos.idlote
                })
                    .success(function (res) {
                        console.log(res);
                        $scope.vm.fdatos = {};

                        $http.get('controller/consulta_corral.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })
                    })

                    //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('').css('display', 'none');
            }
        }

    vm.borrarCorral= function(idcorral){
            $('.eliminar_corral').css('display', 'block');
            $('.form_corral').css('display', 'none');
            
          vm.borrarCorral1 = function()
            {
                $http.post("controller/insertar_corral.php", {
                    op: "deleteCorral",
                    idcorral: idcorral,                    
                    fecha: "",
                    capacidad: "",
                    peso_inicial:"",
                    idlote:""
                })
                    .success(function (res) {
                        console.log(res);

                        $http.get('controller/consulta_corral.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })

                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('.eliminar_corral').css('display', 'none');
            }
        }   

        vm.editarCorral = function(idcorral, fecha, capacidad, peso_inicial, idlote){
          $scope.textButton = "Editar corral";
          $('.bguardarCorral, .eliminar_corral').css('display', 'none');
          $('.form_corral, .beditarCorral').css('display', 'block');
          $scope.vm.fdatos={idcorral: idcorral, fecha: Number(fecha), capacidad:Number(capacidad), peso_inicial:Number(peso_inicial), idlote:Number(idlote)};               
            
          vm.editarCorral1 =function (){
              $scope.textButton = "Modificar un Corral";
              $http.post("controller/insertar_corral.php", { op: "updateCorral", idcorral: vm.fdatos.idcorral,  fecha: vm.fdatos.fecha, capacidad: vm.fdatos.capacidad, peso_inicial: vm.fdatos.peso_inicial, idlote:vm.fdatos.idlote})
                .success(function(res){
                  console.log(res);
                  $scope.vm.fdatos={};

                  $http.get('controller/consulta_corral.php')
                    .success(function(data) {
                        $scope.names = data;
                        console.log(data);
                    })
                  $('.form_corral').css('display', 'none');
              })
            //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;                     
                .error(function(data) {
                        console.log('Error: ' + data);
                });                  
            }
          }  

              
    })




//*****************************FUNCION QUE FUNCIO ***************************************
.controller("appCtrlControl",  function controlGranja($scope, $http){
      console.log('hola yo llevare el control');
        var vm=this;
        //inicializo un objeto en los datos de formulario
        vm.fdatos = {};
        $scope.names = [];

        $(document).ready(function () {
          $('.tabla_verificar, .form_Cubricion, .tabla_Cubricion, .tabla_calendario, .calendarios, .form_alimentoCerda, .eliminar_alimentoCerda, .tabla_contAlimentoCerda, .form_alimentoLote, .eliminar_alimentoLote, .tabla_alimentoLote, .calendario1, .tabla_medicamento_cerda, .tabla_medLote, .tabla_contPeso, .tabla_contCubricion, .tabla_contParto, .form_medCerda, .form_medLote, .form_contPeso, .form_contCubricion, .form_contParto, .eliminar_medCerda, .eliminar_medLote, .eliminar_contPeso, .eliminar_contCubricion, .eliminar_contParto').css('display', 'none');
        })
//*****************************CONTROLADOR DE MEDICAMENTO DE LA CERDA ***************************************
        

//*****************************CONTROLADOR DE MEDICAMENTO DE LA CERDA ***************************************
       
})

.controller("appCtrlMedicoCerda",  function controlGranja($scope, $http, $scope){
      console.log('hola yo llevare el control medico de las cerdas');
        var vm=this;
        //inicializo un objeto en los datos de formulario
        vm.fdatos = {};
        $scope.names = [];

        $(document).ready(function () {
          $('.tabla_verificar, .boton_verificar, .boton_cubricion, .boton_parto, form_Cubricion, .tabla_Cubricion, .tabla_calendario, .tabla_calendario, .calendarios, .calendario1, .tabla_medicamento_cerda, .tabla_medLote, .tabla_contPeso, .tabla_contCubricion, .tabla_contParto, .tabla_contAlimentoCerda, .tabla_alimentoLote, .form_medCerda, .form_medLote, .form_contPeso, .form_contCubricion, .form_contParto, .form_alimentoCerda, .form_alimentoLote, .eliminar_medCerda, .eliminar_medLote, .eliminar_contPeso, .eliminar_contCubricion, .eliminar_contParto, .eliminar_alimentoCerda, .eliminar_alimentoLote ').css('display', 'none');
        })

        controlMedCerda = function(){
          console.log('eres tu');
          $(document).ready(function () {
            $('.tabla_medLote, .tabla_contPeso, .tabla_contCubricion, .tabla_contParto, .form_medLote, .form_contPeso, .form_contCubricion, .form_contParto, .eliminar_contPeso, .eliminar_medLote, .eliminar_contCubricion, .eliminar_contParto').css('display', 'none');
          })

              $http.get('controller/consulta_medCerda.php')
                .success(function(data) {
                    $scope.names = data;
                    console.log(data);                    
                    $('.tabla_medicamento_cerda').css('display', 'inline');                    
                })

              .error(function(data) {
                    console.log('Error: ' + data);
               });                          
        }

        controlMedCerda();

        vm.enviarMedCerda = function(){
            console.log('probando');
            $scope.textButton = "Guardar control";
            $('.beditarMedCerda').css('display', 'none');            
            $('.form_medCerda, .bguardarMedCerda').css('display', 'block');
            $scope.vm.fdatos={id: "", nombre: "", idcerda: "", fecha: "", dosis: "", descripcion: ""};               
            
            vm.enviarMedCerda1 = function() {

                $http.post("controller/insertar_control_cerda.php", {                

                    op: "addMedCerda",
                    id: "",
                    nombre: vm.fdatos.nombre,
                    idcerda: vm.fdatos.idcerda,
                    fecha: vm.fdatos.fecha,
                    dosis: vm.fdatos.dosis,
                    descripcion: vm.fdatos.descripcion
                })
                    .success(function (res) {
                        console.log(res);
                        $scope.vm.fdatos = {};

                        $http.get('controller/consulta_medCerda.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })
                    })

                    //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('').css('display', 'none');
            }
        }

        vm.borrarMedCerda= function(id){
            $('.eliminar_medCerda').css('display', 'block');
            $('.form_medCerda').css('display', 'none');
            
          vm.borrarMedCerda1 = function()
            {
              
                $http.post("controller/insertar_control_cerda.php", {
                    op: "deleteMedCerda",
                    id: id, 
                    nombre: "",
                    idcerda:"",
                    fecha: "",
                    dosis: "",
                    descripcion: ""
                })
                    .success(function (res) {
                        console.log(res);

                        $http.get('controller/consulta_medCerda.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })

                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('.eliminar_medCerda').css('display', 'none');
            }
        }   
        //este es el metodo que modifica un registro de medicamento aplicado a un cerda pero hay que arregrar que una cerda puede tener varios registro por diferentes enferemedades y al modificar se odificara todos con el mismo identificador carita pensando
        vm.editarMedCerda = function(id, nombre, idcerda, fecha, dosis, descripcion){
          $scope.textButton = "Editar control";
          $('.bguardarMedCerda, .eliminar_medCerda').css('display', 'none');
          $('.form_medCerda, .beditarMedCerda').css('display', 'block');
          $scope.vm.fdatos={id: id, nombre:nombre, idcerda: idcerda, fecha:Number(fecha), dosis:Number(dosis), descripcion:descripcion};               
            
          vm.editarMedCerda1 =function (){
              $scope.textButton = "Modificar medicamento";
              $http.post("controller/insertar_control_cerda.php", { op: "updateMedCerda", id: vm.fdatos.id, nombre: vm.fdatos.nombre, idcerda:vm.fdatos.idcerda,  fecha: vm.fdatos.fecha, dosis: vm.fdatos.dosis, descripcion: vm.fdatos.descripcion})
                .success(function(res){
                  console.log(res);
                  $scope.vm.fdatos={};

                  $http.get('controller/consulta_medCerda.php')
                    .success(function(data) {
                        $scope.names = data;
                        console.log(data);
                    })
                  $('').css('display', 'none');
              })
            //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;                     
                .error(function(data) {
                        console.log('Error: ' + data);
                });                  
            }
        }
})

.controller("appCtrlMedicoLote",  function controlGranja($scope, $http, $scope){
      console.log('hola yo llevare el control');
        var vm=this;
        //inicializo un objeto en los datos de formulario
        vm.fdatos = {};
        $scope.names = [];

        $(document).ready(function () {
          $('.tabla_verificar, .boton_verificar,  .form_Cubricion, .tabla_Cubricion, .tabla_calendario, .calendarios, .calendario1, .tabla_medicamento_cerda, .tabla_medLote, .tabla_contPeso, .tabla_contCubricion, .tabla_contParto, .tabla_contAlimentoCerda, .tabla_alimentoLote, .form_medCerda, .form_medLote, .form_contPeso, .form_contCubricion, .form_contParto, .form_alimentoCerda, .form_alimentoLote, .eliminar_medCerda, .eliminar_medLote, .eliminar_contPeso, .eliminar_contCubricion, .eliminar_contParto, .eliminar_alimentoCerda, .eliminar_alimentoLote ').css('display', 'none');
        })


        //medotos para controlar los medicamentos aplicados a los lotes
        controlMedLote = function(){
          console.log('eres tu');
          $(document).ready(function () {
            $('.tabla_medicamento_cerda, .tabla_contPeso, .tabla_contCubricion, .tabla_contParto, .form_medCerda, .form_contPeso, .form_contCubricion, .form_contParto, .eliminar_medCerda, .eliminar_contPeso, .eliminar_contCubricion, .eliminar_contParto').css('display', 'none');
          })

              $http.get('controller/consulta_medLote.php')
                .success(function(data) {
                    $scope.names = data;
                    console.log(data);                    
                    $('.tabla_medLote').css('display', 'inline');                    
                })

              .error(function(data) {
                    console.log('Error: ' + data);
               });                          
        } 
        controlMedLote();

        vm.enviarMedLote = function(){
            console.log('probando');
            $scope.textButton = "Añadir control";
            $('.beditarMedLote').css('display', 'none');            
            $('.form_medLote, .bguardarMedLote').css('display', 'block');
            $scope.vm.fdatos={nombre: "", idlote: "", fecha: "", dosis: "", numero_a: "", descripcion:""};                           
            vm.enviarMedLote1 = function() {

                $http.post("controller/insertar_control_lote.php", {                

                    op: "addMedLote",
                    id: "",
                    nombre: vm.fdatos.nombre,
                    idlote: vm.fdatos.idlote,
                    fecha: vm.fdatos.fecha,
                    dosis: vm.fdatos.dosis,
                    numero_a:vm.fdatos.numero_a,
                    descripcion: vm.fdatos.descripcion
                })
                    .success(function (res) {
                        console.log(res);
                        $scope.vm.fdatos = {};

                        $http.get('controller/consulta_medLote.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })
                    })

                    //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('').css('display', 'none');
            }
        }

        vm.borrarMedLote= function(id){
            $('.eliminar_medLote').css('display', 'block');
            $('.form_medLote').css('display', 'none');
            
          vm.borrarMedLote1 = function()
            {
              
                $http.post("controller/insertar_control_lote.php", {
                    op: "deleteMedLote",
                    nombre: "",
                    id: id,
                    idlote: "",
                    fecha: "",
                    dosis: "",
                    numero_a: "",
                    descripcion: ""
                })
                    .success(function (res) {
                        console.log(res);

                        $http.get('controller/consulta_medLote.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })

                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('.eliminar_lote').css('display', 'none');
            }
        } 

        vm.editarMedLote = function(id, nombre, idlote, fecha, dosis, numero_a, descripcion){
          $scope.textButton = "Editar control";
          $('.bguardarMedLote, .eliminar_medLote').css('display', 'none');
          $('.form_medLote, .beditarMedLote').css('display', 'block');
          $scope.vm.fdatos={nombre:nombre, idlote: idlote, fecha:Number(fecha), dosis:Number(dosis), numero_a:Number(numero_a), descripcion:descripcion};               
            
          vm.editarMedLote1 =function (){
              $scope.textButton = "Modificar medicamento";
              $http.post("controller/insertar_control_lote.php", { op: "updateMedLote", id: id, nombre: vm.fdatos.nombre, idlote:vm.fdatos.idlote,  fecha: vm.fdatos.fecha, dosis: vm.fdatos.dosis, numero_a: vm.fdatos.numero_a, descripcion: vm.fdatos.descripcion})
                .success(function(res){
                  console.log(res);
                  $scope.vm.fdatos={};

                  $http.get('controller/consulta_medLote.php')
                    .success(function(data) {
                        $scope.names = data;
                        console.log(data);
                    })
                  $('').css('display', 'none');
              })
            //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;                     
                .error(function(data) {
                        console.log('Error: ' + data);
                });                  
            }
          }
})


.controller("appCtrlLote",  function controlGranja($scope, $http, $scope){
      console.log('hola yo llevare el control');
        var vm=this;
        //inicializo un objeto en los datos de formulario
        vm.fdatos = {};
        $scope.names = [];

        $(document).ready(function () {
          $('.tabla_verificar, .boton_verificar, .form_Cubricion, .tabla_Cubricion, .tabla_calendario, .calendarios, .calendario1, .tabla_medicamento_cerda, .tabla_medLote, .tabla_contPeso, .tabla_contCubricion, .tabla_contParto, .tabla_contAlimentoCerda, .tabla_alimentoLote, .form_medCerda, .form_medLote, .form_contPeso, .form_contCubricion, .form_contParto, .form_alimentoCerda, .form_alimentoLote, .eliminar_medCerda, .eliminar_medLote, .eliminar_contPeso, .eliminar_contCubricion, .eliminar_contParto, .eliminar_alimentoCerda, .eliminar_alimentoLote ').css('display', 'none');
        })


        //medotos para llevar el control de peso de los lotes
        controlPesoLote = function(){
          console.log('eres tu');
          $(document).ready(function () {
            $('.form_medCerda, .form_medLote, .form_contPeso, .form_contCubricion, .form_contParto, .tabla_medLote, .tabla_medicamento_cerda, .tabla_contCubricion, .tabla_contParto, .eliminar_medCerda, .eliminar_medLote, .eliminar_contPeso, .eliminar_contCubricion, .eliminar_contParto').css('display', 'none');
          })

              $http.get('controller/consulta_contPesoLote.php')
                .success(function(data) {
                    $scope.names = data;
                    console.log(data);                    
                    $('.tabla_contPeso').css('display', 'inline');                    
                })

              .error(function(data) {
                    console.log('Error: ' + data);
               });                          
        } 
        controlPesoLote();

        vm.enviarContPeso = function(){
            console.log('probando');
            $scope.textButton = "Guardar control";
            $('.beditarContPeso').css('display', 'none');            
            $('.form_contPeso, .bguardarContPeso').css('display', 'block');
            $scope.vm.fdatos={idlote: "", fecha: "", descripcion: "", mayor: "", menor: ""};
            
            vm.enviarContPeso1 = function() {

                $http.post("controller/insertar_control_peso.php", {                

                    op: "addContPeso", 
                    id: "",                   
                    idlote: vm.fdatos.idlote,
                    fecha: vm.fdatos.fecha,
                    descripcion: vm.fdatos.descripcion,
                    mayor:vm.fdatos.mayor,
                    menor:vm.fdatos.menor,                    
                    
                })
                    .success(function (res) {
                        console.log(res);
                        $scope.vm.fdatos = {};

                        $http.get('controller/consulta_contPesoLote.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })
                    })

                    //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('').css('display', 'none');
            }
        }

        vm.borrarContPeso= function(id){
            $('.eliminar_contPeso').css('display', 'block');
            $('.form_contPeso').css('display', 'none');
            
          vm.borrarContPeso1 = function(){
                $http.post("controller/insertar_control_peso.php", {
                    op: "deleteContPeso",                    
                    id: id,
                    idlote: "",
                    fecha: "",
                    descripcion: "",
                    mayor: "",
                    menor: ""
                })
                    .success(function (res) {
                        console.log(res);

                        $http.get('controller/consulta_contPesoLote.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })

                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('.eliminar_contPeso').css('display', 'none');
            }
        } 

        vm.editarContPeso = function(id, idlote, fecha, descripcion, mayor, menor){
          $scope.textButton = "Editar control";
          $('.bguardarContPeso, .eliminar_contPeso').css('display', 'none');
          $('.form_contPeso, .beditarContPeso').css('display', 'block');
          $scope.vm.fdatos={idlote: idlote, fecha:Number(fecha), descripcion:descripcion, mayor:Number(mayor), menor:Number(menor)};               
            
          vm.editarContPeso1 =function (){
              $scope.textButton = "Modificar medicamento";
              $http.post("controller/insertar_control_peso.php", { op: "updateContPeso", id: id, idlote:vm.fdatos.idlote,  fecha: vm.fdatos.fecha, descripcion: vm.fdatos.descripcion, mayor: vm.fdatos.mayor, menor: vm.fdatos.menor})
                .success(function(res){
                  console.log(res);
                  $scope.vm.fdatos={};

                  $http.get('controller/consulta_contPesoLote.php')
                    .success(function(data) {
                        $scope.names = data;
                        console.log(data);
                    })
                  $('.form_contPeso').css('display', 'none');
              })
            //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;                     
                .error(function(data) {
                        console.log('Error: ' + data);
                }); 

            }
          }
})

























.controller("appCtrlCubriciones",  function controlGranja($scope, $http, $scope){
      console.log('hola yo llevare el control');
        var vm=this;
        //inicializo un objeto en los datos de formulario
        vm.fdatos = {};
        $scope.names = [];

        $(document).ready(function () {
          $('.tabla_contParto, .form_Cubricion, .tabla_Cubricion, .tabla_parto, .boton_parto, .tabla_verificar, .boton_verificar, .boton_cubricion, .calendario1, .tabla_medicamento_cerda, .tabla_medLote, .tabla_contPeso, .tabla_contCubricion, .tabla_contParto, .tabla_contAlimentoCerda, .tabla_alimentoLote, .form_medCerda, .form_medLote, .form_contPeso, .form_contCubricion, .form_contParto, .form_alimentoCerda, .form_alimentoLote, .eliminar_medCerda, .eliminar_medLote, .eliminar_contPeso, .eliminar_contCubricion, .eliminar_contParto, .eliminar_alimentoCerda, .eliminar_alimentoLote ').css('display', 'none');
        })

        // se realizara el manejo de cubriciones 

        controlCubricion = function(){
          
          $(document).ready(function () {
            $('.form_Cubricion, .tabla_Cubricion, .form_medCerda, .form_medLote, .form_contPeso,  .form_contParto, .tabla_medLote, .tabla_medicamento_cerda, .tabla_contPeso, .tabla_contParto, .eliminar_medCerda, .eliminar_medLote, .eliminar_contPeso, .eliminar_contCubricion, .eliminar_contParto').css('display', 'none');
          })
              $http.get('controller/consulta_cubricion.php')
                .success(function(data) {
                    $scope.names = data;
                    console.log(data);                    
                    $('.tabla_contCubricion').css('display', 'inline');                    
                })

              .error(function(data) {
                    console.log('Error: ' + data);
               });                          
        }
        controlCubricion();

        vm.controlCubricion = function(){
          $(document).ready(function () {
            $('.tabla_contParto, .form_Cubricion, .tabla_Cubricion, .tabla_parto, .boton_parto, .tabla_verificar, .boton_verificar, .boton_cubricion, .calendario1, .form_medCerda, .form_medLote, .form_contPeso, .form_contParto, .tabla_medLote, .tabla_medicamento_cerda, .tabla_contPeso, .tabla_contParto, .eliminar_medCerda, .eliminar_medLote, .eliminar_contPeso, .eliminar_contCubricion, .eliminar_contParto').css('display', 'none');
          })

              $http.get('controller/consulta_cubricion.php')
                .success(function(data) {
                    $scope.names = data;
                    console.log(data);                    
                    $('.tabla_contCubricion').css('display', 'inline');                    
                })
              .error(function(data) {
                    console.log('Error: ' + data);
               });                          
        }
/* OPERACIONES SOLO PARA LA TABLA ESTADOS CON (ESTADO = VACIA)   */

        vm.tabla_cubricion = function(){
          $(document).ready(function () {
            $('.tabla_contParto, .tabla_contCubricion, .tabla_parto, .boton_parto, .tabla_verificar, .boton_verificar, .calendario1, .form_medCerda, .form_medLote, .form_contPeso, .form_contParto, .tabla_medLote, .tabla_medicamento_cerda, .tabla_contPeso, .tabla_contParto, .eliminar_medCerda, .eliminar_medLote, .eliminar_contPeso, .eliminar_contCubricion, .eliminar_contParto').css('display', 'none');
          })

              $http.get('controller/consulta_tabla1.php')
                .success(function(data) {
                    $scope.names = data;
                    console.log(data);                    
                    $('.tabla_Cubricion').css('display', 'inline');
                    $('.boton_cubricion').css('display', 'none');                    
                })
              .error(function(data) {
                    console.log('Error: ' + data);
               });                          
        }

        vm.tabla_verificar = function(){
          $(document).ready(function () {
            $('.tabla_contParto, .tabla_contCubricion, .tabla_parto, .boton_parto,  .boton_verificar, .calendario1, .form_medCerda, .form_medLote, .form_contPeso, .form_contParto, .tabla_medLote, .tabla_medicamento_cerda, .tabla_contPeso, .tabla_contParto, .eliminar_medCerda, .eliminar_medLote, .eliminar_contPeso, .eliminar_contCubricion, .eliminar_contParto').css('display', 'none');
          })

              $http.get('controller/consulta_tabla2.php')
                .success(function(data) {
                    $scope.names = data;
                    console.log(data);                    
                    $('.tabla_verificar').css('display', 'inline');                    
                })
              .error(function(data) {
                    console.log('Error: ' + data);
               });                          
        }

        vm.tabla_parto = function(){
          $(document).ready(function () {
            $('.tabla_contParto, .tabla_contCubricion, .tabla_parto, .boton_parto, .tabla_verificar, .boton_verificar, .calendario1, .form_medCerda, .form_medLote, .form_contPeso, .form_contParto, .tabla_medLote, .tabla_medicamento_cerda, .tabla_contPeso, .tabla_contParto, .eliminar_medCerda, .eliminar_medLote, .eliminar_contPeso, .eliminar_contCubricion, .eliminar_contParto').css('display', 'none');
          })

              $http.get('controller/consulta_tabla3.php')
                .success(function(data) {
                    $scope.names = data;
                    console.log(data);                    
                    $('.tabla_verificar').css('display', 'inline');                    
                })
              .error(function(data) {
                    console.log('Error: ' + data);
               });                          
        }
       

        

        vm.calendario1 = function(){
        (function($){
            //creamos la fecha actual
            var date = new Date();
            var yyyy = date.getFullYear().toString();
            var mm = (date.getMonth()+1).toString().length == 1 ? "0"+(date.getMonth()+1).toString() : (date.getMonth()+1).toString();
            var dd  = (date.getDate()).toString().length == 1 ? "0"+(date.getDate()).toString() : (date.getDate()).toString();

            //establecemos los valores del calendario         

            var options = {
              events_source: 'controller/consulta_calendario.php',
              view: 'month',
              language: 'es-ES',
              tmpl_path: './bower_components/bootstrap-calendar/tmpls/',
              tmpl_cache: false,
              day: yyyy+"-"+mm+"-"+dd,
              time_start: '00:01',
              time_end: '23:59',
              time_split: '30',
              width: '85%',
              onAfterEventsLoad: function(events) 
              {
                if(!events) 
                {
                  return;
                }
                var list = $('#eventlist');
                list.html('');

                $.each(events, function(key, val) 
                {
                  $(document.createElement('li'))
                    .html('<a data-target="' + val.url + '">' + val.title + '</a>')
                    .appendTo(list);
                });
              },
              onAfterViewLoad: function(view) 
              {
                $('.page-header h3').text(this.getTitle());
                $('.btn-group button').removeClass('active');
                $('button[data-calendar-view="' + view + '"]').addClass('active');
              },
              classes: {
                months: {
                  general: 'label'
                }
              }
            };

            var calendar = $('#calendar').calendar(options);

            $('.btn-group button[data-calendar-nav]').each(function() 
            {
              var $this = $(this);
              $this.click(function() 
              {
                calendar.navigate($this.data('calendar-nav'));
              });
            });

            $('.btn-group button[data-calendar-view]').each(function() 
            {
              var $this = $(this);
              $this.click(function() 
              {
                calendar.view($this.data('calendar-view'));
              });
            });

            $('#first_day').change(function()
            {
              var value = $(this).val();
              value = value.length ? parseInt(value) : null;
              calendar.setOptions({first_day: value});
              calendar.view();
            });

            $('#events-in-modal').change(function()
            {
              var val = $(this).is(':checked') ? $(this).val() : null;
              calendar.setOptions(
                {
                  modal: val,
                  modal_type:'iframe'
                }
              );
            });
          }(jQuery)); 

          $('.tabla_contParto, .form_Cubricion, .tabla_Cubricion, .tabla_contCubricion, .tabla_verificar, .boton_verificar, .tabla_parto, .boton_parto').css('display', 'none'); 
          $('.calendario1, .boton_cubricion').css('display', 'block'); 
        }


        vm.calendario2 = function(){
        (function($){
            //creamos la fecha actual
            var date = new Date();
            var yyyy = date.getFullYear().toString();
            var mm = (date.getMonth()+1).toString().length == 1 ? "0"+(date.getMonth()+1).toString() : (date.getMonth()+1).toString();
            var dd  = (date.getDate()).toString().length == 1 ? "0"+(date.getDate()).toString() : (date.getDate()).toString();

            //establecemos los valores del calendario         

            var options = {
              events_source: 'controller/consulta_calendario2.php',
              view: 'month',
              language: 'es-ES',
              tmpl_path: './bower_components/bootstrap-calendar/tmpls/',
              tmpl_cache: false,
              day: yyyy+"-"+mm+"-"+dd,
              time_start: '00:01',
              time_end: '23:59',
              time_split: '30',
              width: '85%',
              onAfterEventsLoad: function(events) 
              {
                if(!events) 
                {
                  return;
                }
                var list = $('#eventlist');
                list.html('');

                $.each(events, function(key, val) 
                {
                  $(document.createElement('li'))
                    .html('<a href="' + val.url + '">' + val.title + '</a>')
                    .appendTo(list);
                });
              },
              onAfterViewLoad: function(view) 
              {
                $('.page-header h3').text(this.getTitle());
                $('.btn-group button').removeClass('active');
                $('button[data-calendar-view="' + view + '"]').addClass('active');
              },
              classes: {
                months: {
                  general: 'label'
                }
              }
            };

            var calendar = $('#calendar').calendar(options);

            $('.btn-group button[data-calendar-nav]').each(function() 
            {
              var $this = $(this);
              $this.click(function() 
              {
                calendar.navigate($this.data('calendar-nav'));
              });
            });

            $('.btn-group button[data-calendar-view]').each(function() 
            {
              var $this = $(this);
              $this.click(function() 
              {
                calendar.view($this.data('calendar-view'));
              });
            });

            $('#first_day').change(function()
            {
              var value = $(this).val();
              value = value.length ? parseInt(value) : null;
              calendar.setOptions({first_day: value});
              calendar.view();
            });

            $('#events-in-modal').change(function()
            {
              var val = $(this).is(':checked') ? $(this).val() : null;
              calendar.setOptions(
                {
                  modal: val,
                  modal_type:'iframe'
                }
              );
            });
          }(jQuery)); 
          $('.tabla_contParto, .boton_cubricion, .form_Cubricion, .tabla_Cubricion, .tabla_contCubricion, .tabla_verificar, .boton_verificar, .tabla_parto, .boton_parto').css('display', 'none');
          $('.calendario1, .boton_verificar').css('display', 'block'); 
        }

        vm.calendario3 = function(){
        (function($){
            //creamos la fecha actual
            var date = new Date();
            var yyyy = date.getFullYear().toString();
            var mm = (date.getMonth()+1).toString().length == 1 ? "0"+(date.getMonth()+1).toString() : (date.getMonth()+1).toString();
            var dd  = (date.getDate()).toString().length == 1 ? "0"+(date.getDate()).toString() : (date.getDate()).toString();

            //establecemos los valores del calendario         

            var options = {
              events_source: 'controller/consulta_calendario3.php',
              view: 'month',
              language: 'es-ES',
              tmpl_path: './bower_components/bootstrap-calendar/tmpls/',
              tmpl_cache: false,
              day: yyyy+"-"+mm+"-"+dd,
              time_start: '00:01',
              time_end: '23:59',
              time_split: '30',
              width: '85%',
              onAfterEventsLoad: function(events) 
              {
                if(!events) 
                {
                  return;
                }
                var list = $('#eventlist');
                list.html('');

                $.each(events, function(key, val) 
                {
                  $(document.createElement('li'))
                    .html('<a href="' + val.url + '">' + val.title + '</a>')
                    .appendTo(list);
                });
              },
              onAfterViewLoad: function(view) 
              {
                $('.page-header h3').text(this.getTitle());
                $('.btn-group button').removeClass('active');
                $('button[data-calendar-view="' + view + '"]').addClass('active');
              },
              classes: {
                months: {
                  general: 'label'
                }
              }
            };

            var calendar = $('#calendar').calendar(options);

            $('.btn-group button[data-calendar-nav]').each(function() 
            {
              var $this = $(this);
              $this.click(function() 
              {
                calendar.navigate($this.data('calendar-nav'));
              });
            });

            $('.btn-group button[data-calendar-view]').each(function() 
            {
              var $this = $(this);
              $this.click(function() 
              {
                calendar.view($this.data('calendar-view'));
              });
            });

            $('#first_day').change(function()
            {
              var value = $(this).val();
              value = value.length ? parseInt(value) : null;
              calendar.setOptions({first_day: value});
              calendar.view();
            });

            $('#events-in-modal').change(function()
            {
              var val = $(this).is(':checked') ? $(this).val() : null;
              calendar.setOptions(
                {
                  modal: val,
                  modal_type:'iframe'
                }
              );
            });
          }(jQuery)); 
          $('.tabla_contParto, .form_Cubricion, .tabla_Cubricion, .tabla_contCubricion, .tabla_verificar, .boton_verificar, .boton_cubricion').css('display', 'none');   
          $('.calendario1, .boton_parto').css('display', 'block'); 
        }



        vm.enviarContCubricion = function(){           
            $scope.textButton = "Guardar registro";
            $('.beditarContCubricion').css('display', 'none');            
            $('.form_contCubricion, .bguardarContCubricion').css('display', 'block');           
            vm.enviarContCubricion1 = function() { 
                if (vm.fdatos.estado == "Sin Verificar") {
                    $events = "event-info";                                            
                    $http.post("controller/insertar_estado.php", {                
                        op: "addContCubricion",                    
                        idcerda: vm.fdatos.idcerda,
                        idbarraco: vm.fdatos.idbarraco,
                        fecha_servicio: vm.fdatos.fecha_servicio,
                        tipo:vm.fdatos.tipo,
                        estado:vm.fdatos.estado,                  
                        start: vm.fdatos.fecha_servicio.getTime()+1900800000,
                        end: vm.fdatos.fecha_servicio.getTime()+1900800000+86300000, 
                        events: $events, 
                        id: "",                                      
                    })
                    .success(function (res) {
                        console.log(res);
                        $scope.vm.fdatos = {};
                        $http.get('controller/consulta_cubricion.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })
                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });

                    $('').css('display', 'none');
                }

                if (vm.fdatos.estado == "Vacia") {
                    $events = "event-in";                                            
                    $http.post("controller/insertar_estado.php", {                
                        op: "addContCubricion",                    
                        idcerda: vm.fdatos.idcerda,
                        idbarraco: vm.fdatos.idbarraco,
                        fecha_servicio: vm.fdatos.fecha_servicio,
                        tipo:vm.fdatos.tipo,
                        estado:vm.fdatos.estado, 
                        start: vm.fdatos.fecha_servicio.getTime()+86400000,
                        end: vm.fdatos.fecha_servicio.getTime()+86400000+86300000, 
                        events: $events, 
                        id: "",                                      
                    })
                    .success(function (res) {
                        console.log(res);
                        $scope.vm.fdatos = {};
                        $http.get('controller/consulta_cubricion.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })
                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });

                    $('').css('display', 'none');
                }

                if (vm.fdatos.estado == "Preñada") {
                    $events = "event-important";                                            
                    $http.post("controller/insertar_estado.php", {                
                        op: "addContCubricion",                    
                        idcerda: vm.fdatos.idcerda,
                        idbarraco: vm.fdatos.idbarraco,
                        fecha_servicio: vm.fdatos.fecha_servicio,
                        tipo:vm.fdatos.tipo,
                        estado:vm.fdatos.estado, 
                        start: vm.fdatos.fecha_servicio.getTime()+9763200000,
                        end: vm.fdatos.fecha_servicio.getTime()+9763200000+86399000, 
                        events: $events, 
                        id: "",                                      
                    })
                    .success(function (res) {
                        console.log(res);
                        $scope.vm.fdatos = {};
                        $http.get('controller/consulta_cubricion.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })
                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });

                    $('').css('display', 'none');
                }
          }
        }

          vm.borrarContCubricion= function(id){
              $('.eliminar_contCubricion').css('display', 'block');
              $('.form_contCubricion').css('display', 'none');
              
              vm.borrarContCubricion1 = function(){              
                  $http.post("controller/insertar_estado.php", {
                      op: "deleteContCubricion", 
                      id: id,                   
                      idcerda: "",
                      idbarraco: "",
                      fecha_servicio: "",
                      fecha_parto:"",
                      tipo:"",
                      estado:"",     
                  })
                  .success(function (res) {
                      console.log(res);
                      $http.get('controller/consulta_cubricion.php')
                          .success(function (data) {
                              $scope.names = data;
                              console.log(data);
                          })
                      })
                      .error(function (data) {
                          console.log('Error: ' + data);
                      });
                     $('.eliminar_contCubricion').css('display', 'none');
            }
        }

        vm.editarContCubricion = function(id, idcerda, idbarraco, fecha_servicio, fecha_parto, tipo, estado){
            $scope.textButton = "Editar cubrición";
            $('.bguardarContCubricion, .eliminar_contCubricion').css('display', 'none');
            $('.form_contCubricion, .beditarContCubricion').css('display', 'block');
            $scope.vm.fdatos={idcerda: idcerda, idbarraco:idbarraco, fecha_servicio:Number(fecha_servicio), estado: estado, tipo:tipo};             
            vm.editarContCubricion1 =function (){
               if (vm.fdatos.estado == "Sin Verificar") {
                  $events = "event-info";
                  $scope.textButton = "Modificar medicamento";              
                  $http.post("controller/insertar_estado.php", {            
                    op: "updateContCubricion",                              
                    idcerda: vm.fdatos.idcerda,
                    idbarraco: vm.fdatos.idbarraco,
                    fecha_servicio: vm.fdatos.fecha_servicio,
                    tipo:vm.fdatos.tipo,
                    estado:vm.fdatos.estado,                  
                    start: vm.fdatos.fecha_servicio.getTime()+1900800000,
                    end: vm.fdatos.fecha_servicio.getTime()+1900800000+86300000, 
                    events: $events, 
                    id: id,     
                    
                  })
                  .success(function(res){
                      console.log(res);
                      $scope.vm.fdatos={};
                      $http.get('controller/consulta_cubricion.php')
                        .success(function(data) {
                            $scope.names = data;
                            console.log(data);
                        })
                      $('').css('display', 'none');
                  })
                //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;                     
                  .error(function(data) {
                      console.log('Error: ' + data);
                  });                  
              }

               if (vm.fdatos.estado == "Vacia") {
                  $events = "event-in";
                  $scope.textButton = "Modificar medicamento";              
                  $http.post("controller/insertar_estado.php", {            
                    op: "updateContCubricion",                              
                    id: id,                                                 
                    idcerda:vm.fdatos.idcerda,                              
                    idbarraco:vm.fdatos.idbarraco,                           
                    fecha_servicio: vm.fdatos.fecha_servicio,               
                    tipo: vm.fdatos.tipo,                                    
                    estado: vm.fdatos.estado,                          
                    start: vm.fdatos.fecha_servicio.getTime()+86400000,
                    end: vm.fdatos.fecha_servicio.getTime()+86400000+86300000,   
                    events: $events,                                                
                    
                  })
                  .success(function(res){
                      console.log(res);
                      $scope.vm.fdatos={};
                      $http.get('controller/consulta_cubricion.php')
                        .success(function(data) {
                            $scope.names = data;
                            console.log(data);
                        })
                      $('').css('display', 'none');
                  })
                //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;                     
                  .error(function(data) {
                      console.log('Error: ' + data);
                  });                  
              }

               if (vm.fdatos.estado == "Preñada") {
                  $events = "event-important";
                  $scope.textButton = "Modificar medicamento";              
                  $http.post("controller/insertar_estado.php", {            
                    op: "updateContCubricion",                              
                    id: id,                                                 
                    idcerda:vm.fdatos.idcerda,                              
                    idbarraco:vm.fdatos.idbarraco,                           
                    fecha_servicio: vm.fdatos.fecha_servicio,               
                    tipo: vm.fdatos.tipo,                                    
                    estado: vm.fdatos.estado,                          
                    start: vm.fdatos.fecha_servicio.getTime()+9763200000,
                    end: vm.fdatos.fecha_servicio.getTime()+9763200000+86399000,   
                    events: $events,                                                
                    
                  })
                  .success(function(res){
                      console.log(res);
                      $scope.vm.fdatos={};
                      $http.get('controller/consulta_cubricion.php')
                        .success(function(data) {
                            $scope.names = data;
                            console.log(data);
                        })
                      $('').css('display', 'none');
                  })
                //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;                     
                  .error(function(data) {
                      console.log('Error: ' + data);
                  });                  
              }
          }    
        } 


        

        vm.modificar_estado = function(id, idcerda, idbarraco, fecha_servicio, fecha_parto, tipo, estado){
            $scope.textButton = "Editar cubrición";
            $('.eliminar_contCubricion').css('display', 'none');
            $('.form_contCubricion, .beditarContCubricion').css('display', 'block');
            $scope.vm.fdatos={idcerda: idcerda, idbarraco:idbarraco, fecha_servicio:Number(fecha_servicio), fecha_parto:Number(fecha_parto), estado: estado, tipo:tipo};             
            vm.modificar_estado1 =function (){
               if (vm.fdatos.estado == "Vacia") {
                  $events = "event-in";
                  $scope.textButton = "Modificar medicamento";              
                  $http.post("controller/insertar_estado.php", {            
                    op: "updateContCubricion",                              
                    id: id,                                                 
                    idcerda:vm.fdatos.idcerda,                              
                    idbarraco:vm.fdatos.idbarraco,                           
                    fecha_servicio: vm.fdatos.fecha_servicio,               
                    tipo: vm.fdatos.tipo,                                    
                    estado: vm.fdatos.estado,                          
                    start: vm.fdatos.fecha_servicio.getTime()+86400000,
                    end: vm.fdatos.fecha_servicio.getTime()+86400000+86300000,   
                    events: $events,                                                
                    
                  })
                  .success(function(res){
                      console.log(res);
                      $scope.vm.fdatos={};
                      $http.get('controller/consulta_tabla2.php')
                        .success(function(data) {
                            $scope.names = data;
                            console.log(data);
                        })
                      $('').css('display', 'none');
                  })
                //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;                     
                  .error(function(data) {
                      console.log('Error: ' + data);
                  });                  
              }

               if (vm.fdatos.estado == "Preñada") {
                  $events = "event-important";
                  $scope.textButton = "Modificar medicamento";              
                  $http.post("controller/insertar_estado.php", {            
                    op: "updateContCubricion",                              
                    id: id,                                                 
                    idcerda:vm.fdatos.idcerda,                              
                    idbarraco:vm.fdatos.idbarraco,                           
                    fecha_servicio: vm.fdatos.fecha_servicio,               
                    tipo: vm.fdatos.tipo,                                    
                    estado: vm.fdatos.estado,                          
                    start: vm.fdatos.fecha_servicio.getTime()+9763200000,
                    end: vm.fdatos.fecha_servicio.getTime()+9763200000+86399000,   
                    events: $events,                                                
                    
                  })
                  .success(function(res){
                      console.log(res);
                      $scope.vm.fdatos={};
                      $http.get('controller/consulta_tabla2.php')
                        .success(function(data) {
                            $scope.names = data;
                            console.log(data);
                        })
                      $('').css('display', 'none');
                  })
                //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;                     
                  .error(function(data) {
                      console.log('Error: ' + data);
                  });                  
              }
          }    
        }










        vm.controlPartos = function(){   
              console.log('hola yo soy control parto');
              var vm=this;
              vm.fdatos = {};
              $scope.names = [];
              $(document).ready(function () {
                $('.tabla_parto, .boton_parto, .tabla_verificar, .boton_verificar,  .tabla_Cubricion, .tabla_calendario, .calendario1, .tabla_medicamento_cerda, .tabla_medLote, .tabla_contPeso, .tabla_contCubricion, .tabla_contParto, .tabla_contAlimentoCerda, .tabla_alimentoLote, .form_medLote, .form_contPeso, .form_contCubricion, .form_contParto, .form_alimentoCerda, .form_alimentoLote, .eliminar_medLote, .eliminar_contPeso, .eliminar_contCubricion, .eliminar_contParto, .eliminar_alimentoCerda, .eliminar_alimentoLote ').css('display', 'none');
              })
              $(document).ready(function () {
                $('.form_medCerda, .form_medLote, .form_contPeso, .form_contCubricion, .tabla_medLote, .tabla_medicamento_cerda, .tabla_contPeso, .tabla_contCubricion, .eliminar_medCerda, .eliminar_medLote, .eliminar_contPeso, .eliminar_contCubricion, .eliminar_contParto').css('display', 'none');
              })
              $http.get('controller/consulta_contPartos.php')
                .success(function(data) {
                    $scope.names = data;
                    console.log(data);                    
                    $('.tabla_contParto').css('display', 'inline');                    
                })

              .error(function(data) {
                    console.log('Error: ' + data);
               });                          
        } 

       

        vm.enviarParto  = function(){     
            $scope.textButton = "Guardar registro";
            $('.beditarParto').css('display', 'none');            
            $('.form_contParto, .bguardarParto').css('display', 'block');
            $scope.vm.fdatos = [];
            $events = "event-in"; 
            vm.enviarParto1 = function() {
                $http.post("controller/insertar_partos.php", {                

                    op: "addContParto", 
                    id: "",                   
                    idcerda: vm.fdatos.idcerda,
                    fecha: vm.fdatos.fecha,
                    cant_nacidos: vm.fdatos.cant_nacidos,
                    nacidos_vivos: vm.fdatos.nacidos_vivos,
                    cant_hembras:vm.fdatos.cant_hembras,
                    cant_machos:vm.fdatos.cant_machos, 
                    
                    
                    fecha_servicio: vm.fdatos.fecha,
                    start: vm.fdatos.fecha.getTime()+1900800000,
                    end: vm.fdatos.fecha.getTime()+1900800000+86300000,
                    tipo: "",
                    estado: $events,
                    class: "Vacia",                  
                    
                })
                    .success(function (res) {
                        console.log(res);
                        $scope.vm.fdatos = {};

                        $http.get('controller/consulta_contPartos.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })
                    })

                    //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
            }
        }
        vm.borrarContParto= function(id){
            $('.eliminar_contParto').css('display', 'block');
            $('.form_contParto').css('display', 'none');
            
          vm.borrarContParto1 = function()
            {
              
                $http.post("controller/insertar_partos.php", {
                    op: "deleteContParto",
                    id: id,                    
                    idcerda: "",
                    fecha: "",
                    cant_nacidos: "",
                    nacidos_vivos:"",
                    cant_hembras:"",
                    cant_machos:"",
                    
                })
                    .success(function (res) {
                        console.log(res);

                        $http.get('controller/consulta_contPartos.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })

                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('.eliminar_contParto').css('display', 'none');
            }
        }  

        vm.editarContParto = function(id, idcerda, fecha, cant_nacidos, nacidos_vivos, cant_hembras, cant_machos){
          $scope.textButton = "Modificar Registro";
          $('.bguardarParto, .eliminar_contParto').css('display', 'none');
          $('.form_contParto, .beditarParto').css('display', 'block');
          $scope.vm.fdatos={idcerda: idcerda, fecha:Number(fecha), cant_nacidos:Number(cant_nacidos), nacidos_vivos:Number(nacidos_vivos), cant_hembras:Number(cant_hembras), cant_machos:Number(cant_machos)};               
            
          vm.editarParto1 =function (){
              $scope.textButton = "Modificar medicamento";
              $http.post("controller/insertar_partos.php", { op: "updateContParto", id: id, idcerda:vm.fdatos.idcerda, fecha:vm.fdatos.fecha, cant_nacidos: vm.fdatos.cant_nacidos, nacidos_vivos: vm.fdatos.nacidos_vivos, cant_hembras: vm.fdatos.cant_hembras, cant_machos: vm.fdatos.cant_machos})
                .success(function(res){
                  console.log(res);
                  $scope.vm.fdatos={};

                  $http.get('controller/consulta_contPartos.php')
                    .success(function(data) {
                        $scope.names = data;
                        console.log(data);
                    })
                  $('.form_contParto').css('display', 'none');
              })
            //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;                     
                .error(function(data) {
                        console.log('Error: ' + data);
                });                  
          }
        }

})




.controller("appCtrlControlAlimentoCerda",  function controlGranja($scope, $http, $scope){
      console.log('hola este es el control de alimento de cerdas');
        var vm=this;
        //inicializo un objeto en los datos de formulario
        vm.fdatos = {};
        $scope.names = [];
        
        $(document).ready(function () {
          $('.tabla_parto, .boton_parto, .tabla_verificar, .boton_verificar, .calendarios, .tabla_Cubricion, .tabla_calendario, .calendarios, .eliminar_alimentoLote, .calendario1, .tabla_medicamento_cerda, .tabla_medLote, .tabla_contPeso, .tabla_contCubricion, .tabla_contParto, .tabla_contAlimentoCerda, .tabla_alimentoLote, .form_medCerda, .form_medLote, .form_contPeso, .form_contCubricion, .form_contParto, .form_alimentoCerda, .form_alimentoLote, .eliminar_medCerda, .eliminar_medLote, .eliminar_contPeso, .eliminar_contCubricion, .eliminar_contParto, .eliminar_alimentoCerda').css('display', 'none');
        })

      controlAlimentoCerda = function(){          
          /*$(document).ready(function () {
            $('.form_medCerda, .form_medLote, .form_contPeso, .form_contCubricion, .form_contParto, .tabla_medLote, .tabla_medicamento_cerda, .tabla_contPeso, .tabla_contCubricion, .tabla_contParto, .eliminar_medCerda, .eliminar_medLote, .eliminar_contPeso, .eliminar_contCubricion, .eliminar_contParto').css('display', 'none');
          })*/
              $http.get('controller/consulta_alimCerda.php')
                .success(function(data) {
                    $scope.names = data;
                    console.log(data);                    
                    $('.tabla_contAlimentoCerda').css('display', 'inline');                    
                })
              .error(function(data) {
                    console.log('Error: ' + data);
               }); 
      }
      controlAlimentoCerda(); 

      vm.enviarAlimentoCerda  = function(){
            
            $scope.textButton = "Guardar registro";
            $('.beditarAlimentoCerda').css('display', 'none');            
            $('.form_alimentoCerda, .bguardarAlimentoCerda').css('display', 'block');
            
            vm.enviarAlimentoCerda1 = function() {

                $http.post("controller/insertar_alimento_cerda.php", {                

                    op: "addAlimentoCerda", 
                    id: "",
                    nombre_alimento: vm.fdatos.nombre_alimento,                   
                    idcerda: vm.fdatos.idcerda,
                    fecha: vm.fdatos.fecha,
                    cant_kg: vm.fdatos.cant_kg,  
                })
                    .success(function (res) {
                        console.log(res);
                        $scope.vm.fdatos = {};

                        $http.get('controller/consulta_alimCerda.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })
                    })

                    //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('').css('display', 'none');
            }
        }

        vm.borrarAlimentoCerda= function(id){
            $('.eliminar_alimentoCerda').css('display', 'block');
            $('.form_alimentoCerda').css('display', 'none');
            
          vm.borrarAlimentoCerda1 = function()
            {
              
                $http.post("controller/insertar_alimento_cerda.php", {
                    op: "deleteAlimentoCerda",
                    id: id,
                    nombre_alimento: "",                    
                    idcerda: "",
                    fecha: "",
                    cant_kg: "" 
                    
                })
                    .success(function (res) {
                        console.log(res);

                        $http.get('controller/consulta_alimCerda.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })

                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('.eliminar_alimentoCerda').css('display', 'none');
            }
        }

        vm.editarAlimentoCerda = function(id, nombre_alimento, idcerda, fecha, cant_kg){
          $scope.textButton = "Modificar Registro";
          $('.bguardarAlimentoCerda, .eliminar_alimentoCerda').css('display', 'none');
          $('.form_alimentoCerda, .beditarAlimentoCerda').css('display', 'block');
          $scope.vm.fdatos={nombre_alimento:nombre_alimento, idcerda: idcerda, fecha:Number(fecha), cant_kg:Number(cant_kg) };               
            
          vm.editarAlimentoCerda1 =function (){
              $scope.textButton = "Modificar medicamento";
              $http.post("controller/insertar_alimento_cerda.php", { op: "updateAlimentoCerda", id: id, nombre_alimento:vm.fdatos.nombre_alimento, idcerda:vm.fdatos.idcerda, fecha:vm.fdatos.fecha, cant_kg: vm.fdatos.cant_kg})
                .success(function(res){
                  console.log(res);
                  $scope.vm.fdatos={};

                  $http.get('controller/consulta_alimCerda.php')
                    .success(function(data) {
                        $scope.names = data;
                        console.log(data);
                    })
                  $('').css('display', 'none');
              })
            //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;                     
                .error(function(data) {
                        console.log('Error: ' + data);
                });                  
          }
        } 

})




//ESTE CONTROLADOR LLEVARA EL CONTROL DE ALIMENTO DE LOS DIFERENTES LOTES Y SUS METODOS TALES COMO GUARDAR, LISTAR. MODIFICAR
.controller("appCtrlControlAlimentoLote",  function controlGranja($scope, $http, $scope){
      console.log('hola este es el control de alimento de lotes');
        var vm=this;
        //inicializo un objeto en los datos de formulario
        vm.fdatos = {};
        $scope.names = [];
        
        $(document).ready(function () {
          $('.tabla_parto, .boton_parto, .tabla_verificar, .boton_verificar, .calendarios, .tabla_Cubricion, .tabla_calendario, .calendarios, .calendario1, .tabla_medicamento_cerda, .tabla_medLote, .tabla_contPeso, .tabla_contCubricion, .tabla_contParto, .tabla_contAlimentoCerda, .tabla_alimentoLote, .form_medCerda, .form_medLote, .form_contPeso, .form_contCubricion, .form_contParto, .form_alimentoCerda, .form_alimentoLote, .eliminar_medCerda, .eliminar_medLote, .eliminar_contPeso, .eliminar_contCubricion, .eliminar_contParto, .eliminar_alimentoCerda, .eliminar_alimentoLote').css('display', 'none');
        })

      controlAlimentoLote = function(){          
              $http.get('controller/consulta_alimLote.php')
                .success(function(data) {
                    $scope.names = data;
                    console.log(data);                    
                    $('.tabla_alimentoLote').css('display', 'inline');                    
                })
              .error(function(data) {
                    console.log('Error: ' + data);
               }); 
      }
      controlAlimentoLote();

      vm.enviarAlimentoLote  = function(){
            
            $scope.textButton = "Guardar registro";
            $('.beditarAlimentoLote').css('display', 'none');            
            $('.form_alimentoLote, .bguardarAlimentoLote').css('display', 'block');
            
            vm.enviarAlimentoLote1 = function() {

                $http.post("controller/insertar_alimento_lote.php", {                

                    op: "addAlimentoLote", 
                    id: "",
                    nombre_alimento: vm.fdatos.nombre_alimento,                   
                    idlote: vm.fdatos.idlote,
                    fecha: vm.fdatos.fecha,
                    cant_kg: vm.fdatos.cant_kg,  
                })
                    .success(function (res) {
                        console.log(res);
                        $scope.vm.fdatos = {};

                        $http.get('controller/consulta_alimLote.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })
                    })
                    //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('').css('display', 'none');
            }
        }

        vm.borrarAlimentoLote= function(id){
            $('.eliminar_alimentoLote').css('display', 'block');
            $('.form_alimentoLote').css('display', 'none');
            
          vm.borrarAlimentoLote1 = function()
            {
              
                $http.post("controller/insertar_alimento_lote.php", {
                    op: "deleteAlimentoLote",
                    id: id,
                    nombre_alimento: "",                    
                    idlote: "",
                    fecha: "",
                    cant_kg: "" 
                    
                })
                    .success(function (res) {
                        console.log(res);

                        $http.get('controller/consulta_alimLote.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })

                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('.eliminar_alimentoLote').css('display', 'none');
            }
        }


        vm.editarAlimentoLote = function(id, nombre_alimento, idlote, fecha, cant_kg){
          $scope.textButton = "Modificar Registro";
          $('.bguardarAlimentoLote, .eliminar_alimentoLote').css('display', 'none');
          $('.form_alimentoLote, .beditarAlimentoLote').css('display', 'block');
          $scope.vm.fdatos={nombre_alimento:nombre_alimento, idlote: idlote, fecha:Number(fecha), cant_kg:Number(cant_kg) };  



            
          vm.editarAlimentoLote1 =function (){
              $scope.textButton = "Modificar medicamento";
              $http.post("controller/insertar_alimento_lote.php", { op: "updateAlimentoLote", id: id, nombre_alimento:vm.fdatos.nombre_alimento, idlote:vm.fdatos.idlote, fecha:vm.fdatos.fecha, cant_kg: vm.fdatos.cant_kg})
                .success(function(res){
                  console.log(res);
                  $scope.vm.fdatos={};

                  $http.get('controller/consulta_alimLote.php')
                    .success(function(data) {
                        $scope.names = data;
                        console.log(data);
                    })
                  $('').css('display', 'none');
              })
            //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;                     
                .error(function(data) {
                        console.log('Error: ' + data);
                });                  
          }
        } 

})















.controller("appCtrlFinanzas",  function controlGranja($scope, $http, $scope){

   var vm=this;
        //inicializo un objeto en los datos de formulario
        vm.fdatos = {};
        $scope.names = [];

        $(document).ready(function () {
          $('.tabla_alimento, .form_alimento, .eliminar_alimento,  .bguardar, .beditar').css('display', 'none');
        }) 

    vm.listarAlimento = function(){         

              $http.get('controller/consulta_alimento.php')
                .success(function(data) {
                    $scope.names = data;
                    console.log(data);                    
                    $('.tabla_alimento').css('display', 'inline');                    
                })

              .error(function(data) {
                    console.log('Error: ' + data);
               });                          
    }
    

    vm.enviarAlimento = function(){

            $scope.textButton = "Añadir alimento";
            $('.beditarAlimento').css('display', 'none');            
            $('.form_alimento, .bguardarAlimento').css('display', 'block');
            
            vm.enviarAlimento1 = function() {

                $http.post("controller/insertar_alimento.php", {                

                    op: "addAlimento",
                    nombre_alimento: vm.fdatos.nombre_alimento,
                    descripcion: vm.fdatos.descripcion,
                    fecha_compra: vm.fdatos.fecha_compra,
                    tipo: vm.fdatos.tipo,
                    cant_exist_bulto: vm.fdatos.cant_exist_bulto,
                    cant_exist_kg: vm.fdatos.cant_exist_kg,
                    valor_bulto: vm.fdatos.valor_bulto,
                    valor_kg:vm.fdatos.valor_kg
                })
                    .success(function (res) {
                        console.log(res);
                        $scope.vm.fdatos = {};

                        $http.get('controller/consulta_alimento.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })
                    })

                    //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('').css('display', 'none');
            }
        }  
        
        vm.borrarAlimento= function(nombre_alimento){
            $('.eliminar_alimento').css('display', 'block');
            $('.form_alimento').css('display', 'none');
            
          vm.borrarAlimento1 = function()
            {
                $http.post("controller/insertar_alimento.php", {
                    op: "deleteAlimento",
                    nombre_alimento: nombre_alimento,                    
                    descripcion: "",
                    fecha_compra: "",
                    tipo: "",
                    cant_exist_bulto: "",
                    cant_exist_kg: "",
                    valor_bulto: "",
                    valor_kg:""
                })
                    .success(function (res) {
                        console.log(res);

                        $http.get('controller/consulta_alimento.php')
                            .success(function (data) {
                                $scope.names = data;
                                console.log(data);
                            })

                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                $('.eliminar_alimento').css('display', 'none');
            }
        }

    vm.editarAlimento = function(nombre_alimento, descripcion, fecha_compra, tipo, cant_exist_bulto, cant_exist_kg, valor_bulto, valor_kg){
          $scope.textButton = "Modificar registro";
          console.log("12as");
          $('.bguardarAlimento, .eliminar_alimento').css('display', 'none');
          $('.form_alimento, .beditarAlimento').css('display', 'block');
          $scope.vm.fdatos={nombre_alimento: nombre_alimento, descripcion:descripcion, fecha_compra: Number(fecha_compra), tipo:tipo, cant_exist_bulto:Number(cant_exist_bulto), cant_exist_kg:Number(cant_exist_kg), valor_bulto:Number(valor_bulto), valor_kg:Number(valor_kg)};               
            
          vm.editarAlimento1 =function (){
              $scope.textButton = "Modificar un registro";
              $http.post("controller/insertar_alimento.php", { op: "updateAlimento", nombre_alimento: vm.fdatos.nombre_alimento,  descripcion: vm.fdatos.descripcion, fecha_compra: vm.fdatos.fecha_compra, tipo: vm.fdatos.tipo, cant_exist_bulto:vm.fdatos.cant_exist_bulto, cant_exist_kg:vm.fdatos.cant_exist_kg, valor_bulto:vm.fdatos.valor_bulto, valor_kg:vm.fdatos.valor_kg})
                .success(function(res){
                  console.log(res);
                  $scope.vm.fdatos={};

                  $http.get('controller/consulta_alimento.php')
                    .success(function(data) {
                        $scope.names = data;
                        console.log(data);
                    })
                  $('.form_alimento').css('display', 'none');
              })
            //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;                     
                .error(function(data) {
                        console.log('Error: ' + data);
                });                  
            }
          }


})









                
  



/*
.controller('MyCtrl', function($scope) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
})


.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: '...' // See below
  };
});



*/
