/**
 * Created by merlin on 02/02/17.
 */
import React, { PureComponent } from 'react';

import {Row, Column} from 'react-foundation';
import {List, ListItem} from 'material-ui/List';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Tweet from 'react-tweet'

import pokindex from '../API/Pokindex';
import server  from '../API/Server';
import PockeFont from './Utils/PockeFont';

import styles from '../API/Styling/Styles';
import {red600} from 'material-ui/styles/colors';

class Pokemon extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      stats: null,
      tweets: null,
    };
  }
  
  componentWillMount() {
    
    const newState = Object.assign({},this.state);
    
    pokindex.getPokemon(this.props.params.name).then(pokemon => {
        newState.pokemon = pokemon;
      }).then(_ => {
  
      server.getTweets(newState.pokemon.name).then(tweets => {
        newState.tweets = tweets;
      }).then(_ => {
        
        server.getStats().then(stats => {
          newState.stats = stats;
      
          this.setState(newState);
        });
      });
    });
  };
  
  _correctNaming = (name) => {
    
    if(name === "hp")
      return "HP";
    
    const better = name[0].toUpperCase() + name.substring(1);
    let best  = better.replace("-"," ");
    if(best.indexOf(" ") > 0) {
      const spaceIndex = best.indexOf(" ")+1;
       best = best.substring(0, spaceIndex) +
        best[spaceIndex].toUpperCase() + best.substring(spaceIndex+1);
    }
    return best;
  };
  
  _getMax = (name) => {
    if(this.state.stats == null)
      return 100;
    
    const betterName = this._correctNaming(name);

    return parseInt(this.state.stats[betterName].max,10);
  };
  
  _getMin = (name) => {
    if(this.state.stats == null)
      return 0;
  
    const betterName = this._correctNaming(name);

    return parseInt(this.state.stats[betterName].min,10);
  };
  
  _getTweet = () => {
    if(this.state.tweets == null)
      return (<span></span>);

    const tweets = this.state.tweets.statuses.map((tweet,id) =>
      <Tweet key={id} data={tweet} />);
    return tweets;
  };
  
  render() {
    const pokemon = this.state.pokemon;
    //Handling the first render, TODO, make it better
    if(pokemon == null)
      return (<div></div>);

    return (
      <Row>
        <Column small={12} medium={9}>
          <Card style={styles.columnSearchBar}>
            <CardHeader
              title={<h3 style={styles.pokemonName}>{pokemon.name}</h3>}
              subtitle={"types: "+pokemon.types.map(parentType =>
                parentType.type.name+" ")}
              actAsExpander={false}
              showExpandableButton={false}
            />
            <CardText>
              <Row>
                <Column>
                  <Row>
                    <Column>
                      <PockeFont font={pokemon.sprites.front_default} />
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <IconButton tooltip="Like" iconStyle={styles.largeIcon}>
                        <FontIcon className="material-icons" color={red600}>thumb_up</FontIcon>
                      </IconButton>
                      <IconButton tooltip="Dislike" iconStyle={styles.largeIcon}>
                        <FontIcon className="material-icons" color={red600}>thumb_down</FontIcon>
                      </IconButton>
                      <IconButton tooltip="Dislike" style={styles.iconButton} iconStyle={styles.largeIcon}>
                        <FontIcon className="material-icons" color={red600}>bookmark_border</FontIcon>
                      </IconButton>
                    </Column>
                  </Row>
                </Column>
                <Column>
                  <Row upOnSmall={1} upOnMedium={2}>
                    {pokemon.stats.map((parentStat,id) =>
                      <Column key={id}>
                        <label>{parentStat.stat.name}
                          <LinearProgress mode="determinate"
                                          value={parentStat.base_stat}
                                          max={this._getMax(parentStat.stat.name)}
                                          min={this._getMin(parentStat.stat.name)}
                          />
                        </label>
                      </Column>
                    )}
                  </Row>
                </Column>
              </Row>
            </CardText>
          </Card>
          
        </Column>
        <Column small={12} medium={3}>
          <Card style={styles.columnSearchBar}>
            <CardHeader
              title={<h5 style={styles.pokemonName}>{"About "+pokemon.name}</h5>}
              actAsExpander={false}
              showExpandableButton={false}
            />
            <CardText>
              <List>
                <ListItem disabled>
                  {this._getTweet()}
                </ListItem>
              </List>
            </CardText>
          </Card>
        </Column>
      </Row>
    )
  }
}

export default Pokemon;