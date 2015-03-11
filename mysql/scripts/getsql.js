
//get the express module
var express = require('express');

//get the mysql module
var mysql = require('mysql');

//start the app
var app =  express();

//create a connection with mysql (variable include : host , user , password and database name)
var connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'root',
  password :  '',
  database : 'test',

});

connection.connect(function(err) {
 
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

});

//start the app 
app.get('/', function (req, res) {

  //write the query with callback function (err: the error , rows : the actual data , fields : NO CLUE(ask Adam))
  connection.query('SELECT * FROM new', function(err, rows, fields) {

    //if err show the error and break the function
    if (err) throw err;

      //set the header as text
      res.writeHead(200, {

        'Content-type': 'text/plain'

      }); 

     //for loop to go through all the rows in table new
     for (var i in rows) {
          
          //write the output as json using JSON.stringify( value, replacer, space )
          //value : The value to convert to a JSON string
          //replacer : NO CLUE(ask Adam)
          //space : Causes the resulting string to be pretty-printed
          
          res.write(JSON.stringify(rows , null, 4));

           //ending the response
           res.end();

        }
  });

});

//setup server using 
var server = app.listen(3000, function() {

  //get the host address
  var host = server.address().address

  //get the server port
  var port = server.address().port

  console.log('Magic happens at http://%s:%s', host, port)

});