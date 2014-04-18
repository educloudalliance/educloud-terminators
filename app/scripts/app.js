'use strict';

angular
  .module('pilvivaylaTerminatorsApp', [
    'ngCookies',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/subject', {
        templateUrl: 'views/subject.html',
        controller: 'SubjectCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
