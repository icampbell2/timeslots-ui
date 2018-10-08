import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TimeSlotsStore from '../../store/TimeSlotsStore';
import Home from './Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={TimeSlotsStore}>
      <Home />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
