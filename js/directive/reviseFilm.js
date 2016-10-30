/**
 * Created by Gerry on 23/07/16.
 */
app.directive('reviseFilm', ['$mdDialog','$mdMedia',function($mdDialog,$mdMedia) {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = 'Template/reviseFilmTemplate.html';
    
    return directive;

}]);