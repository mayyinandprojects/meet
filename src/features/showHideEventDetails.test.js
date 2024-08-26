import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {

    test('Event elements are collapsed by default.', ({ given, when, then }) => {
        let AppComponent;
        given('the user is viewing the list of events', () => {
            AppComponent = render(<App />);

        });

        when('the events are displayed', () => {
            // Placeholder for step implementation
            // Here we would ideally wait for the events to be displayed
            // This could involve waiting for the fetch to complete
            // For simplicity, assuming events are displayed by the time the render completes
        });

        then('each event element should be collapsed by default, showing only essential information.', () => {
      // Get the event list container
      const EventListDOM = AppComponent.container.querySelector('#event-list');

      // Query all event elements within the list
      const eventElements = within(EventListDOM).queryAllByRole('listitem');

      // Ensure each event element does NOT show the details section by default
      eventElements.forEach(eventElement => {
        // Ensure the "event-details" div is not present by default
        expect(eventElement.querySelector('.event-details')).not.toBeInTheDocument();

        // Ensure the description is not visible by default
        expect(within(eventElement).queryByText('No description available')).not.toBeInTheDocument();

         // Ensure the "Show details" button is present by default
         expect(within(eventElement).queryByText('Show details')).toBeInTheDocument();
        });
    });

    test('Expand an event to see details.', ({ given, when, then }) => {
        let AppComponent;
        let eventElements;
    
        given('the user is viewing the list of events', async () => {
          // Render the App component
          AppComponent = render(<App />);
    
          // Wait for the event list to be populated
          await waitFor(() => {
            eventElements = within(AppComponent.container).queryAllByRole('listitem');
            expect(eventElements.length).toBeGreaterThan(0); // Ensure we have events rendered
          });
        });
    
        when('the user clicks on an event element', async () => {
          const user = userEvent.setup();
    
          // Locate the "Show details" button of the first event and click it
          const firstEvent = eventElements[0]; // Get the first event element
          const showDetailsButton = within(firstEvent).getByText('Show details'); // Find the "Show details" button within the first event
          await user.click(showDetailsButton); // Simulate a click on the "Show details" button
        });
    
        then('the event should expand to display detailed information about the event.', () => {
          // Verify that the event details are displayed
          const firstEvent = eventElements[0]; // Get the first event element
          expect(within(firstEvent).queryByTestId('event-details')).toBeInTheDocument();
        });
      });

      test('Collapse an event to hide details.', ({ given, when, then }) => {
        let AppComponent;
        let eventElements;
        let firstEvent;
    
        given('the user has expanded an event element to view details', async () => {
          // Render the App component
          AppComponent = render(<App />);
    
          // Wait for the event list to be populated
          await waitFor(() => {
            eventElements = within(AppComponent.container).queryAllByRole('listitem');
            expect(eventElements.length).toBeGreaterThan(0); // Ensure we have events rendered
          });
    
          firstEvent = eventElements[0]; // Select the first event element
    
          // Simulate clicking the "Show details" button to expand the event
          const user = userEvent.setup();
          const showDetailsButton = within(firstEvent).getByText('Show details');
          await user.click(showDetailsButton);
    
          // Verify that the event details are now visible
          expect(within(firstEvent).queryByTestId('event-details')).toBeInTheDocument();
        });
    
        when('the user clicks again on the expanded event element', async () => {
          const user = userEvent.setup();
    
          // Simulate clicking the "Hide details" button to collapse the event
          const hideDetailsButton = within(firstEvent).getByText('Hide details');
          await user.click(hideDetailsButton);
        });
    
        then('the event should collapse to hide the detailed information.', () => {
          // Verify that the event details are now hidden
          expect(within(firstEvent).queryByTestId('event-details')).not.toBeInTheDocument();
        });
      });

});
});