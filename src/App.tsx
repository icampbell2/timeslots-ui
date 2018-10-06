import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/about/About';
import Home from './pages/home/Home';

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
        <Router>
          <div id="app">
            <Header />
            <main>
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/home" component={Home} />
                <Route exact={true} path="/about" component={About} />
            </main>
            <Footer />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
