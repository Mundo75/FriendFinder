const path = require("path");
const express = require("express");

let app = express();
let port = process.env.PORT || 1337;

app.use(express.static(path.join(__dirname, "./app/public/")));

// app.use("/assets", function(request, response, next){
//   console.log(request.url);
//   next();
// });



require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);




app.listen(port, function() {

  console.log("App listening on PORT: " + port);

});