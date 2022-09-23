const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mocktail"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to SQL DB!");
  con.query("SELECT * FROM items", function (err, result, fields) {
    if (err) throw err;
  });
});

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {});
});
app.get('/shop', (req, res) => {
  result = con.query("SELECT name, price, aFree, sFree, avabAmount, img FROM items WHERE avabAmount>0", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.render('shop', {
      items: result,
    });
  });
});
app.get('/cart', (req, res) => {
  res.render('cart', {});
});
app.get('/admin', (req, res) => {
  result = con.query("SELECT * FROM items", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.render('admin', {
      items: result,
    });
  });
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port: ${server.address().port}`);
});
