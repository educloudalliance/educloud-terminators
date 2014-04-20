'use strict';

angular
  .module('pilvivaylaTerminatorsApp', [
    'ngCookies',
    'ngSanitize',
	'ui.router',
  'mm.foundation'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
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
    .state('subject', {
        url: '/subject/:subject',
        templateUrl: 'views/subject.html',
        controller: function($scope, $stateParams) {
            $scope.subject = $stateParams.subject;
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
  });
