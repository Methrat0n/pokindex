/**
 * Created by merlin on 07/02/17.
 */
const Sequelize = require('sequelize');
const sequelize = new Sequelize('pokindex', 'pokindexrw', 'pokindex',{
  host: "db",
  port: 5432,
  dialect: 'postgres',
});

const Users = sequelize.define('Users', {
  id_users : {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  login : {type: Sequelize.STRING,allowNull: false},
  password: {type: Sequelize.STRING, allowNull: false}
});

const Bookmarks = sequelize.define('Bookmarks', {
  id_bookmarks: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  pokemon_name: {type: Sequelize.STRING,allowNull: false},
  id_users: {type: Sequelize.INTEGER, references: {
    model: Users,
    key: 'id_users',
    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
  }},
});

const Likes = sequelize.define('Likes', {
  id_likes: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  do_like: {type: Sequelize.BOOLEAN,allowNull: false},
  do_dislike: {type: Sequelize.BOOLEAN,allowNull: false},
  pokemon_name: {type: Sequelize.STRING,allowNull: false},
  id_users: {type: Sequelize.INTEGER, references: {
    model: Users,
    key: 'id_users',
    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
  }},
});

//Create the tables if they dont exists
sequelize.sync().then(function() {
  Users.create({id_users: 0, login: 'merlin', password: 'yolo'});
});

module.exports = {Users, Bookmarks, Likes};
