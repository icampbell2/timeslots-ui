import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ITimeSlot from '../../models/ITimeSlot';
import TimeListItem from './TimeListItem';

const timeslot: ITimeSlot = {
  end: 10,
  start: 9
};
const target: TimeListItem = new TimeListItem({ timeslot });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TimeListItem timeslot={timeslot} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should get time', () => {
  let hour: number = 8;
  expect(() => {
    target.getTime(hour);
  }).toThrow(new RangeError(`${hour} is out of range`));
  hour = 18;
  expect(() => {
    target.getTime(hour);
  }).toThrow(new RangeError(`${hour} is out of range`));
  hour = 9;
  for (const end: number = 17; hour <= end; hour++) {
    if (hour < 12) {
      expect(target.getTime(hour)).toEqual(`${hour} ${TimeListItem.AM}`);
    } else if (hour === 12) {
      expect(target.getTime(hour)).toEqual(`${hour} ${TimeListItem.PM}`);
    } else {
      expect(target.getTime(hour)).toEqual(`${hour - 12} ${TimeListItem.PM}`);
    }
  }
});

it('should get value', () => {
  expect(target.getValue()).toEqual(
      `${timeslot.start} ${TimeListItem.AM} - ${timeslot.end} ${TimeListItem.AM}`);
});
