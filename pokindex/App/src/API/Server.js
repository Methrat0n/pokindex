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
  
  getTweets(pokemonName, nbTweet) {
    return  fetch(`/tweet/`+pokemonName+"/"+nbTweet, {accept: 'application/json'})
      .then(this._checkStatus)
      .then(this._parseJSON);
  };
  
  getLikes(pokemonName, user) {
    return fetch('/like/'+pokemonName+'/'+user.id_users, {accept: 'application/json'})
      .then(this._checkStatus)
      .then(this._parseJSON);
  }
  
  setLikes(pokemonName, likes, user) {
    fetch('/like/'+pokemonName+'/'+user.id_users, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(likes),
    });
  }
  
  getBookmark(pokemonName, user) {
    return fetch('/bookmark/'+pokemonName+'/'+user.id_users, {accept: 'application/json'})
      .then(this._checkStatus)
      .then(this._parseJSON);
  }
  
  getBookmarks(user) {
    return fetch('/bookmarks/'+user.id_users, {accept: 'application/json'})
      .then(this._checkStatus)
      .then(this._parseJSON);
  }
  
  setBookmark(pokemonName, bookmark, user) {
    fetch('/bookmark/'+pokemonName+'/'+user.id_users, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(bookmark),
    });
  }
  
  signIn(logs) {
    const login = logs.signText;
    const password = logs.pwdText;
    
    return fetch('/signIn/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({login: login, password:password}),
    })
    .then(this._checkStatus)
    .then(this._parseJSON);
  }
  
  signUp(logs) {
    const login = logs.signText;
    const password = logs.pwdText;
  
    return fetch('/signUp/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({login: login, password:password}),
    })
      .then(this._checkStatus)
      .then(this._parseJSON);
  }
  
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