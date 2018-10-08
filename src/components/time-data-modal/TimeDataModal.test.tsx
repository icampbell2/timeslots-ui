import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ITimeSlotData from '../../models/ITimeSlotData';
import TimeDataModal from './TimeDataModal';

const onDataEntry: (timeSlotData: ITimeSlotData) => void = (timeSlotData: ITimeSlotData): void;
const timeRange: string = '';
const data: ITimeSlotData = {
  name: 'me',
  phoneNumber: '1234567890'
};
const target: TimeDataModal = new TimeDataModal({ onDataEntry, timeRange });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TimeDataModal timeRange={timeRange} onDataEntry={onDataEntry} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should get data', () => {
  (target.state as any).timeSlotData = data;
  expect(target.getData()).toEqual(data);
});
