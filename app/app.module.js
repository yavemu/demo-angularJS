'use-strict';

//Definir el modelo base de la app, es el que se usa en el rootScope (index.html)
angular.module('demoApp', [
    //Definir los modulos, servicios (services), proveedores (providers) dependientes
    'ngRoute', // Proveedor del servicio $route
    'userList',
    'userDetail'
]);