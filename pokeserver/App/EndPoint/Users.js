/**
 * Created by merlin on 13/02/17.
 */
const {Users} = require('../Database');

const signIn = (req, res) => {
  const login = req.body.login;
  const password = req.body.password;
  
  Users.findOne({ where: {login: login, password: password}})
  .then(user => res.json(user))
  .catch(err => res.json(err))
};

const signUp = (req, res) => {
  const login = req.body.login;
  const password = req.body.password;
  
  Users.findOne({ where: {login: login, password: password}})
  .then(user =>
  {
    if(user !== null)
    res.status(423);
    
    else {
      Users.create({login: login, password: password})
      .then(user => res.json(user))
      .catch(err => res.json(err));
    }
  });
};

module.exports = {signIn, signUp};