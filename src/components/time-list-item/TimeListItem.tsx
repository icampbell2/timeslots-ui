import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as React from 'react';
import ITimeSlot from '../../models/ITimeSlot';
import ITimeSlotData from '../../models/ITimeSlotData';
import StringUtils from '../../util/StringUtils';
import TimeDataModal from '../time-data-modal/TimeDataModal';
import './TimeListItem.css';

/**
 * The props input definition for the component.
 *
 * @author Ian Campbell
 */
interface ITimeListItemProps extends React.Props<ITimeSlot> {
  timeslot: ITimeSlot
}

/**
 * The time list item, used to represent a time slot list item.
 *
 * @author Ian Campbell
 */
class TimeListItem extends React.Component<ITimeListItemProps, any> {

  public static AM: string = "am";
  public static PM: string = "pm";
  private timeslot: ITimeSlot;

  /**
   * Instantiate the component.
   *
   * @param props the input props passed to this component
   */
  constructor(props: { timeslot: ITimeSlot }) {
    super(props);
    this.onDataEntry = this.onDataEntry.bind(this);
    this.select = this.select.bind(this);
    this.timeslot = props.timeslot;
    this.state = {
      hasData: false,
      isSelected: false
    }
  }

  /**
   * Render the component.
   *
   * @returns the rendered component
   */
  public render() {
    return (
      <div className="time-list-item">
        <ListItem button={true} onClick={this.select} className={this.state.hasData ? 'has-data' : ''}>
          <TimeDataModal timeRange={this.getValue()} onDataEntry={this.onDataEntry} />
          <ListItemText primary={this.getValue()} />
        </ListItem>
      </div>
    );
  }

  /**
   * Get a display time in 12-hour clock format, from a military time hour.
   *
   * @param hour the military time hour to be formatted
   * @throws RangeError if the military time hour is not between 9 and 17 inclusive
   * @returns a display time in 12-hour clock format
   */
  public getTime(hour: number): string {
    if (hour < 9 || hour > 17) {
      throw new RangeError(`${hour} is out of range`);
    }
    if (hour === 12) {
      return `${hour} ${TimeListItem.PM}`;
    }
    return hour < 12
      ? `${hour} ${TimeListItem.AM}`
      : `${hour - 12} ${TimeListItem.PM}`;
  }

  /**
   * Get a time range to be displayed in the time list item.
   *
   * @returns a time range to be displayed
   */
  public getValue(): string {
    return this.timeslot
      ? `${this.getTime(this.timeslot.start)} - ${this.getTime(this.timeslot.end)}`
      : '';
  }

  /**
   * Used to handle an onClick event.
   */
  protected select(): void {
    this.setState({
      isSelected: true
    });
  }

  /**
   * Used to handle an onChange event from the child TimeDataModal component.
   *
   * @param timeSlotData the time slot data passed from the child TimeDataModal component onChange
   */
  protected onDataEntry(timeSlotData: ITimeSlotData): void {
    this.setState({
      hasData: timeSlotData
          && !StringUtils.isBlank(timeSlotData.name)
          && !StringUtils.isBlank(timeSlotData.phoneNumber),
      isSelected: false
    });
  }
}

export default TimeListItem;
