/**
 * Created by Gerry on 22/05/16.
 */

/*
app.controller('viewController', function($scope,$http,forecastViewAll) {
    forecastViewAll.success(function(data, status, headers, config) {
            $scope.films = data;
        }).error(function(data, status, headers, config) {
        console.log("No data found..");
    });
});
*/


app.controller('viewController', function($scope,$http,$mdDialog) {
    $http.get(server)
        .success(function(data, status, headers, config) {
            $scope.films = data;
        }).error(function(data, status, headers, config) {
        console.log("No data found..");
    });
    

});


