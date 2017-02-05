var express = require('express');
var stats   = require('./Stats');
var app = express();

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'rtDA8UyAcsDi36V1qOAgY9J1g',
  consumer_secret: 'ElcKpe0LGnKgleYytjgxfi7z9wkzZt2mz7K5ono2ShlDGhFCjZ',
  access_token_key: '952174592-ePP2SMvOa7RMG1igNgGIbyutZBxM9uoms8zvzAwN',
  access_token_secret: 'euLl4jxrLre7lA6srB9roiT6hJgQFlxTsVLsFh5U9YDvd',
});

app.get('/stats/', function (req, res) {
  res.json(stats);
});

app.get('/tweet/:namePokemon', function (req, res) {
  client.get('search/tweets', {q: req.params.namePokemon}, function(error, tweets, response) {
    res.json(tweets);
  });
});

app.listen(3010, function () {
  console.log('Back listening on port 3010')
});
