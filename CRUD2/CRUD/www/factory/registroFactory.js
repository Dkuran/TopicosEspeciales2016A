crude.factory('RegistroFactory', ['$resource',function($resource){

  var factory = $resource(
    masterUrl + 'Gema/:idGema', {
      idGema: '@idGema'
    });

  return factory;


}]);
