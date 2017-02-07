/**
 * Created by merlin on 06/02/17.
 */

const inMemory = {
  like:false,
  dislike:false,
};

const sendLikes = function (req, rep) {
  rep.json(inMemory);
};

const retrieveLikes = function (req, rep) {
  inMemory.like = req.body.like;
  inMemory.dislike = req.body.dislike;
  
  rep.sendStatus(200);
};

module.exports = {sendLikes,retrieveLikes};