// Import the ORM
var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    options: function(cb){
        orm.selectAll("burger_options", function(res){
            cb(res);
        });
    },
    // The variables cols and vals are arrays
    create: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        });
    },
    delete: function(condition, cb){
        orm.deleteOne("burgers", condition, function(res){
            cb(res);
        });
    }
};

// Export database functions for the controller
module.exports = burger;