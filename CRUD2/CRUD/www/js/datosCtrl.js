crude.controller('DatosCtrl', ['RegistroFactory','$scope', function(RegistroFactory ,$scope){

  $scope.gemas = [];
  RegistroFactory.query().$promise.then(
    function (respuesta) {
      $scope.gemas = respuesta;
      //toastr.info('Se cargaron ' + respuesta.length + ' observaciones ', 'Información')
    },
    function (err) {
      //toastr.error('Error del servidor, chequea tu conexión a INTERNET o contacta con el ADMINISTRADOR', 'Error');
      console.log(err);
    });


}]);
