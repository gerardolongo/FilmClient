var app = angular.module('ForecastApp', ['ngRoute','ngMessages','ngMaterial']);

app.config(function($routeProvider) {
    $routeProvider.
      when('/', {
          templateUrl: 'home.html',
          controller: 'homeController'
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
      otherwise({
          redirectTo: '/'
      });
});

server = "http://192.168.1.130:2380/film";



