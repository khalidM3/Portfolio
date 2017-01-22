'use strict';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.sendFIle('index.html', {root: './public'})
});
app.get('/about', function(req,res) {
  res.sendFile('index.html', {root: './public'})
})

app.listen(PORT, function() {
  console.log('The server has started on port '+ PORT);
})
