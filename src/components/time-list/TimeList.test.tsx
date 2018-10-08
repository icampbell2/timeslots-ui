import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ITimeSlot from '../../models/ITimeSlot';
import TimeList from './TimeList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TimeList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should get time slots', () => {
  const target: TimeList = new TimeList({});
  const timeSlots: ITimeSlot[] = target.getTimeSlots();
  let hour: number = 9;
  for (const timeSlot of timeSlots) {
    expect(timeSlot.start).toEqual(hour);
    expect(timeSlot.end).toEqual(++hour);
  }
  const lastTimeSlot: ITimeSlot = timeSlots[timeSlots.length - 1];
  expect(lastTimeSlot.start).toEqual(4 + 12);
  expect(lastTimeSlot.end).toEqual(lastTimeSlot.start + 1);
});
