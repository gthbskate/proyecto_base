import {createMuiTheme} from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: teal[50],
            main: teal[500],
            dark: teal[900],
            contrastText: teal[50],
        }
    },
    typography: {
        h6: {
          fontSize: 16,
        },
        body1: {
          fontWeight: 500,
        },
        button: {
            fontStyle: 'bold',
        },
    }
})

export default theme;