function checkLength(value,length, field)
{
	if ($(value).val().length > length)
		alert("Attenzione! Lunghezza caratteri maggiore per: " + field);
}


function deleteDuplicate(obj)
{
	var distinct = [];
	var directors = "";
	for (var i = 0; i < obj.length; i++) {
		var found = false;
		if(i == 0)
		{
			distinct.push(obj[i].director);
			directors = directors + obj[i].director + ",";
		}
		else {
			for (var j = 0; j < distinct.length; j++) {
				debugger;
				if (obj[i].director == distinct[j])
					found = true;
			}
			if (!found)
			{
				distinct.push(obj[i].director);
				directors = directors + obj[i].director + ",";
			}
		}
	}

	return directors;
}

function arrayToString(obj)
{
	var directors = "";
	for(var i = 0; i < obj.length; i++)
	{
		directors = obj[i].name + ",";
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
