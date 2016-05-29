function checkLength(value,length, field)
{
	if ($(value).val().length > length)
		alert("Attenzione! Lunghezza caratteri maggiore per: " + field);
}


function toast($mdToast) {
	var toast = $mdToast.simple()
		.textContent('Hello World!')
		.action('OK')
		.highlightAction(false);
	$mdToast.show(toast).then(function(response) {
		if ( response == 'ok' ) {
			alert('You clicked \'OK\'.');
		}
	});
}
