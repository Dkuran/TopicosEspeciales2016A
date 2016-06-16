crude.controller('RegistroCtrl', ['RegistroFactory', '$scope', function (RegistroFactory, $scope) {

  console.log('Controlador de Registro');

  $scope.nuevaGema = {

    nombre: '',
    precio: 0.00,
    descripcion: '',
    url: ''

  }

  //$scope.gemas = [];

  $scope.crearGema = function() {

    RegistroFactory.save($scope.nuevaGema).$promise.then(

      function (respuesta) {
        $scope.nuevaGema = {

          nombre: '',
          precio: 0.00,
          descripcion: '',
          url: ''

        }
        //$scope.gemas.push(respuesta);

      },
      function (error) {

        console.log(error);
      }


    );

  };




}]);
