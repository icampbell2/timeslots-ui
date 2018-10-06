import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import './App.css';

import logo from './logo.svg';

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: '#fff',
      dark: '#002984',
      light: '#757ce8',
      main: '#3f50b5',
    },
    secondary: {
      contrastText: '#000',
      dark: '#ba000d',
      light: '#ff7961',
      main: '#f44336'
    },
  }
});
class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
