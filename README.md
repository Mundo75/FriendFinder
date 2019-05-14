# **FriendFinder**
This Node.js assignment is a true full stack application using express and  finally publishing the finished project online using Heroku.

## *How Does it Work?*  :sunglasses:

I started with a "The Big Bang Theory" theme as the basis for putting my own spin on the "FriendFinder" assignment.  For this project, it was stressed that file structure was not only important, but required.  Aside from the standard Node.js files, this project was to utilize an "app" folder at the root, a "data" file containing a friends.js file which would act a data storage (in the form of an object array of friends) to be called on to compare with the users answers and determine which existing friend has the closest matching answers and thus the most compatible friend (totally scientific!!).

A public file was required and would house the front end code (HTML,JS, CSS). I elected to utilize external style and js sheets for the first time Using Node.js which required a bit of extra code to make work. A bit challenging at first, but ultimately came down to proper route structure to work.  The last required file was a "routing" file which contains the back end js code Node & express calls access various APIs to retreive data (GET) and post dynamically into HTML that would otherwise be static.  

at the root of course also lives the primary js  file  (server.js) which has the code for loading npm modules, which port to use, body-parser, listener, the required routing and starts the server. 

In the home.html file, I stuck generally close to the original design in the homework example, adding a bit of extra bootstrap and CSS to make the app mine. The rest of the HTML used a  bootstrap jumbotron header, glyphicons, and a button to take the user to the survey. 

links to list all friends' details in json format and link to git repository.
The survey.html code displays the survey question and and intake field that takes in the user's name and photo link. Once the user has completed all 10 questions, they can submit their answer and via the bootstrap submit button and ultimately learn who their best match is.  I also added (to match the homework demo) nav links to take the user to the jason object array with all friends' and their details in json format (if using Chrome and have JSON Parser loaded); link to my git repository and a link to clear the board and start anew. 

The submit event code first checks to validate the user completed all fields.  If any field is missing data an alert is thrown advising the user to complete the form; else a post method call is made requesting the the express server to dynamically trigger a bootstrap Modal with the best match friend's name and photo. If the photo link for any friend is broken or cant be found, a cute lil puppy pic should be seen instead.  

The htmlRoutes.js holds the code to handle the api GET method requests, and displays the corresponding html page.  The apiRoutes.js handles the GET method request to list all friends in json format.  The POST request loops through the scores array in the friends object for the current user and compares with each of the friend's scores in the existing pool by converting the scores to absolute number and then finding the difference in each category for each existing friend. The total difference is stored in a temp array. Once all the friend's scores are compared the temp array will be sorted by the difference, and this will give me the best match at the 0th index. Then the POST request will return the index of 0 which has the best match back to the client.

You can demo this app at the Heroku page: https://mundo-friend-finder.herokuapp.com 