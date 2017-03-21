function truthCheck (collection, pre) {

// 	Array.prototype.allSame = function() {

// 		for (i = 0; i < this.length; i++) {
// 			if (this[i])
// 		}
// 	}
you can add some randome shit here


	var trueCount = 0;
	var truthyStatus = [];

	collection.forEach(function(e){
		if(e.hasOwnProperty(pre)) {
			trueCount++;
		}
		truthyStatus.push(e[pre]);
	});

	// if (collection.length == trueCount && truthyStatus.allSame()) {
	// 	pre = true;
	// } else {
	// 	pre = false;
	// }

	collection.forEach(function(e){
		console.log(e === true);
	});

	



	return pre;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));