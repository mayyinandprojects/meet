Feature: Specify Number of Events

  Scenario: Show 32 events by default when no number is specified
    Given the user has not specified the number of events to display
    When the user opens the app
    Then the app should display 32 upcoming events by default

  Scenario: User can change the number of events displayed
    Given the user is viewing the list of events
    When the user changes the number of events to display in the settings
    Then the app should update the list to display the specified number of upcoming events
