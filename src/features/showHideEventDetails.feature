Feature: Show or hide event details
  Scenario: Event elements are collapsed by default.
    Given the user is viewing the list of events
    When the events are displayed
    Then each event element should be collapsed by default, showing only essential information.

  Scenario: Expand an event to see details.
    Given the user is viewing the list of events
    When the user clicks on an event element
    Then the event should expand to display detailed information about the event.

  Scenario: Collapse an event to hide details.
    Given the user has expanded an event element to view details
    When the user clicks again on the expanded event element
    Then the event should collapse to hide the detailed information.
