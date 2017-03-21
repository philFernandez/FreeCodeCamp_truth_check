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
		if (e[pre])
	});

	console.log(propertyType.isSame());

	return pre;
}

console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"));