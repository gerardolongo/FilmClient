/**
 * Created by Gerry on 24/07/16.
 */

app.service('toast',function($mdToast){
    return {
        showToast: function(msg) {
            var toast = $mdToast.simple()
                .textContent(msg)
                .action('OK')
                .highlightAction(false);
            $mdToast.show(toast).then(function(response) {

            });
         }
    };
});



