let friendFinderArray = require("../data/friends");


module.exports = function(app) {

	//get all friends and calculate answers to determine best match
	app.get("/api/friends", function(request, response) {

			response.json(friendFinderArray);
	});


	app.post("/api/friends", function(request, response) {
		
				let newFriend;
				let scoreDifference = [];

							//new friend's scores
							newFriend = request.body.scores;

							console.log("\n-----------------------------\nnew person scores:", newFriend);
							console.log("friends full array:", friendFinderArray);
							
							//match calculation
							for (let i = 0; i < friendFinderArray.length; i++) {
						
									let existingFrnds = friendFinderArray[i].scores;
									let difference = 0;

									console.log("just scores", existingFrnds,"\n----------------\n");
						
							for (let j = 0; j < existingFrnds.length; j++) {

									console.log("arr items: - existing:", existingFrnds[j], ", new friend:", newFriend[j]);
									difference += Math.abs(parseInt(existingFrnds[j]) - parseInt(newFriend[j]) );
							};
						
								console.log("difference with ", i, ":",difference);
								scoreDifference.push({"difference": difference, "index": i});
						
							};
			
	    				console.log("\nscoreDifference:", scoreDifference);
	    
	    				scoreDifference.sort(function(a,b){

									return ( parseInt(a.difference) - parseInt(b.difference) );
									
	    });
	    console.log("\nscoreDifference after sorting:", scoreDifference);

	    //Closest  match
			let matchFound = friendFinderArray[scoreDifference[0].index];
			
			console.log("\nMatch found:", matchFound);
			
			friendFinderArray.push(request.body);
			
			console.log("\nFriends List:", friendFinderArray);
			
	    response.json(matchFound);
  });
}