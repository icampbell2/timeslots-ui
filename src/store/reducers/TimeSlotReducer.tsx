import ITimeSlot from '../../models/ITimeSlot';

/**
 * Get an array of time slots.
 *
 * @returns an array of time slots, from military time hours 9 to 17 inclusive
 */
const TimeSlotReducer = (): ITimeSlot[] => {
    const timeslots: ITimeSlot[] = [];
    for (let i: number = 9, len: number = 5 + 12; i < len; i++) {
        timeslots.push({
            end: i + 1,
            start: i
        });
    }
    return timeslots;
}

export default TimeSlotReducer;
