'use strict';
const express = require('express');
const app = express();
const requestProxy = require('express-request-proxy')
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.sendFIle('index.html', {root: './public'})
});
app.get('/projects', function(req,res) {
  res.sendFile('index.html', {root: './public'})
})
app.get('/about', function(req,res) {
  res.sendFile('index.html', {root: './public'})
})
app.get('/github/*', proxyGithub)

function proxyGithub (req, res) {
  (requestProxy({
    url: `https://api.github.com/${req.params[0]}`,
    headers:{ Authorization:`token ${process.env.GITHUBTOKEN}`}
  }))(req, res)
}


app.listen(PORT, function() {
  console.log('The server has started on port '+ PORT);
})
