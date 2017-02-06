/**
 * Created by merlin on 06/02/17.
 */
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: 'rtDA8UyAcsDi36V1qOAgY9J1g',
  consumer_secret: 'ElcKpe0LGnKgleYytjgxfi7z9wkzZt2mz7K5ono2ShlDGhFCjZ',
  access_token_key: '952174592-ePP2SMvOa7RMG1igNgGIbyutZBxM9uoms8zvzAwN',
  access_token_secret: 'euLl4jxrLre7lA6srB9roiT6hJgQFlxTsVLsFh5U9YDvd',
});

const sendTweet = function(req, res) {
  client.get('search/tweets',
    {q: req.params.namePokemon, lang:'en', count:req.params.nbTweet},
      function(error, tweets, response) {
    
    res.json(tweets);
  })
}

module.exports = sendTweet;