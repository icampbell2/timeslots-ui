import * as React from 'react';
import TimeList from '../../components/time-list/TimeList';
import './Home.css';

/**
 * The home page component.
 *
 * @author Ian Campbell
 */
class Home extends React.Component {
  public render() {
    return (
      <div className="home">
        <TimeList />
      </div>
    );
  }
}

export default Home;
