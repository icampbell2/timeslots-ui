import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as React from 'react';
import ITimeSlot from '../../models/ITimeSlot';
import ITimeSlotData from '../../models/ITimeSlotData';
import StringUtils from '../../util/StringUtils';
import TimeDataModal from '../time-data-modal/TimeDataModal';
import './TimeListItem.css';

interface ITimeListItemProps extends React.Props<ITimeSlot> {
  timeslot: ITimeSlot
}

class TimeListItem extends React.Component<ITimeListItemProps, any> {

  public static AM: string = "am";
  public static PM: string = "pm";
  private timeslot: ITimeSlot;

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

  public getValue(): string {
    return this.timeslot
      ? `${this.getTime(this.timeslot.start)} - ${this.getTime(this.timeslot.end)}`
      : '';
  }

  protected select(): void {
    this.setState({
      isSelected: true
    });
  }

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
