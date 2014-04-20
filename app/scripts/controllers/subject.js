'use strict';

angular.module('pilvivaylaTerminatorsApp')
  .controller('SubjectCtrl', function ($scope) {
     $scope.postsCount = 15;
	$scope.title = $scope.subject;
	$scope.subcategories = [
		'Division',
		'Multiplying'
	]
  });
