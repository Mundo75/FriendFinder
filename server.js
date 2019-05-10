const path = require("path");
const express = require("express");

let app = express();
let port = process.env.PORT || 1337;


require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);





app.listen(port, function() {

  console.log("App listening on PORT: " + port);

});