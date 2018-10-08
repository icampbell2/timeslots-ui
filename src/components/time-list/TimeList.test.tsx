import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ITimeSlot from '../../models/ITimeSlot';
import TimeSlotReducer from '../../store/reducers/TimeSlotReducer';
import { TimeList } from './TimeList';

const timeSlots: ITimeSlot[] = TimeSlotReducer();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TimeList timeSlots={timeSlots} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should get time list items', () => {
  const target: TimeList = new TimeList({ timeSlots });
  expect(target.getTimeListItems().length).toEqual(timeSlots.length);
});
