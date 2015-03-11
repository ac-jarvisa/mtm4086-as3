//get the express module
var express = require('express');

//get the mysql module
var mysql = require('mysql');

//start the app
var app =  express();
//get the bodParser module require to populate req.body with (among other things) the value of the POST parameters
var bodyParser = require('body-parser');

//extend the app using body parser for parsing application/json
app.use(bodyParser.json());

//create a connection with mysql (variable include : host , user , password and database name)
var connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'root',
  password :  '',
  database : 'test',

});


//intiate the app and send index.html file as response
app.get('/', function(req, res) {

    res.sendFile(__dirname + '/views/index.html');

});

//app.post handles post request in express
app.post('/senddata', function (req, res) {

    //req.body - from bodyParser extension gets the post parameters
    
    //getting username
    var username = req.body.uname;

    //getting email
    var useremail = req.body.uemail;

    //Escaping query values tom prevent sql injections
    //mysql.escape(), connection.escape() or pool.escape() methods
    //invoking the insert query
    connection.query('INSERT INTO new (uname, uemail) VALUES ("'+connection.escape(username)+'", "'+connection.escape(useremail)+'")',
        
        function (err, result) {
          
            if (err) throw err;

            //getting the insert id using result.insertId ans sending it back to the server
            res.send('User added to database with ID: ' + result.insertId);

            //ending the response
            res.end();
        }
    );
});

//setup server using 
var server = app.listen(3000, function() {

  //get the host address
  var host = server.address().address

  //get the server port
  var port = server.address().port

  console.log('Magic happens at http://%s:%s', host, port)

});