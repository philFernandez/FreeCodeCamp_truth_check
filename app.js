function truthCheck (collection, pre) {

	Array.prototype.isSame = function() {
		for (i = 1; i < this.length; i++) {
			if (this[0] !== this[i])
				return false;
		}
		return true;
	}

	var propertyType = [];

	var counter = 0;


	collection.forEach(function(e){
		propertyType.push(e[pre]);
		if (e.hasOwnProperty(pre))
			counter++;
	});

	

	if (collection.length === counter && propertyType.isSame()) {
		return true;
	}


	return false;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));