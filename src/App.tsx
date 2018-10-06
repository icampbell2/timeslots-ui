import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/about/About';
import Home from './pages/home/Home';

class App extends React.Component {
  public render() {
    return (
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
    );
  }
}

export default App;
