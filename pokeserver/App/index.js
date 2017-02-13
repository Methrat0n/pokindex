const express = require('express');
const bodyParser = require('body-parser');

const {signIn, signUp} = require('./EndPoint/Users');
const sendStat = require('./EndPoint/Stats');
const sendTweet = require('./EndPoint/Tweet');
const {sendLikes, retrieveLikes} = require('./EndPoint/Likes');
const {sendBookmark, sendBookmarks, retrieveBookmark} = require('./EndPoint/Bookmarks');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/stats/',sendStat);
app.get('/tweet/:namePokemon/:nbTweet', sendTweet);
app.get('/like/:pokemonName/:userId', sendLikes);
app.get('/bookmark/:pokemonName/:userId', sendBookmark);
app.get('/bookmarks/:userId',sendBookmarks);

app.post('/like/:pokemonName/:userId',retrieveLikes);
app.post('/bookmark/:pokemonName/:userId', retrieveBookmark);
//Not great, I would prefer a get with body to user
//and a post to user, but the fetch API dont support that
app.post('/signUp/',signUp);
app.post('/signIn/',signIn);

app.listen(3000, function () {
  console.log('Back listening on port 3000')
});
