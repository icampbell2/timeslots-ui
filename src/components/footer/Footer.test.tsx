import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Footer from './Footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should get year', () => {
  const footer: Footer = new Footer({});
  expect(footer.getYear()).toEqual(new Date().getFullYear());
});
