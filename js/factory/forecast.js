//app = angular.module('ForecastApp', []);

/*
app.factory('forecastViewAll', ['$http', function($http) {
  return $http.get('http://192.168.1.130:2380/film')
            .success(function(data) {
			  console.log(data);
              return data;
            })
            .error(function(err) {
			  console.log(err);
              return err;
            });

}]);
*/

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

});







