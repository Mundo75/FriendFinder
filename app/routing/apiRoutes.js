let friends = require("../data/friends");


module.exports = function(app) {



    //get all friends and calculate answers to determine best match
    app.get("/api/friends", function(request, response) {

		response.json(friend);

	});

	app.post("/api/friends", function(request, response) {

		let newFriend;
        let differentScores = [];

		//new friend's scores

		newFriend = request.body.scores;

	    console.log("\n-----------------------------\nnew person scores:", newFriend);

	    console.log("friends full array:", friends);

	    //match calculation

	    for (let i = 0; i < friends.length; i++) {

	    	let existingFrnds = friends[i].scores;
	    	let difference = 0;

	    	console.log("just scores", existingFrnds,"\n----------------\n");

	    	for (let j = 0; j < existingFrnds.length; j++) {

	    		console.log("arr items: - existing:", existingFrnds[j], ", new person:", newFriend[j]);

	    		difference += Math.abs(parseInt(existingFrnds[j]) - parseInt(newFriend[j]) );

	    	}

	    	console.log("difference with ", i, ":",difference);

	    	differentScores.push({"difference": difference, "index": i});

	    }

	    console.log("\ndifferentScores:", differentScores);

	    differentScores.sort(function(a,b){

	    	return ( parseInt(a.difference) - parseInt(b.difference) );

	    });

	    console.log("\ndifferentScores after sorting:", differentScores);



	    //Closest  match

	    let matchFound = friends[differentScores[0].index];

	    console.log("\nMatch found:", matchFound);

	    friends.push(request.body);

	    console.log("\nfriendsList:", friends);

	    response.json(matchFound);

  });

}