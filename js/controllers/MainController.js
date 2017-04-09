//app = angular.module('ForecastApp', []);
//app.controller('MainController', function($scope, forecast) {
//  forecast.success(function(data) {
//    $scope.films = data;
//  });
//});

//title: 'Cineblog', url: 'http://feeds.blogo.it/cineblog/it'


app.factory('FeedLoader', function ($resource) {
        return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
            fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
        });
    })
    .service('FeedList', function ($rootScope,FeedLoader,$sce) {
        this.get = function() {
            var feeds = [];
            var feedSources = [
                {title: 'ScreenWeek', url: 'https://blog.screenweek.it/feed'}];
            if (feeds.length === 0) {
                for (var i=0; i<feedSources.length; i++) {
                    FeedLoader.fetch({q: feedSources[i].url, num: 10}, {}, function (data) {
                        var feed = data.responseData.feed;
                        feeds.push(feed);
                        console.log(feed);
                    });
                }
            }
            return feeds;
        };
    })
    .controller('FeedCtrl', function ($scope, FeedList) {
        $scope.feeds = FeedList.get();
        $scope.$on('FeedList', function (event, data) {
            $scope.feeds = data;
            $scope.collapse = "{width:200px}";
        });
    });
