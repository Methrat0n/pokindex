/**
 * Created by merlin on 02/02/17.
 */
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red400, red600} from 'material-ui/styles/colors';

const theme = getMuiTheme({
  palette: {
    primary1Color: red400,
    primary2Color: red600,
  },
});

export default theme;