// src/features/specifyNumberOfEvents.test.js
import { render, within, waitFor } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  
  // Scenario 1: Show 32 events by default when no number is specified
  test('Show 32 events by default when no number is specified', ({ given, when, then }) => {
    let AppComponent;
    let eventElements;
  
    given('the user has not specified the number of events to display', () => {
      // No specific action needed for this step since the default behavior is what we are testing
    });
  
    when('the user opens the app', () => {
      // Render the App component
      AppComponent = render(<App />);
    });
  
    then('the app should display 32 upcoming events by default', async () => {
      // Wait for the event list to be populated
      await waitFor(() => {
        eventElements = within(AppComponent.container).queryAllByRole('listitem');
        expect(eventElements.length).toBe(32); // Expect the default number of events to be 32
      });
    });
});

  // Scenario 2: User can change the number of events displayed
  test('User can change the number of events displayed', async ({ given, when, then }) => {
    let AppComponent;
    let numberOfEventsInput;
    let eventElements;
  
    given('the user is viewing the list of events', async () => {
      // Render the App component
      AppComponent = render(<App />);
  
      // Wait for the event list to be populated
      await waitFor(() => {
        eventElements = within(AppComponent.container).queryAllByRole('listitem');
        expect(eventElements.length).toBe(32); // Ensure initial state has 32 events by default
      });
    });
  
    when('the user changes the number of events to display in the settings', async () => {
      const user = userEvent.setup();
  
      // Locate the number of events input field
      numberOfEventsInput = AppComponent.container.querySelector('#number-of-events-input');
      expect(numberOfEventsInput).toBeInTheDocument(); // Ensure the input is found
  
      // Clear the input and type a new value
      await user.clear(numberOfEventsInput);
      await user.type(numberOfEventsInput, '10');
  
      // Trigger a change event to update the number of events displayed
      await user.tab(); // or any action that triggers the update
    });
  
    then('the app should update the list to display the specified number of upcoming events', async () => {
      // Wait for the event list to be updated
      await waitFor(() => {
        eventElements = within(AppComponent.container).queryAllByRole('listitem');
        expect(eventElements.length).toBe(10); // Ensure the number of events is updated to the new value
      });
    });
  });
  
});
