import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import PhoneNumber from 'awesome-phonenumber';
import * as React from 'react';
import ITimeSlotData from '../../models/ITimeSlotData';
import StringUtils from '../../util/StringUtils';

enum ButtonLabels {
  REGISTER = "Register",
  UNREGISTER = "Unregister",
  UPDATE = "Update"
}

interface ITimeListItemProps extends React.Props<any> {
  onDataEntry: (timeSlotData: ITimeSlotData) => void,
  timeRange: string
}

interface ITimeListItemState extends React.Props<any> {
  hasData: boolean,
  helperText: string,
  open: boolean,
  timeSlotData: ITimeSlotData
}

class TimeDataModal extends React.Component<ITimeListItemProps, ITimeListItemState> {

  private static INVALID_FORMAT: string = 'Invalid format! Please try again.';
  private onDataEntry: (timeSlotData: ITimeSlotData) => void;
  private timeRange: string;
  private buttonLabel: string;
  private currentTimeSlotData: ITimeSlotData;

  constructor(props: any) {
    super(props);
    this.handleUnregister = this.handleUnregister.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.onDataEntry = props.onDataEntry;
    this.timeRange = props.timeRange;
    this.buttonLabel = ButtonLabels.REGISTER;
    this.state = {
      hasData: false,
      helperText: '',
      open: false,
      timeSlotData: {
        name: '',
        phoneNumber: ''
      }
    };
    this.currentTimeSlotData = this.state.timeSlotData;
  }

  public render() {
    return (
      <div>
        {
          this.state.hasData
            ? <Button color="primary" onClick={this.handleUnregister}>{ButtonLabels.UNREGISTER}</Button>
            : null
        }
        <Button color="primary" onClick={this.handleOpen}>{this.buttonLabel}</Button>
        <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title">
          <DialogTitle className="form-dialog-title">Sign Up for the {this.timeRange} Time Slot</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your information to sign up:
            </DialogContentText>
            <TextField
              autoFocus={true}
              margin="dense"
              id="name"
              label="Name"
              type="test"
              fullWidth={true}
              value={this.state.timeSlotData.name}
              onChange={this.handleNameChange}/>
            <TextField
              margin="dense"
              id="phone"
              label="Phone Number"
              type="phone"
              fullWidth={true}
              value={this.state.timeSlotData.phoneNumber}
              helperText={this.state.helperText}
              onChange={this.handlePhoneNumberChange}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              OK
            </Button>
            <Button onClick={this.handleCancel} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  public getData(): ITimeSlotData {
    return this.state.timeSlotData;
  }

  protected handleNameChange(event: any): void {
    this.setState({
      open: this.state.open,
      timeSlotData: {
        name: event.target.value,
        phoneNumber: this.state.timeSlotData.phoneNumber
      }
    });
  }

  protected handlePhoneNumberChange(event: any): void {
    this.setState({
      helperText: '',
      open: this.state.open,
      timeSlotData: {
        name: this.state.timeSlotData.name,
        phoneNumber: event.target.value
      }
    });
  }

  protected handleUnregister(): void {
    this.buttonLabel = ButtonLabels.REGISTER;
    const timeSlotData: ITimeSlotData = {
      name: '',
      phoneNumber: ''
    };
    this.setState({
      hasData: false,
      open: false,
      timeSlotData
    });
    this.onDataEntry(timeSlotData);
  }

  protected handleOpen(): void {
    this.setState({ open: true });
  }

  protected handleClose(): void {
    if (!StringUtils.isBlank(this.state.timeSlotData.name)
        && !StringUtils.isBlank(this.state.timeSlotData.phoneNumber)) {
      if (!new PhoneNumber(this.state.timeSlotData.phoneNumber, 'US').isValid()) {
        this.setState({
          helperText: TimeDataModal.INVALID_FORMAT
        });
        return;
      }
      this.setState({
        hasData: true,
        helperText: '',
        open: false,
        timeSlotData: {
          name: this.state.timeSlotData.name.trim(),
          phoneNumber: this.state.timeSlotData.phoneNumber.trim()
        }
      });
      this.currentTimeSlotData = this.state.timeSlotData;
      this.buttonLabel = ButtonLabels.UPDATE;
      this.onDataEntry(this.state.timeSlotData);
    }
  }

  protected handleCancel(): void {
    this.setState({
      open: false,
      timeSlotData: this.currentTimeSlotData
    });
  }
}

export default TimeDataModal;