crude.controller('RegistroCtrl', ['RegistroFactory',
                  '$scope',
                  '$state',
                  function (RegistroFactory, $scope, $state) {

    console.log('Controlador de Registro');

    $scope.nuevaGema = {

      nombre: '',
      precio: 0.00,
      descripcion: '',
      url: ''

    }

    //$scope.gemas = [];

    $scope.crearGema = function () {

      RegistroFactory.save($scope.nuevaGema).$promise.then(

        function (respuesta) {
          $scope.nuevaGema = {

            nombre: '',
            precio: 0.00,
            descripcion: '',
            url: ''

          }

        },
        function (error) {

          console.log(error);
        }


      );
      $state.go('datos');

    };




}]);
