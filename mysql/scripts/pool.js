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

//create a connection pool with mysql (variables included :connectionLimit  host , user , password and database name)
var pool  = mysql.createPool({

  connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password :  '',
  database : 'test',

});


//intiate the app and send index.html file as response
app.get('/', function(req, res) {

    res.sendFile(__dirname + '/views/index.html');

});

//handling the intial get request made with AJAX
app.get('/users', function (req, res) {

//grab a connection from pool 
pool.getConnection(function(err, connection){

       //get the connection ID  
      console.log('connected as id ' + connection.threadId);

//execute query on that pool
  connection.query('SELECT * FROM new', function(err, rows, fields) {
    if (err) throw err;
    
     for (var i in rows) {
        
      //wirte the response  
       res.write(JSON.stringify(rows));

       //end the response
         res.end();

        }

        //return the connection back to pool
        connection.release();

        //Do not call the connection here
     });
  });

});

//handling the AJAX post request
app.post('/users', function (req, res) {

//grab a connection from pool 
pool.getConnection(function(err, connection) {

    //get the connection ID  
   console.log('connected as id ' + connection.threadId);

   //get the user input using req.body rom body-parser
   var username = JSON.stringify(req.body.uname);
   var useremail = JSON.stringify(req.body.uemail);

   //make the query 
   connection.query('INSERT INTO new (uname, uemail) VALUES ('+connection.escape(username)+', '+connection.escape(useremail)+')',

        function (err, rows) {
            //if err show the error and break the function
            if (err) throw err;
            //send the insertID back to user res.send
            res.send('User added to database with ID: ' + rows.insertId);
        }
    );

        connection.release();
        //Do not put code here
  }); 

});

//terminate the pool
pool.end();

//setup server using 
var server = app.listen(3000, function() {

  //get the host address
  var host = server.address().address

  //get the server port
  var port = server.address().port

  console.log('Magic happens at http://%s:%s', host, port)

});