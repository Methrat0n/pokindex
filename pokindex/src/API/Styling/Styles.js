/**
 * Created by merlin on 02/02/17.
 */
import {red600, red400, red50} from 'material-ui/styles/colors';

const styles = {
  handCurser: {
    cursor:'pointer',
  },
  bookmarkTitle: {
    marginTop: 10,
    textAlign: 'center',
    color: red50
  },
  sideBar: {
    backgroundColor:red400,
  },
  pokemonName: {
    color: red600,
  },
  imageSize: {
    height: '50vh',
  },
  iconTitleBar: {
    marginRight: 24,
  },
  columnSearchBar :{
    marginTop : 40,
  },
  searchBar : {
    height: '3em',
    fontSize: '200%',
    border: 'none',
    margin: 4,
  },
  loading: {
    display: 'inline-block',
    marginLeft: '50%',
    marginTop: '10%',
  },
  loadingContainer: {
    position: 'relative',
  },
  column: {
    marginTop: 20,
  },
  largeIcon: {
    width: 120,
    height: 120,
    padding: 30,
  },
  iconButton: {
    padding: 30,
    fill: red600,
  },
};

export default styles;