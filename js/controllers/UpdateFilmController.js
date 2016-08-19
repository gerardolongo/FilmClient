/**
 * Created by Gerry on 24/07/16.
 */

app.controller('updateFilmController',function updateFilm($scope,$http,toast,searchFilmByTitle,$compile){

    $scope.data = populateSelect();

    $scope.search = function() {
        searchFilmByTitle.film($scope.searchTitle)
            .success(function(data) {
                if(data != ""){
                    compileHTML();
                    $scope.showAutocompl = false;
                    $scope.title = data.title;
                    $scope.year = data.year;
                    $scope.running_time = data.running_time;
                    $scope.director = data.director;
                    $scope.lang = data.lang;
                    $scope.data.repeatSelect = data.source;
                }
                else
                    toast.showToast("Film non trovato");

        });
    }

    $scope.updateFilm = function(){
        
    }

    function compileHTML() {
        var compiledeHTML = $compile("<revise-film></revise-film>")($scope);
        $("#updateFilmContainer").append(compiledeHTML);
    }

    function modifyButtonText() {

    }
})




