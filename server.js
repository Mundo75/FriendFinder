const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 1337;

app.use(express.static(path.join(__dirname, "./app/public/")));

// app.use("/assets", function(request, response, next){
//   console.log(request.url);
//   next();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



app.listen(port, function() {

  console.log("App listening on PORT: " + port);

});