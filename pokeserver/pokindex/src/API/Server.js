/**
 * Created by merlin on 05/02/17.
 */
class Server {
  getStats(){
    const promise = fetch(`/stats/`, {accept: 'application/json'})
      .then(this._checkStatus)
      .then(this._parseJSON);
    
    return promise;
  };
  
  getTweets(pokemonName) {
    return  fetch(`/tweet/`+pokemonName, {accept: 'application/json'})
      .then(this._checkStatus)
      .then(this._parseJSON);
  };
  
  _checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error); // eslint-disable-line no-console
      throw error;
    }
  };
  
  _parseJSON = (response) => {
    return response.json();
  };
}

const server = new Server();
export default server;