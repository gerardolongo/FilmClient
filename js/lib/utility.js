function checkLength(value,length, field)
{
	if ($(value).val().length > length)
		alert("Attenzione! Lunghezza caratteri maggiore per: " + field);
}


function arrayToString(obj)
{
	var directors = "";
	for(var i = 0; i < obj.length; i++)
	{
		directors = directors + obj[i].name + ",";
	}
	return directors;
}


function toast($mdToast) {
	var toast = $mdToast.simple()
		.textContent('Hello World!')
		.action('OK')
		.highlightAction(false);
	$mdToast.show(toast).then(function(response) {
		if ( response == 'ok' ) {
			//alert('You clicked \'OK\'.');
		}
	});
}
