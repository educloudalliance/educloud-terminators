'use strict';

angular
  .module('pilvivaylaTerminatorsApp', [
    'ngCookies',
    'ngSanitize',
	'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  //http://scotch.io/tutorials/javascript/angular-routing-using-ui-router
  $urlRouterProvider.otherwise('/home');
	//http://www.ng-newsletter.com/posts/angular-ui-router.html
	$stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/main.html',
	     controller: 'MainCtrl'
    })
    .state('home.list', {
        url: '/list',
        templateUrl: 'views/home-list.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
    })
    .state('subjectt', {
        url: '/subject',
        templateUrl: 'views/subject.html',
        controller: function($scope) {
            $scope.subject = ['Maths'];
        }
    })



    ;
	/*$routeProvider
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
      });*/
    $locationProvider.html5Mode(true);
  });
