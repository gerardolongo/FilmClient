/**
 * Created by Gerry on 24/04/16.
 */
app.controller('DemoCtrl', DemoCtrlDirector);

function DemoCtrl ($timeout, $q, $http, $scope) {
    var self = this;
    // list of `state` value/display objects
    //self.film        = loadAll();
    self.states      = loadAll();
    self.selectedItem  = null;
    self.searchText    = null;
    self.querySearch   = querySearch;

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
        var results = query ? self.states.filter( createFilterFor(query) ) : self.states;
        var deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
    }

    /**
     * Build `states` list of key/value pairs

     */
    function loadAll() {
        var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

        return allStates.split(/, +/g).map( function (state) {
            return {
                value: state.toLowerCase(),
                display: state
            };
        });
    }



    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };
    }
}

//

function DemoCtrlDirector($timeout, $http,$q){
    var self = this;

    self.directors     = null;
    self.result        = loadAll();
    self.selectedItem  = null;
    self.searchText    = null;
    self.querySearch   = querySearch;


    function loadAll(){
        $http.get('http://192.168.1.130:2380/film/')
            .then(function(res){
                self.data = res.data;
                self.directors = "";
                var prevEl = self.data[0].director;
                var currEl = "";
                var i = 0;
                angular.forEach(self.data, function(value, key) {
                    currEl = value.director;
                    if(i > 0) {
                        if (prevEl != currEl) {
                            self.directors = self.directors + value.director + ',';
                            currEl = value.director;
                            prevEl = currEl;
                        }
                    }
                    else
                    {
                        self.directors = self.directors + value.director + ',';
                    }

                    i++;
                });

                self.directors = self.directors.substring(0,self.directors.length - 1);
                self.result = self.directors.split(",").map( function (state) {
                    return {
                        value: state.toLowerCase(),
                        display: state
                    };

                });
            });
    }


    function querySearch (query) {
        var results = query ? self.result.filter( createFilterFor(query) ) : self.result;
        var deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
    }

    function createFilterFor(query) {

        var uppercaseQuery = angular.uppercase(query);
        return function filterFn(state) {
            return (state.display.indexOf(uppercaseQuery) === 0);
        };
    }
}




