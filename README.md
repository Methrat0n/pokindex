#Pokindex

This repo contains a web App, the server that goes with it and the database that it need.

But, what's pokindex ? Can i eat it ?
Like the name said it's a pokedex like application, enabling you to search for a pokemon, or more, and to view it stats and capacities.

Actualy, there is no voice in it but feel free to fork me and to add it, I'll be glad to accept your pull request

####How to Install ?

Just clone that repo, then you can
~~~bash
docker-compose up
~~~

The first run can show error, for example the database can take time to init so the connection to it may be refuse. Do no be affraid! It's normal.

The application will work anyway, but it will take time to launch.
When you see a message saying that front server is running and ready, then go to 'localhost:3000'.

That's it, the application work.
One last thing, you need to be connected to the internet for the search to work. Seem's obvious, bu hey.

#### What's under the hound ?

#####Front
Let's begin by the front. It's a [nodeJs](https://nodejs.org/en/) server only meant to sent the result of the webpack compilation.

The compilation and all the complicated stuff is handle by [create-react-app](https://github.com/facebookincubator/create-react-app), which generate a very simple application that we can extends after. The name of that part in the package.json is react-script.

Like the name before can let you think, we use [React](https://facebook.github.io/react/) as view framework.
We also use [redux](http://redux.js.org/) to store the state of the application, [react-router](https://github.com/ReactTraining/react-router/tree/master/docs) to handle the routing in the client-side.

The Design is based on [material-ui](http://www.material-ui.com/) and organise with [Foundation](http://foundation.zurb.com/)'s grid system (implement on flex-box today), using [react-foundation](https://react.foundation/)

Sooner, we said that you need internet to the application to work, localy. That may seems a bit unfair, but actualy their are two good reason for that, and another realy good one.

First : We use the [Pokeapi](http://pokeapi.co/) to get the information about the pokemon. You may wonder why we dont just grab all their things and build our own. Mainly, that won't work, because the information in their system is evolving and change a bit each day. We could create a copy each day, but that's a lot of work for noting, see my third part here.
Ha, and it's no fair, their work, their system, not mine.

Second : We grab tweet about the pokemon you're watching, you realy wanna see last year tweet ? So use internet.

Thrid, and most important one : Why do you ever want to use a computer without internet ? Serioulsy.

#####Back

The back is also a [nodeJs](https://nodejs.org/en/) server, but it's work is different. It offer [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) endpoint to the client to request, so that we can actualy access data, like the database, the users and stuff.

The Back also create the database table on the first run, allowing you to use the app as soon as possible. For that, and for the connection we use the [Sequelize ORM](http://docs.sequelizejs.com/en/v3/)

 Their isn't a much to say about the back, it grab data, make some calculation and then serve it in a REST way.
 
#####Database
 
 The database is a [postegreSQL](https://www.postgresql.org/) database, storing the user's login, the user's likes and bookmark.
 
 It doesn't realy do anything, except storing data. That's actualy a part of why it's just an image.
 
#### Thanks

[bashrc](https://github.com/bachrc) for it's review
[julienjpk](https://github.com/julienjpk) For the compliment

#### What now ?

A [redis](https://redis.io/) cache would be great, and store meta in [Grafite](https://graphiteapp.org/), viewing it with [Grafana](http://grafana.org/) would be a great point