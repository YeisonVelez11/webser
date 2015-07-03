var aplicacion = angular.module('aplicacion', []);
aplicacion.controller('Municipios', function($scope, $http) {



    // Propiedades iniciales del mapa
   
     
		
     $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );    
    
  
   
    $scope.datosMunicipio = [];
    $scope.cargarMunicipio = function(){
        $http({
            method: 'GET', url: '/Dengue_listar'
        }).
        success(function(data) {
            if(typeof(data) == 'object'){
                $scope.datosMunicipio = data;
                console.log(JSON.stringify($scope.datosMunicipio, null, 2))
                var a=  JSON.stringify($scope.datosMunicipio, null, 2);

             var concatenar="";
                
                for(var i in  $scope.datosMunicipio ){
                    
                //console.log(i)
                concatenar+=$scope.datosMunicipio[i][0];
                
                }
        $( "#header").hide();        
       $( "#mostrar_query").html(a);
											
             $(function() {

                $("#cargar").click(function() {
                    $( "#mostrar_query" ).dialog({
                        show: { effect: "blind", duration: 400 } ,
                        height: 500,
                        width: 420,
                        position: ["left",100],	
                        hide: { effect: "blind", duration: 400 } 


                        });
               
				    });
                
            });
          
  
   } else{
                alert('Error al intentar recuperar los municipios con dengue.');
            }
        }).
        error(function() {
            alert('Error al intentar recuperar los municipios con denge.');
        });
    };// Fin de metodo para manejo de municipios
      

});

//version final