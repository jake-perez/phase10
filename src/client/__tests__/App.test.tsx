import { render } from '@testing-library/react';
import React from 'react';
import App from '../components/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Phase 10 Game/i);
  expect(linkElement.innerHTML).toEqual('Phase 10 Game');
});
