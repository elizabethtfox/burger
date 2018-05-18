// Dependencies
var express = require("express");
var router = express.Router();

// Import model (burger.js) to use database functions
var burger = require("../models/burger.js");

// Create all routes
// Index Redirect
router.get('/', function (req, res) {
    res.redirect('/index');
});

// Index Page (render all burgers to DOM)
router.get('/index', function (req, res) {
    burger.all(function(data) {
        var hbsObject = { burgers: data };
        //console.log(hbsObject);
        res.render('index', hbsObject);
    });
});


// Create a New Burger
router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect('/index');
    });
});


// Devour a Burger
router.post('/burger/eat/:id', function (req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect('/index');
    });
});
// ----------------------------------------------------


// Export routes
module.exports = router;