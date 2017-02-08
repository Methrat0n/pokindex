const express = require('express');
const bodyParser = require('body-parser');
const sendStat = require('./EndPoint/Stats');
const sendTweet = require('./EndPoint/Tweet');
const {sendLikes, retrieveLikes} = require('./EndPoint/Likes');
const {sendBookmark, sendBookmarks, retrieveBookmark} = require('./EndPoint/Bookmarks');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/stats/',sendStat);
app.get('/tweet/:namePokemon/:nbTweet', sendTweet);
app.get('/like/:pokemonName', sendLikes);
app.get('/bookmark/:pokemonName', sendBookmark);
app.get('/bookmarks/',sendBookmarks);

app.post('/like/:pokemonName/',retrieveLikes);
app.post('/bookmark/:pokemonName', retrieveBookmark);

app.listen(3000, function () {
  console.log('Back listening on port 3000')
});
