import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import TimeSlotsStore from './store/TimeSlotsStore';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={TimeSlotsStore}>
      <App />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
