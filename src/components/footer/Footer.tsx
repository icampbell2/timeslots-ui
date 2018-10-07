import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import * as React from 'react';
import './Footer.css';

import logo from '../../images/linkedin-logo.png';

class Footer extends React.Component {
  public render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <footer id="footer">
            <a href="https://www.linkedin.com/in/ianacampbell?trk=profile-badge" target="_blank">
              <IconButton className="column">
                <img src={logo} />
              </IconButton>
            </a>
            <h1 className="column" id="footer-title">&copy; {this.getYear()} Ian Campbell</h1>
            <a className="column" href="https://stackoverflow.com/users/1298685/ian-campbell" target="_blank">
              <IconButton className="column">
                <img src="https://stackoverflow.com/users/flair/1298685.png?theme=dark" width="208" height="58" alt="profile for Ian Campbell at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for Ian Campbell at Stack Overflow, Q&amp;A for professional and enthusiast programmers" />
              </IconButton>
            </a>
          </footer>
        </Toolbar>
      </AppBar>
    );
  }
  protected getYear(): number {
    return new Date().getFullYear();
  }
}

export default Footer;
