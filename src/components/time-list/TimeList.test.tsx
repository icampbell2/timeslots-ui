import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TimeList from './TimeList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TimeList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
