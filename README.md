# Meet - Event Discovery App

Meet is a React-based event discovery app that allows users to browse and explore upcoming events across various cities. The app is designed for a seamless user experience, offering features like filtering events by city, showing or hiding event details, and specifying the number of events displayed. Meet supports offline access, providing cached event data when the user is not connected to the internet. Additionally, the app can be installed as a shortcut on the home screen, and it includes visual data representations through charts that help users make informed decisions about their event attendance.

## Tech Stack
- Serverless
- Google Calendar API
- React
- Jest 
- Puppeteer
- Recharts


## Live Link

[View Meet Online](https://mayyinandprojects.github.io/meet/)

## Features

### 1. Filter Events By City
- **Scenario 1**: Show upcoming events from all cities by default.
  - **Given**: The user has not searched for a city.
  - **When**: The user opens the app.
  - **Then**: The user should see a list of upcoming events from all cities.

- **Scenario 2**: Display city suggestions during search.
  - **Given**: The user is typing in the city search bar.
  - **When**: The user enters at least three characters.
  - **Then**: The user should see a list of suggested cities matching the search input.

- **Scenario 3**: Select a city from the suggested list.
  - **Given**: The user has entered a search term and sees city suggestions.
  - **When**: The user selects a city from the list of suggestions.
  - **Then**: The app should display upcoming events from the selected city.

### 2. Show/Hide Event Details
- **Scenario 1**: Event elements are collapsed by default.
  - **Given**: The user is viewing the list of events.
  - **When**: The events are displayed.
  - **Then**: Each event element should be collapsed by default, showing only essential information.

- **Scenario 2**: Expand an event to see details.
  - **Given**: The user is viewing the list of events.
  - **When**: The user clicks on an event element.
  - **Then**: The event should expand to display detailed information about the event.

- **Scenario 3**: Collapse an event to hide details.
  - **Given**: The user has expanded an event element to view details.
  - **When**: The user clicks again on the expanded event element.
  - **Then**: The event should collapse to hide the detailed information.

### 3. Specify Number of Events
- **Scenario 1**: Show 32 events by default when no number is specified.
  - **Given**: The user has not specified the number of events to display.
  - **When**: The user opens the app.
  - **Then**: The app should display 32 upcoming events by default.

- **Scenario 2**: User can change the number of events displayed.
  - **Given**: The user is viewing the list of events.
  - **When**: The user changes the number of events to display in the settings.
  - **Then**: The app should update the list to display the specified number of upcoming events.

### 4. Use the App When Offline
- **Scenario 1**: Show cached data when offline.
  - **Given**: The user has previously used the app with an internet connection.
  - **When**: The user opens the app without an internet connection.
  - **Then**: The app should display cached data from the last session.

- **Scenario 2**: Show error when changing search settings offline.
  - **Given**: The user is offline and viewing cached data.
  - **When**: The user attempts to change the search settings (city or number of events).
  - **Then**: The app should display an error message indicating that the operation cannot be completed offline.

### 5. Add an App Shortcut to the Home Screen
- **Scenario 1**: Install the app as a shortcut on the home screen.
  - **Given**: The user is using a supported device.
  - **When**: The user chooses to add the app to their home screen.
  - **Then**: The app should be installed as a shortcut on the user's home screen.

### 6. Display Charts Visualizing Event Details
- **Scenario 1**: Show a chart with the number of upcoming events in each city.
  - **Given**: The user is viewing the app's dashboard.
  - **When**: The app has data on upcoming events in various cities.
  - **Then**: The app should display a chart visualizing the number of upcoming events in each city.

## Development and Deployment

### CI/CD Practices
The development process for Meet utilizes CI/CD (Continuous Integration and Continuous Delivery) practices to ensure the app is always in a deployable state. Automated tests run frequently to catch issues early, and deployment to the production environment is streamlined for quick and reliable updates.

### Key Technologies Used
- **React**: For building the user interface.
- **Bootstrap**: For responsive design and UI components.
- **PWA Support**: To allow the app to be installed as a shortcut on mobile devices.
- **Jest and Puppeteer**: For automated testing and end-to-end test coverage.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mayyinandprojects/meet.git

2. Navigate into the project directory:
    ```bash
    cd meet

Run the app:
    ```bash
    npm start

## Testing

Unit and Integration Tests: Run using Jest.
    ```bash
    npm run test

End-to-End Tests: Run using Puppeteer.
    ```bash
    npm run test:e2e

## License
This project is made solely for educational purpose as part of Career Foundry Fullstack Development Course. This is released under the MIT License.


