import { createStore, Store } from 'redux';
import RootReducer from './reducers/RootReducer';

/**
 * The redux store for the application, for all reducers.
 */
const TimeSlotsStore: Store = createStore(RootReducer);

export default TimeSlotsStore;
