function truthCheck (collection, pre) {

	Array.prototype.isSame = function() {
		for (i = 1; i < this.length; i++) {
			if (this[0] !== this[i])
				return false;
		}
		return true;
	};

	var propertyType = [];
	var propertyTruthVal = [];

	collection.forEach(function(e){
		propertyType.push(typeof e[pre]);
		propertyTruthVal.push(e[pre] !== 0 && e[pre] !== "");
	});

	if (propertyType.isSame() && 
		propertyTruthVal.isSame()) {
		return true;
	}

	return false;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))