//app = angular.module('ForecastApp', []);

app.factory('searchFilmByTitle', function($http) {
	var film = function(title) {
		return $http.get(server + '/title/' + title);
	};

	return {
		film: film
	};
});

//TO-DO
app.factory('updateFilm',function($http){
	var put = function(id, parameter){
		debugger;
		return $http.put(server + '/' + id, parameter);
	};

	return {
		put : put
	};
});







