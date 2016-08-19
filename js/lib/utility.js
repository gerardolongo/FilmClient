function checkLength(value,length, field) {
	if ($(value).val().length > length)
		alert("Attenzione! Lunghezza caratteri maggiore per: " + field);
}


function arrayToString(obj) {
	var directors = "";
	for(var i = 0; i < obj.length; i++)
	{
		directors = directors + obj[i].name + ",";
	}
	return directors;
}

function populateSelect(){
	return data = {
		repeatSelect: null,
		availableOptions: [
			{id: 'TV', name: 'TV'},
			{id: 'OR', name: 'OR'},
		],
	};
}


