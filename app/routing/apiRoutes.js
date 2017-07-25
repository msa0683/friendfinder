// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. 
// This will be used to handle incoming survey results. This route will 
// also be used to handle the compatibility logic.

//Required dependencies
var path = require('path');

var friendsData = require("../data/friends.js");

module.exports = function(app) {

	app.get("/api/friends", function(res,req) {
		res.json(friendsData);
	});

	app.post("/api/friends" function(res,req) {
		var userInput = req.body;
		var userAnswers = userInpu.score;

		var friendName = " ";
		var friendImage = " ",

		var totalDiff = 100;

		for (var i = 0; i < friendsData.length; i++) {

			var difference = 0;
			for (var j = 0; j < userAnswers.length; j++) {
				difference += Math.abs(friendsData[i].scores[j] - userAnswers[j]);
			}

		if (difference < totalDiff) {
			totalDiff = difference;
			friendName = friendsData[i].name;
			matchImage = friendsData[].photo;
		}

	    }

		friendsData.push(userInput);

		// Send appropriate response
		res.json({status: 'OK', friendName: friendName, matchImage: matchImage});
	});
};



