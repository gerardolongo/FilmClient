var app = angular.module('ForecastApp', ['ngRoute','ngMessages','ngMaterial','ngResource']);


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
	  when('/viewMyMovies', {
			templateUrl: 'viewMyMovies.html',
			controller: 'viewMyMovies'
	  }).
      otherwise({
          redirectTo: '/'
      });
});

server = "http://192.168.1.130:2380/film";



