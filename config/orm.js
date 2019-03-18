// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    //Method to select all from SQl DB
    selectAll: function(cb){
        var queryString = "SELECT * FROM burgers;";
       connection.query (queryString, function(err, result){
           if (err) {throw err;
        } 
        cb(result);
       });
    },
    //Method to insert one burger
    insertOne: function(col, val, cb) {
        var col = "burger_name,devoured";
        var queryString = "INSERT INTO burgers(" + col + ") + VALUES (" + val + ",0);";
        
        connection.query (queryString, function(err, result){
            if (err) {throw err;
         } 
         cb(result);
        });
    },
    //Method to update burger to eaten
    updateOne: function(val){
        //UPDATE burgers SET devoured = 1 WHERE burger_name = "turkey";
    var queryString = "UPDATE burgers SET devoured = 1 WHERE ? = ",
    (val);
    connection.query (queryString, function(err, result){
        if (err) {throw err;
     } 
     cb(result);
    });
    }   

}
//for use in burgers.js
module.exports = orm;