var aplicacion = angular.module('aplicacion', []);
aplicacion.controller('Municipios', function($scope, $http) {



    // Propiedades iniciales del mapa
       var anio= 2015;
     $( "#slider-range-max" ).slider({
                          
                          range: "min",
                          min: 2007,
                          max: 2015,
                          value: 2015,
                          animate: true,
                          slide: function( event, ui ) {
                              
                            $( "#amount" ).val( ui.value );
                          },
                             
      });
     
		
     $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );    
   
       //se generar un vector y en cada posicion se almacenaran los datos por año y  $scope.datosMunicipio[0] para no repetir todo el ciclo entero
       
     anio= 2015;
   
    $scope.datosMunicipio = [];
    $scope.cargarMunicipio = function(){
        $http({
            method: 'GET', url: '/Dengue_listar', params: {anio: anio}
        }).
        success(function(data) {
            if(typeof(data) == 'object'){
                $scope.datosMunicipio = data;
                //console.log(JSON.stringify($scope.datosMunicipio, null, 2))
                var a=  JSON.stringify($scope.datosMunicipio, null, 2);

               $( "#mostrar_query").val(a);  
                      
         /*
                $(function() {
  $('#but').click(function() {
      fnSelect('mostrar_query');
  });
});
           */
                
  $("#mostrar_query").click(function() {
      $("#mostrar_query").select();
      
  });
                
    //('#mostrar_query').click({})            
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
    
        $( "#slider-range-max" ).on( "slide", function( event, ui ) {
                             
                    $( "#amount" ).val( ui.value );
                    anio=($( "#amount" ).val());
                    $scope.cargarMunicipio();

        });

});

   
                
//version final 