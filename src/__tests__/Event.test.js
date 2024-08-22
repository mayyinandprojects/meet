//Event.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Event from '../components/Event';

const mockEvent = {
  id: "4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",
  summary: "Learn JavaScript",
  location: "London, UK",
  start: {
    dateTime: "2020-05-19T16:00:00+02:00",
    timeZone: "Europe/Berlin",
  },
  description: "Learn the basics of JavaScript and how it powers the web.",
};

describe('<Event /> component', () => {
  let EventComponent;

  beforeEach(() => {
    EventComponent = render(<Event event={mockEvent} />);
  });

  test('renders event title correctly', () => {
    expect(EventComponent.queryByText(mockEvent.summary)).toBeInTheDocument();
  });

  test('renders event start time correctly', () => {
    const eventTime = new Date(mockEvent.start.dateTime).toLocaleString();
    expect(EventComponent.queryByText(eventTime)).toBeInTheDocument();
  });

  test('renders event location correctly', () => {
    expect(EventComponent.queryByText(mockEvent.location)).toBeInTheDocument();
  });

  test('renders "Show details" button initially', () => {
    expect(EventComponent.queryByText('Show details')).toBeInTheDocument();
  });

  test('renders fallback text when event start time is not available', () => {
    const eventWithoutDateTime = {
      ...mockEvent,
      start: {}, // Simulating missing dateTime
    };
    const { getByText } = render(<Event event={eventWithoutDateTime} />);
    expect(getByText('Start time not available')).toBeInTheDocument();
  });
  

});

describe('<Event /> component expanded view', () => {
  test('displays event description when "Show details" is clicked', () => {
    const { getByText } = render(<Event event={mockEvent} />);
    
    // Click the "Show details" button
    fireEvent.click(getByText('Show details'));

    // Check that the description is shown
    expect(getByText(mockEvent.description)).toBeInTheDocument();

    // Check that the button text changes to "Hide details"
    expect(getByText('Hide details')).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    const { queryByText } = render(<Event event={mockEvent} />);
    expect(queryByText(mockEvent.description)).not.toBeInTheDocument();
    expect(queryByText('Show details')).toBeInTheDocument();
  });

  test("shows the details section when the user clicks on the 'show details' button", () => {
    const { getByText } = render(<Event event={mockEvent} />);
    fireEvent.click(getByText('Show details'));
    expect(getByText(mockEvent.description)).toBeInTheDocument();
    expect(getByText('Hide details')).toBeInTheDocument();
  });

  test("hides the details section when the user clicks on the 'hide details' button", () => {
    const { getByText, queryByText } = render(<Event event={mockEvent} />);
    fireEvent.click(getByText('Show details'));
    fireEvent.click(getByText('Hide details'));
    expect(queryByText(mockEvent.description)).not.toBeInTheDocument();
    expect(getByText('Show details')).toBeInTheDocument();
  });
});
