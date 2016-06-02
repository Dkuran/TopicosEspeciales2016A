app.controller('eventoController',['EventoFactory','toastr','$scope', function(EventoFactory, toastr,$scope){
  console.log('controlador evento');

  this.eventos = [];
  EventoFactory.query()
    .$promise.then(
    function (respuesta) {
      console.log(respuesta[0]);
//      toastr.info('Se trajeron : ' + respuesta.length + ' Eventos.', 'Información');
      $scope.eventos = respuesta;
      //console.log(eventos);
    },
    function (err) {
//      toastr.error('Error del Servidor', 'Error');
      console.log(err);

    });

}]);
