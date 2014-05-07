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
    })
    .state('maths', {
        url: '/maths',
        templateUrl: 'views/maths.html',
    })
    .state('geometry', {
        url: '/geometry',
        templateUrl: 'views/geometry.html',
    })
    .state('account', {
        url: '/account',
        templateUrl: 'views/account.html',
    })
    .state('collection', {
        url: '/collection',
        templateUrl: 'views/collection.html',
    })
    .state('company', {
        url: '/company',
        templateUrl: 'views/company.html',
    })
    .state('item', {
        url: '/item',
        templateUrl: 'views/item.html',
    })
    .state('library', {
        url: '/library',
        templateUrl: 'views/library.html',
    })
    .state('magazine', {
        url: '/magazine',
        templateUrl: 'views/magazine.html',
    })
    .state('pilvivayla', {
        url: '/pilvivayla',
        templateUrl: 'views/pilvivayla.html',
    })
    .state('principal', {
        url: '/principal',
        templateUrl: 'views/principal.html',
    })
    .state('qa', {
        url: '/qa',
        templateUrl: 'views/qa.html',
    })
    .state('search', {
        url: '/search',
        templateUrl: 'views/search.html',
    })
    .state('subjects', {
        url: '/subjects',
        templateUrl: 'views/subjects.html',
    })
    .state('support', {
        url: '/support',
        templateUrl: 'views/support.html',
    })
    .state('teacher', {
        url: '/teacher',
        templateUrl: 'views/teacher.html',
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
