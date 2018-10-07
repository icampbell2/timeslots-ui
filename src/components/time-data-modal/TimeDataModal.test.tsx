import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ITimeSlotData from '../../models/ITimeSlotData';
import TimeDataModal from './TimeDataModal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const onDataEntry: (timeSlotData: ITimeSlotData) => void = (timeSlotData: ITimeSlotData): void;
  const timeRange: string = '';
  ReactDOM.render(<TimeDataModal timeRange={timeRange} onDataEntry={onDataEntry} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
