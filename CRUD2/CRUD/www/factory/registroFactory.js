crude.factory('RegistroFactory', ['$resource',function($resource){

  var factory = $resource(
    masterUrl + 'Gema/:idGema', {
      idGema: '@idGema'
    },{
      actualizar: {
        method: 'PUT',
        params: {
          idGema: '@idGema'
        }

      }

    });

  return factory;


}]);
