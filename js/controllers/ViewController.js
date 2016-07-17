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
            $scope.films = []
                ,$scope.currentPage = 1
                ,$scope.numPerPage = 10
                ,$scope.maxSize = 5;

            $scope.numPages = function () {
                return Math.ceil(data.length / $scope.numPerPage);
            };

            $scope.$watch('currentPage + numPerPage', function() {
                var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                    , end = begin + $scope.numPerPage;

                $scope.films = data.slice(begin, end);
            });

        }).error(function(data, status, headers, config) {
        console.log("No data found..");
    });
});


