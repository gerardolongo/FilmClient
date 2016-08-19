var app = angular.module('ForecastApp', ['ngRoute','ngMessages','ngMaterial','ngResource','ngSanitize',
	'angAccordion','angularSpinner','ui.bootstrap']);


app.config(function($routeProvider) {
    $routeProvider.
      when('/', {
          templateUrl: 'home.html',
          controller: 'FeedCtrl'
      }).
	  when('/viewAll', {
		 templateUrl: 'viewFilm.html',
         controller: 'viewController'
	  }).
	  when('/viewByTitle', {
		 templateUrl: 'viewByTitle.html',
         controller: 'viewByTitleController'
	  }).
	  when('/addFilm', {
		 templateUrl: 'addFilm.html',
         controller: 'addFilmController'
	  }).
	  when('/viewByYear', {
		 templateUrl: 'viewByYear.html',
         controller: 'viewByYearController'
	  }).
	  when('/viewByDirector', {
		 templateUrl: 'viewByDirector.html',
         controller: 'viewByDirectorController'
	  }).
	  when('/updateFilm', {
		templateUrl: 'updateFilm.html',
		controller: 'updateFilmController'
	  }).
      otherwise({
          redirectTo: '/'
      });
});

server = "http://192.168.1.130:2380/film";
