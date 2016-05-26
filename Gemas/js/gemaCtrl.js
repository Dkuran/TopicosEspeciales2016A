app.controller('gemaController', function(){

console.log('mi primer controlador');

//  var gem = {
//
//    nombre: 'gema1',
//    precio: 2.95,
//    descripcion: 'gema de corte refinado',
//    compra: true
//  }

  var gem = [

    {

      nombre: 'gema1',
      precio: 2.95,
      descripcion: 'gema de corte refinado',
      compra: true
    },
    {

      nombre: 'gema2',
      precio: 3.95,
      descripcion: 'gema de corte refinado',
      compra: false
    },
    {

      nombre: 'gema3',
      precio: 4.95,
      descripcion: 'gema de corte refinado',
      compra: true
    },
    {

      nombre: 'gema4',
      precio: 5.95,
      descripcion: 'gema de corte refinado',
      compra: false
    }



  ]


  this.product = gem;

});
