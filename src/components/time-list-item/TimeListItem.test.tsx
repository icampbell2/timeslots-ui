import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ITimeSlot from '../../models/ITimeSlot';
import TimeListItem from './TimeListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const timeslot: ITimeSlot = {
    end: 10
    start: 9
  };
  ReactDOM.render(<TimeListItem timeslot={timeslot} /> div);
  ReactDOM.unmountComponentAtNode(div);
});
