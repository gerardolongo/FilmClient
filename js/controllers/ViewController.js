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


    $scope.showAlert = function(film) {
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('.main')))
                .clickOutsideToClose(true)
                .title(film.title)
                .textContent(film.desc)
                .ariaLabel('Alert Dialog Demo')
                .ok('OK')

        );
    };


});
