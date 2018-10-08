import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

/**
 * The header component, used to display the application name and navigation.
 *
 * @author Ian Campbell
 */
class Header extends React.Component {

  /**
   * Render the component.
   *
   * @returns the rendered component
   */
  public render() {
    return (
      <AppBar position="static" title="Time Slots">
        <Toolbar>
        <header id="header">
          <span id="header-title">Time Slots</span>
          <Link to="/home">
            <Button>Home</Button>
          </Link>
          <Link to="/about">
            <Button>About</Button>
          </Link>
        </header>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
