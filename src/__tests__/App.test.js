// src/__tests__/App.test.js
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders NumberOfEvents component', () => {
  render(<App />);
  
  // Wait for the component to be rendered
  // Check if the NumberOfEvents component is rendered
  const numberOfEventsElement = screen.getByLabelText(/Number of Events:/i);
  expect(numberOfEventsElement).toBeInTheDocument();
});
