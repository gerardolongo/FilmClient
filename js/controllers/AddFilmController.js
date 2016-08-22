app.controller('addFilmController',function($scope,$http,$filter,$timeout,$q,toast,usSpinnerService){

    var self = this;

    self.directors     = null;
    self.selectedItem  = null;
    self.result        = null;
    self.searchText    = null;
    self.querySearch   = querySearch;
    self.searchTextChange = searchTextChange;

    $scope.buttonText = "Aggiungi";

    function searchTextChange(text) {
        if (typeof text != 'undefined') {
            self.searchText = text;
            var uppercase = self.searchText.toUpperCase();
            if (text !== uppercase) {
                self.searchText = uppercase;
            }
        }
    }

    self.onSelection = function (item) {
        //self.selectedItem = item;
        console.log(item)
    }

    self.addFilm = function (){
        var director = "";

        if(self.selectedItem == null)
            director = self.searchText;
        else
            director = self.selectedItem.display;

        usSpinnerService.spin('spinner-1');

        $http.get(server + '/scraping/mymovies/' + $scope.title)
            .success(function(data, status, headers, config) {
                $timeout(callAtTimeout, 7000);
                usSpinnerService.stop('spinner-1');
                var desc = data.desc;
                var img = data.img;
                var parameter = JSON.stringify({title:$scope.title, year:$scope.year,
                    running_time:$scope.running_time, director:director, lang:$scope.lang, source: $scope.data.repeatSelect
                    ,desc:desc, img:img});

                $http.post(server, parameter).success(function(data, status, headers, config) {
                    if(checkData(data))
                        toast.showToast("Inserimento avvenuto con successo");
                    else
                        toast.showToast(data.error);

                    $scope.filmAdded = true;

                    clearScope();

                }).error(function(data, status, headers, config) {
                    console.log("Film not added");
                });

            }).error(function(data, status, headers, config) {
            console.log("No data found..");
        });

        function callAtTimeout() {
            console.log("Timeout occurred");
        }

        function clearScope()
        {
            $scope.year = "";
            $scope.title = "";
            $scope.running_time = "";
            $scope.director = "";
            $scope.lang = "";
            $scope.data.repeatSelect = "";
            self.searchText = "";
        }

    }

    $scope.init = function(){
        self.result = loadAll();
        $scope.showAutocompl = true;
        $scope.data = populateSelect();
    }


    function loadAll(){
        $http.get("http://192.168.1.130:2380/director")
            .then(function(res){
                if(res.data.length > 0) {
                    self.data = res.data;
                    self.directors = arrayToString(res.data);
                    self.directors = self.directors.substring(0, self.directors.length - 1);
                    self.result = self.directors.split(",").map(function (state) {
                        return {
                            value: state.toLowerCase(),
                            display: state
                        };
                    });
                }
            });
    }


    function querySearch (query) {
        var results = query ? self.result.filter(createFilterFor(query)) : self.result;
        var deferred = $q.defer();
        $timeout(function () {
            deferred.resolve(results);
        }, Math.random() * 1000, false);
        return deferred.promise;

    }

    function createFilterFor(query) {
        var uppercaseQuery = angular.uppercase(query);
        return function filterFn(state) {
            return (state.display.indexOf(uppercaseQuery) === 0);
        };
    }

    function checkData(data){
        if (data!= "")
            return false;
        
        return true;
    }

});
