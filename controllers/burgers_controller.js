var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burgers = require("../models/burgers.js");

///Routes 

router.get("/", function(req, res){
    burgers.selectAll(function(data) {
        var burObject = 
        {
            burgers: data
        };
        console.log(burObject);
        res.render("index", burObject);
    });
});

// Export routes for server.js to use.
module.exports = router;

