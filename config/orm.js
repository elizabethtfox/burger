// Import MySQL connection
var connection = require("../config/connection.js");

function printQuestionMarks(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}

// Function to convert object key/value as a string int arr
function objToSQL(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob){
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)){
            // if string with spaces, add quotations
            if (typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single string separated by commas
    return arr.toString();
}

// Object for all SQL statement functions
var orm = {
    // selectAll()
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    },
    // insertOne()
    insertOne: function(table, cols, vals, cb){
        console.log(table,cols,vals);

        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    },
    // updateOne()
    updateOne: function(table, objColVals, condition, cb){
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSQL(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    },
    // deleteOne()
    deleteOne: function(table, condition, cb){
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    }
};

// Export ORM
module.export = orm;