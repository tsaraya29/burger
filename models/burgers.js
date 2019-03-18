// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
     selectAll: function(cb){
         orm.selectAll("burgers", function(res){
             cb(res);
         });
     },

/// The variables cols and vals are arrays.
create: function(col, val, cb) {
    orm.insertOne("burgers", col, val, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", val, function(res) {
      cb(res);
    });
  },
}
// Export the database functions for the controller (burgers_controller.js).
module.exports = burgers;