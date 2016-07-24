/**
 * Created by Gerry on 22/05/16.
 */


app.controller('viewByTitleController',function($scope,$http,$mdToast,$timeout,toast){

    $scope.displayElement = function () {
        $scope.display = {
            "display" : "none"
        }
    }

    $scope.displayElement();

    $scope.search = function (){
        $http.get(server + '/title/' + $scope.title)
            .success(function(data, status, headers, config) {
                if(data == "") {
                    $scope.film = null;
                    $scope.foundFilm = false;
                    $scope.desc = "";
                    $scope.img = "";
                    toast.showToast("Film non trovato");
                }
                else {
                    $scope.foundFilm = true;
                    $scope.display = "{display:block}";
                    $scope.film = data;
                }
            }).error(function(data, status, headers, config) {
                console.log("No data found..");
        });
    }


    $scope.deleteFilm = function(id){
        $http.delete(server + '/' + id)
            .success(function(data, status, headers, config) {
                $scope.filmDeleted = true;
                toast.showToast("Cancellazione avvenuta correttamente");
                $scope.title = "";
                $scope.film = "";
                $scope.foundFilm = false;
            }).error(function(data, status, headers, config) {
                console.log("No data found..");
        });
    }

});
