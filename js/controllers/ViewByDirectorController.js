/**
 * Created by Gerry on 22/05/16.
 */

app.controller('viewByDirectorController',function($scope,$http,$mdToast){
    debugger;
    $scope.search = function (){
        $http.get(server + '/director/' + $scope.director)
            .success(function(data, status, headers, config) {
                if(data.length != 0) {
                    $scope.films = data;
                    $scope.dirFound = false;
                }
                else
                {
                    $scope.dirFound = true;
                    $scope.showToast("Regista non trovato");
                    $scope.films = "";
                }

            }).error(function(data, status, headers, config) {
            console.log("No data found..");
        });
    }

    $scope.showToast = function(msg) {
        var toast = $mdToast.simple()
            .textContent(msg)
            .action('OK')
            .highlightAction(false);
        $mdToast.show(toast).then(function(response) {

        });
    }
});


