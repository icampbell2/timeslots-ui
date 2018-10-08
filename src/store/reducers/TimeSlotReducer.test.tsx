import ITimeSlot from '../../models/ITimeSlot';
import TimeSlotReducer from './TimeSlotReducer';

it('should get a time slot list', () => {
  const timeSlots: ITimeSlot[] = TimeSlotReducer();
  let hour: number = 9;
  for (const timeSlot of timeSlots) {
    expect(timeSlot.start).toEqual(hour);
    expect(timeSlot.end).toEqual(++hour);
  }
  const lastTimeSlot: ITimeSlot = timeSlots[timeSlots.length - 1];
  expect(lastTimeSlot.start).toEqual(4 + 12);
  expect(lastTimeSlot.end).toEqual(lastTimeSlot.start + 1);
});
