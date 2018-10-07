import List from '@material-ui/core/List';
import * as React from 'react';
import ITimeSlot from '../../models/ITimeSlot';
import TimeListItem from '../time-list-item/TimeListItem';
import './TimeList.css';

class TimeList extends React.Component {

  public render() {
    return (
      <div id="time-list">
        <List>
          {
            this.getTimeSlots().map((timeslot: ITimeSlot, index: number) => {
              return (
                <TimeListItem timeslot={timeslot} key={index} />
              );
            })
          }
        </List>
      </div>
    );
  }

  protected getTimeSlots(): ITimeSlot[] {
    const timeslots: ITimeSlot[] = [];
    for (let i: number = 9, len: number = 5 + 12; i < len; i++) {
      timeslots.push({
        end: i + 1,
        start: i
      });
    }
    return timeslots;
  }
}

export default TimeList;
