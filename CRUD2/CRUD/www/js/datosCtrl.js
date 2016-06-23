crude.controller('DatosCtrl', ['RegistroFactory',
                  '$scope',
                  '$state',
                  function (RegistroFactory, $scope, $state) {

    $scope.gemas = [];
    $scope.listarGemas = function () {

      RegistroFactory.query().$promise.then(
        function (respuesta) {
          $scope.gemas = respuesta;
        },
        function (err) {

          console.log(err);
        });


    }

    $scope.listarGemas();


    $scope.mostrar = false;

    $scope.activar = function () {
      if ($scope.mostrar == true) {
        $scope.mostrar = false;
      } else {
        $scope.mostrar = true;
      }

    };


    $scope.irEditar = function (gema) {
      $state.go('edicion', {
        gemaId: gema.id
      });
    }


    $scope.eliminarGema = function (gema, indice) {
      RegistroFactory.delete({
        idGema: gema.id
      }).$promise.then(
        function (respuesta) {
          $scope.gemas.splice(indice, 1);

          //console.log(respuesta);

        },
        function (err) {

          console.log(err);
        });
      $scope.mostrar = false;
    };


}]);
