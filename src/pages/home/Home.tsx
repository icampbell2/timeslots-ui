import * as React from 'react';
import TimeList from '../../components/time-list/TimeList';
import './Home.css';

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
