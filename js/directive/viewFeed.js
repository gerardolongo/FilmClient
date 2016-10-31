/**
 * Created by Gerry on 02/07/16.
 */


app.directive('viewFeed', ['$mdDialog','$mdMedia',function($mdDialog,$mdMedia) {
    var directive = {};
    directive.restrict = 'E';
    directive.template = ''+
                        '<div ng-repeat="feed in feeds ">'+
                            '<div ng-repeat="item in feed.entries">'+
                                '<md-button class="md-raised" id="resizeButton" ng-click="showFeed($event,item)" >{{item.title}}' +
                                '</md-button>' +
                            '</div>'+
                        '</div>';

    directive.link = function ($scope, element, attrs) {
        $scope.showFeed = function($event,item) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                templateUrl: 'Template/dialogFeedTemplate.html',
                controller: function DialogController($scope, $mdDialog) {
                    $scope.item = item;
                }
            });
        };
    }

    return directive;
}]);
