/**
 * Created by merlin on 06/02/17.
 */
const idUser = 1;

const {Likes} = require('../Database');

const sendLikes = function (req, rep) {

  Likes.findOne({where: {pokemon_name: req.params.pokemonName}}).then(likes => {

    if(typeof likes === 'undefined' || likes === null) {
      const defaultLikes = {
        like: false,
        dislike: false
      };
      rep.json(defaultLikes);
    }
    else
    {
      const pokemonLikes = likes.dataValues;
      const likesToReturn = {
        like: pokemonLikes.do_like,
        dislike: pokemonLikes.do_dislike
      };
      rep.json(likesToReturn);
    }
  });
};

const retrieveLikes = function (req, rep) {
  const like = req.body.like;
  const dislike = req.body.dislike;
  const pokemonName = req.params.pokemonName;
  
  Likes.findOne({where : {pokemon_name: pokemonName, id_users:idUser}})
    .then(likes => {
      
      //We receive informations. If the likes object doesn't exist we create it
      //Or we modify it
      if(typeof likes === 'undefined' || likes === null)
        Likes.create({
          do_like: like,
          do_dislike: dislike,
          pokemon_name: pokemonName,
          id_users: idUser
        });
      
      else {
        likes.update({
          do_like: like,
          do_dislike: dislike,
        })
      }
    });
  
  rep.sendStatus(200);
};

module.exports = {sendLikes,retrieveLikes};