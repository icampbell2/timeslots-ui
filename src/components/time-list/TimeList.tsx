import List from '@material-ui/core/List';
import * as React from 'react';
import { connect } from 'react-redux';
import ITimeSlot from '../../models/ITimeSlot';
import TimeListItem from '../time-list-item/TimeListItem';
import './TimeList.css';

/**
 * The props input definition for the component.
 *
 * @author Ian Campbell
 */
interface ITimeListProps extends React.Props<ITimeSlot[]> {
  timeSlots: ITimeSlot[]
}

/**
 * The time list component, used to represent a list of time slots.
 *
 * @author Ian Campbell
 */
export class TimeList extends React.Component<ITimeListProps, any> {

  private timeSlots: ITimeSlot[];

  constructor(props: any) {
    super(props);
    this.timeSlots = props.timeSlots;
    this.getTimeListItems.bind(this);
  }

  /**
   * Render the component.
   *
   * @returns the rendered component
   */
  public render() {
    return (
      <div id="time-list">
        <List>
          {this.getTimeListItems()}
        </List>
      </div>
    );
  }

  public getTimeListItems(): JSX.Element[] {
    return this.timeSlots.map((timeSlot: ITimeSlot, index: number) => {
        return (
          <TimeListItem timeslot={timeSlot} key={index} />
        );
    });
  }
}

const mapStateToProps = (state: any): ITimeListProps => {
  return {
    timeSlots: state.timeSlots
  };
};
export default connect(mapStateToProps)(TimeList);
