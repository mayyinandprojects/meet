// src/__tests__/NumberOfEvents.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

  test('renders NumberOfEvents component', () => {
    render(<NumberOfEvents currentNOE={32} setCurrentNOE={() => {}} setErrorAlert={() => {}} />);
    
    const currentNOEElement = screen.getByLabelText(/Number of Events:/i);
    expect(currentNOEElement).toBeInTheDocument();
  });

  test('renders with default value of 32', () => {
    render(<NumberOfEvents currentNOE={32} setCurrentNOE={() => {}} setErrorAlert={() => {}} />);
    
    const numberInput = screen.getByLabelText(/Number of Events:/i);
    expect(numberInput.value).toBe('32');
  });

  test("updates the textbox's value when user types in it", async () => {
    const handleNumberOfEventsChange = jest.fn();
    render(<NumberOfEvents currentNOE={32} setCurrentNOE={handleNumberOfEventsChange} setErrorAlert={() => {}} />);

    const numberInput = screen.getByLabelText(/Number of Events:/i);
    
    // Simulate typing: backspace twice to remove "32", then type "10"
    await userEvent.type(numberInput, '{backspace}{backspace}10');

    // Ensure the input value is updated to "10"
    expect(numberInput.value).toBe('10');
  });

  
});
