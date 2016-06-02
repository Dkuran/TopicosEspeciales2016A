app.factory('EventoFactory', ['$resource', function ($resource) {

  var factory = $resource(
    'https://tpcakeserver-dkuran.c9users.io/Evento/:idEvento', {
      idEvento: '@idEvento'
    });

  return factory;


}]);
