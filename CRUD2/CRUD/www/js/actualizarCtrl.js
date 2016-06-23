crude.controller('ActualizarCtrl', ['$scope',
                  '$stateParams',
                  'RegistroFactory',
                  '$state',
                  function ($scope, $stateParams, RegistroFactory, $state) {

    console.log('Actualizar Gema');
    console.log($stateParams.gemaId);
    $scope.gema = {
      nombre: '',
      precio: 0.00,
      descripcion: '',
      compra: true,
      url: ''

    }


    RegistroFactory.get({
        id: $stateParams.gemaId
      })
      .$promise.then(
        function (gema) {
          $scope.gema = gema;
          console.log(gema);
        },
        function (error) {
          console.log('error', error);
        });



    $scope.actualizarGema = function () {

      RegistroFactory.actualizar({
          idGema: $stateParams.gemaId
        }, $scope.gema)
        .$promise.then(
          function (gemaActualizada) {
            console.log(gemaActualizada);

          },
          function (error) {
            console.log(error);
          });

      $state.go('datos');
    };



}]);
