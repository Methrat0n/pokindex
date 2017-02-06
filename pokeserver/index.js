const express = require('express');
var bodyParser = require('body-parser')
const sendStat = require('./Stats');
const sendTweet = require('./Tweet');
const {sendLikes, retrieveLikes} = require('./Likes');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/stats/',sendStat);
app.get('/tweet/:namePokemon/:nbTweet', sendTweet);
app.get('/like/:pokemonName', sendLikes);

app.post('/like/:pokemonName/',retrieveLikes);

app.listen(3001, function () {
  console.log('Back listening on port 3001')
});
