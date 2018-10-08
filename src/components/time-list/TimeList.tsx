import List from '@material-ui/core/List';
import * as React from 'react';
import ITimeSlot from '../../models/ITimeSlot';
import TimeListItem from '../time-list-item/TimeListItem';
import './TimeList.css';

/**
 * The time list component, used to represent a list of time slots.
 *
 * @author Ian Campbell
 */
class TimeList extends React.Component {

  /**
   * Render the component.
   *
   * @returns the rendered component
   */
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

  /**
   * Get an array of time slots.
   *
   * @returns an array of time slots, from military time hours 9 to 17 inclusive
   */
  public getTimeSlots(): ITimeSlot[] {
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
