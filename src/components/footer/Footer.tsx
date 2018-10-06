import AppBar from '@material-ui/core/AppBar';
import * as React from 'react';
import './Footer.css';

class Footer extends React.Component {
  public render() {
    return (
      <AppBar position="static">
        <footer id="footer">
          <h1 id="footer-title">&copy; {this.getYear()} Ian Campbell</h1>
        </footer>
      </AppBar>
    );
  }
  protected getYear(): number {
    return new Date().getFullYear();
  }
}

export default Footer;
