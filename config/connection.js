// MySQL Connection

var mysql = require("mysql");

var connection;

// For Heroku Deployment vs. Local MySQL Database
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root', // Add your password
        database : 'burgers_db' // Add your database
    });
}

// Export connection to use for ORM
module.exports = connection;
