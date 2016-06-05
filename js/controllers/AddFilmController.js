app.controller('addFilmController',function($scope,$http,$filter,$timeout,$q,$mdToast, $document){

    var self = this;

    self.directors     = null;
    self.selectedItem  = null;
    self.result        = loadAll();
    self.searchText    = null;
    self.querySearch   = querySearch;
    self.searchTextChange = searchTextChange;


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

        var parameter = JSON.stringify({title:$scope.title, year:$scope.year,
            running_time:$scope.running_time, director:director, lang:$scope.lang, source: $scope.data.repeatSelect });
        
        $http.post(server, parameter).success(function(data, status, headers, config) {
            if(checkData(data))
            {
                $scope.showToast("Inserimento avvenuto con successo");
            }
            else
                $scope.showToast(data.error);

            $scope.filmAdded = true;
            $scope.year = "";
            $scope.title = "";
            $scope.running_time = "";
            $scope.director = "";
            $scope.lang = "";
            //$scope.source = "";
            $scope.data.repeatSelect = "";
            self.searchText = "";

        }).error(function(data, status, headers, config) {
            console.log("Film not added");
        });
    }

    $scope.data = {
        repeatSelect: null,
        availableOptions: [
            {id: 'TV', name: 'TV'},
            {id: 'OR', name: 'OR'},
        ],
    };


    function loadAll(){
        $http.get(server)
            .then(function(res){
                if(res.data.length > 0) {
                    self.data = res.data;
                    self.directors = "";
                    var prevEl = self.data != null ? self.data[0].director : null;
                    var currEl = "";
                    var i = 0;
                    angular.forEach(self.data, function (value, key) {
                        currEl = value.director;
                        if(!(typeof currEl === "undefined")) {
                            if (i > 0) {
                                if (prevEl != currEl) {
                                    self.directors = self.directors + value.director + ',';
                                    currEl = value.director;
                                    prevEl = currEl;
                                }
                            }
                            else {
                                self.directors = self.directors + value.director + ',';
                            }
                        }
                        i++;
                    });

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


    $scope.showToast = function(msg) {
        var toast = $mdToast.simple()
            .textContent(msg)
            .action('OK')
            .highlightAction(false);
        $mdToast.show(toast).then(function(response) {

        });
    }

    function checkData(data){
        if (data!= "")
        {
            return false;
        }

        return true;
    }

});





