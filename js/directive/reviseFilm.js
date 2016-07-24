/**
 * Created by Gerry on 23/07/16.
 */
app.directive('reviseFilm', ['$mdDialog','$mdMedia',function($mdDialog,$mdMedia) {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = 'Template/reviseFilmTemplate.html';

    /*
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
    */

    return directive;

}]);