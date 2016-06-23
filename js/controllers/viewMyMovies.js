/**
 * Created by Gerry on 15/06/16.
 */

app.controller('viewMyMovies', function($scope,$http,$sce) {
    $http.get("http://127.0.0.1:2380/film/scraping/mymovies/")
        .success(function(data, status, headers, config) {
            var elem =JSON.stringify(data);
            $scope.desc = data.desc;
            $scope.img = data.img;
        }).error(function(data, status, headers, config) {
        console.log("No data found..");
    });
});