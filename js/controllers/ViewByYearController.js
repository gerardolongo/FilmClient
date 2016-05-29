/**
 * Created by Gerry on 22/05/16.
 */

app.controller('viewByYearController',function($scope,$http){
    $scope.search = function (){
        $http.get(server + '/year/' + $scope.year)
            .success(function(data, status, headers, config) {
                $scope.filmByYear = data;
            }).error(function(data, status, headers, config) {
            console.log("No data found..");
        });
    }
});
