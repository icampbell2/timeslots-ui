import { combineReducers, Reducer } from 'redux';
import TimeSlotReducer from './TimeSlotReducer';

/**
 * Get a reducer that combines all other reducers into a single object.
 *
 * @return a reducer that combines all other reducers into a single object
 */
const RootReducer: Reducer = combineReducers({
    timeSlots: TimeSlotReducer
});

export default RootReducer;
