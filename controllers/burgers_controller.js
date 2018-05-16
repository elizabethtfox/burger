// Dependencies
var express = require("express");
var router = express.Router();

// Import model (burger.js) to use database functions
var burger = require("../models/burger.js");

// Create all routes
router.get("/", function(req, res){
    var burgerList;
    var optionList;

    burger.all(function(data){
        burgerList = data;
        console.log(burgerList);
    });

    burger.options(function(data){
        optionList = data;
        console.log(optionList);

        console.log({ burgers: burgerList, options: optionList});
        res.render("index",
            {
                burgers: burgerList,
                options: optionList
            }
            );
    });
});

router.post("/api/burgers", function(req, res){
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.name, false
    ], function (rsult){
        // Send back the ID of the new burger
        res.json({id: result.insertID});
    });
});

router.put("/api/burgers/:id", function (req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: true
    }, condition, function (result){
        if (result.changedRows ===0){
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js
module.exports = router;