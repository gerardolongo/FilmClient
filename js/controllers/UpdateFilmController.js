/**
 * Created by Gerry on 24/07/16.
 */

app.controller('updateFilmController',function updateFilm($scope,$http,toast,searchFilmByTitle,updateFilm,$compile,$location){

    $scope.data = populateSelect();
    $scope.buttonText = "Modifica";

    var title = $location.search().title;

    searchFilmByTitle.film(title)
        .success(function(data) {
            if(data != ""){
                $scope.showAutocompl = false;
                $scope.title = data.title;
                $scope.year = data.year;
                $scope.running_time = data.running_time;
                $scope.director = data.director;
                $scope.lang = data.lang;
                $scope.data.repeatSelect = data.source;
                $scope.id = data._id;
                $scope.desc = data.desc;
                $scope.img = data.img;
                $scope.foundFilm = true;

            }
            else
                toast.showToast("Film non trovato");
        });


    $scope.updateFilm = function(id){
        debugger;
        var parameter = JSON.stringify({title:$scope.title, year:$scope.year,
            running_time:$scope.running_time, director:$scope.director, lang:$scope.lang, source: $scope.data.repeatSelect,
            desc:$scope.desc, img:$scope.img});
        updateFilm.put(id, parameter)
            .success(function(data){
                toast.showToast("Film aggiornato correttamente");
        }).error(function(data, status, headers, config){
            toast.showToast("Si è verificato un errore nell'elaborazione dei dati: " + data);
        });
    }

    /*
    function compileHTML() {
        var compiledeHTML = $compile("<revise-film></revise-film>")($scope);
        $("#updateFilmContainer").append(compiledeHTML);
    }
    */

})




