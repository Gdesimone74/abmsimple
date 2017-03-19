const express = require('express');
const bodyParser= require('body-parser')
const app = express();


app.use(bodyParser.urlencoded({extended: true}))

app.listen(3100, function() {
  console.log('listening on 3000')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'asdf1234',
  database : 'neurona'
});




//connection.connect();

//connection.query('SELECT * from usuarios', function(err, rows, fields) {
  //if (!err)
    //console.log('The solution is: ', rows);
//  else
  //  console.log('Error while performing Query.');
//});

//connection.end();
var asdf="'"

app.post('/quotes', (req, res) => {
  console.log(req.body)

var conectar="INSERT INTO prueba(valor1, valor2) VALUES ('"+req.body.name+"','" +req.body.quote+"')"
console.log(asdf)
  connection.connect();

  connection.query(conectar, function(err, rows, fields) {
    if (!err)
      console.log('The solution is: ', rows);
    else
      console.log('Error while performing Query.');
  });

  connection.end();

})
