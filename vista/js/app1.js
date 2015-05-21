angular.module("app", ['ngRoute'])
    .config(function($routeProvider){

        $routeProvider
            .when("/", {                
                templateUrl: "vista/template/home.html",
                controller: "appCtrlRegistro as vm"
            }) 

            .when("/registro", {                
                templateUrl: "vista/template/registro.html",
                controller: "appCtrlRegistro as vm"
            })
            .when("/registro/cerda", {                
                templateUrl: "vista/template/registro.html",
                controller: "appCtrlRegistroCerda as vm"
            })
            .when("/registro/varraco", {                
                templateUrl: "vista/template/registro.html",
                controller: "appCtrlRegistroVarraco as vm"
            })
            .when("/registro/lote", {                
                templateUrl: "vista/template/registro.html",
                controller: "appCtrlRegistroLote as vm"
            })
            .when("/registro/corral", {                
                templateUrl: "vista/template/registro.html",
                controller: "appCtrlRegistroCorral as vm"
            })
            .when("/registro/alimento", {                
                templateUrl: "vista/template/registro.html",
                controller: "appCtrlRegistroAlimento as vm"
            })



            .when("/control", {                
                templateUrl: "vista/template/control.html",
                controller: "appCtrlControl as vm"
            })
            .when("/control/medicoCerda", {                
                templateUrl: "vista/template/control.html",
                controller: "appCtrlMedicoCerda as vm"
            })
            .when("/control/medicoLotes", {  
                templateUrl: "vista/template/control.html",                
                controller: "appCtrlMedicoLote as vm"
            })
            .when("/control/lotes", {  
                templateUrl: "vista/template/control.html",                
                controller: "appCtrlLote as vm"
            })
            .when("/control/Cubriciones", {  
                templateUrl: "vista/template/control.html",                
                controller: "appCtrlCubriciones as vm"
            })
            .when("/control/partos", {  
                templateUrl: "vista/template/control.html",                
                controller: "appCtrlParto as vm"
            })
            .when("/control/alimentoCerda", {  
                templateUrl: "vista/template/control.html",                
                controller: "appCtrlControlAlimentoCerda as vm"
            })

            .when("/control/alimentoLote", {  
                templateUrl: "vista/template/control.html",                
                controller: "appCtrlControlAlimentoLote as vm"
            })





            .when("/finanzas", {                   
                templateUrl: "template/finanzas.html",
                controller: "appCtrlFinanzas as vm"
            })

            
            .when("/add", {                   
                templateUrl: "template/add.html",
                controller: "appCtrl as vm"
            })

            .when("/edit", {                   
                templateUrl: "template/form.html",
                controller: "appCtrl as vm"
            })

            .when("/calendar", {                   
                templateUrl: "template/edit.html",
                
            })


            

            .when("/configuracion", {                
                templateUrl: "template/prueba.html",
                controller: "appCtrl as vm"

            })


           
    })
    