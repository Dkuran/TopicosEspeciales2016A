// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var masterUrl = 'https://servidorpruebas-dkuran.c9users.io/';
var crude = angular.module('starter', ['ionic', 'ngResource'])

crude.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

//inyectar las 2 dependencias para usar las rutas

crude.config(function($stateProvider, $urlRouterProvider){

  //otherwise indica cual sera la pagina por defecto
  $urlRouterProvider.otherwise('/inicio');

  //indicamos los estados o las diferentes paginas a las cuales va a navegar la aplicacion
  $stateProvider
  .state('inicio', {
    url: "/inicio",
    templateUrl: 'rutas/inicio.html',
    controller: 'InicioCtrl'
  })
  .state('datos', {
    url: "/datos",
    templateUrl: 'rutas/datos.html',
    controller: 'DatosCtrl'
  })
  .state('registro', {
    url: "/registro",
    templateUrl: 'rutas/registro.html',
    controller: 'RegistroCtrl'
  })
  .state('item', {
    url: "/item/:gemaId",
    templateUrl: 'rutas/gema.html',
    controller: 'ActualizarCtrl'
  })
  .state('edicion', {
    url: "/edicion/:gemaId",
    templateUrl: 'rutas/gemaEdicion.html',
    controller: 'ActualizarCtrl'
  })



});


