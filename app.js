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

	var counter = 0;


	collection.forEach(function(e){
		propertyType.push(typeof e[pre]);
		propertyTruthVal.push(e[pre] !== 0 && e[pre] !== "");
		if (e.hasOwnProperty(pre))
			counter++;

	});

	if (collection.length === counter && 
		propertyType.isSame() && 
		propertyTruthVal.isSame()) {
		return true;
	}

	return false;
}

console.log(truthCheck([{"phil": "programmer", "dudeson": "check"}, { "dudeson": "yes"}], "phil"))