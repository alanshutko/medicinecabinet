'use strict';

angular
  .module('medicineCabinetApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'medicineCabinetController'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/medicineCabinet', {
        templateUrl: 'views/medicinecabinet.html',
        controller: 'MedicineCabinetCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
