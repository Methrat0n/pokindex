/**
 * Created by merlin on 06/02/17.
 */
import React, { PureComponent } from 'react';
import Tweet from 'react-tweet'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

import server  from '../../API/Server';
import Loading from '../Utils/Loading';
import styles from '../../API/Styling/Styles';

class Tweets extends PureComponent {
  constructor() {
    super();
    this.state = {
      tweets: null,
    }
  }
  
  componentWillMount() {
    server.getTweets(this.props.pokemonName, this.props.nbTweet).then(tweets => {
      this.setState({tweets: tweets});
    });
  }
  
  render() {
    return (
    <Card style={styles.columnSearchBar}>
      <CardHeader
        title={<h5 style={styles.pokemonName}>{"About "+this.props.pokemonName}</h5>}
        actAsExpander={false}
        showExpandableButton={false}
      />
      <CardText>
        <List>
          <ListItem disabled>
            {this.state.tweets == null ?
              <Loading /> :
              this.state.tweets.statuses.map((tweet,id) =>
                <Tweet key={id} data={tweet} />)
            }
          </ListItem>
        </List>
      </CardText>
    </Card>
    )
  }
}

Tweets.propTypes = {
  pokemonName: React.PropTypes.string.isRequired,
  nbTweet: React.PropTypes.number.isRequired,
};

export default Tweets;