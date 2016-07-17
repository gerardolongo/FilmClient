/**
 * Created by Gerry on 02/07/16.
 */


app.directive('viewFilm', ['$mdDialog','$mdMedia',function($mdDialog,$mdMedia) {
    var directive = {};
    directive.restrict = 'E';
    directive.template = '' +
        '<div class="viewFilm">' +
            '<div ng-repeat="item in films | orderBy:\'year\' | filter:title ">' +
                '<div ng-class="{ \'row\': ($index + 1) % 3 == 0 }">' +
                    '<div class="col-md-3" filter="{title:\'text\'}">' +
                        '<table>' +
                            '<tr>' +
                                '<td>' +
                                    '<md-button ng-click="showCustom($event,item)">' +
                                    '   <img ng-src={{item.img}} />' +
                                    '</md-button>' +
                                '</td>' +
                            '</tr>' +
                            '<tr>' +
                                '<td>' +
                                '   <label class="title">{{item.title}}</label>' +
                                '</td>' +
                            '</tr>' +
                        '</table>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';

    directive.link = function ($scope, element, attrs) {
        $scope.showCustom = function($event,film) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                templateUrl: 'dialogTemplate.html',
                controller: function DialogController($scope, $mdDialog) {
                    $scope.film = film;
                }
            });
        };
    }


    return directive;
}]);
