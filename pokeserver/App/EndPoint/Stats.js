/**
 * Created by merlin on 05/02/17.
 */
const csv = require('csv-parser');
const fs = require('fs');

//Will launch respond to a request
const sendStat = function (req,res) {
  let stats = {};
  let pokemon_stats = [];
  let stat_names = [];
  let language_names = [];

  //Do the calculations and save it in stats
  const _addToStats = function(statName, statValue) {
    let currentStat = {
      min: 10000000,
      max: 0,
      total: 0,
      nbInfo: 0,
    };
    //If the state already contains an object for this stat
    if(typeof stats[statName] !== 'undefined')
      currentStat = stats[statName];
    
    if(currentStat.min > statValue)
      currentStat.min = statValue;
    
    if(currentStat.max < statValue)
      currentStat.max = statValue;
    
    currentStat.total+= statValue;
    currentStat.nbInfo++;
    
    stats[statName] = currentStat;
    return stats;
  };
  
  fs.createReadStream('./data/pokemon_stats.csv')
    .pipe(csv())
    .on('data',function(data) {
      pokemon_stats.push(data);
    }).on('end',function () {
    fs.createReadStream('./data/stat_names.csv')
      .pipe(csv())
      .on('data', function (stat_name) {
        for(let index = 0; index < pokemon_stats.length; index++) {
          const pokemon = pokemon_stats[index];
          if (stat_name.stat_id == pokemon.stat_id && stat_names.indexOf(stat_name) < 0) {//Join only stat that a Pokemon has
            stat_names.push(stat_name);
          }
        }
      }).on('end', function() {
      fs.createReadStream('./data/language_names.csv')
        .pipe(csv())
        .on('data', function (lang_name) {
          
          for(let index = 0; index < stat_names.length; index++) {
            const stat_name = stat_names[index];
            if (lang_name.local_language_id == stat_name.local_language_id && //Join
              lang_name.name == 'English' && language_names.indexOf(lang_name) < 0) {        //Where lang == english
              language_names.push(lang_name);
            }
          }
        }).on('end', function() {
        for(let i = 0; i < language_names.length; i++)
          for (let j = 0; j < stat_names.length; j++)
            for (let k = 0; k < pokemon_stats.length; k++)
              if (language_names[i].local_language_id == stat_names[j].local_language_id
                && stat_names[j].stat_id == pokemon_stats[k].stat_id)
                _addToStats(stat_names[j].name, pokemon_stats[k].base_stat);
        
        res.json(stats); //Finaly launch the response
      });
    });
  });
};

module.exports = sendStat;